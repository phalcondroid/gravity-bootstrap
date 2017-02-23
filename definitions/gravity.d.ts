declare namespace Environment {
    class Config {
        private config;
        /**
         *
         */
        setConfig(config: Object, env?: number): void;
        /**
         *
         */
        getConfig(env?: number): Object;
    }
}
declare namespace Environment {
    class Scope {
        static LOCAL: number;
        static DEV: number;
        static TEST: number;
        static QA: number;
        static STAGING: number;
        static PRODUCTION: number;
    }
}
declare namespace Errors {
    class Message {
        static NOT_VALID_ARRAY: string;
        static NOT_VALID_ARRAY_OBJECT: string;
        static NOT_VALID_OBJECT: string;
        static getCodeMessage(code: number, custom: string): string;
    }
}
declare namespace Errors {
    class MessageCode {
        static NOT_VALID_ARRAY: number;
        static NOT_VALID_ARRAY_OBJECT: number;
        static NOT_VALID_OBJECT: number;
    }
}
declare namespace Events {
    interface ManagerInterface {
        /**
         * Attach a listener to the events manager
         *
         * @param string eventType
         * @param object|callable handler
         */
        attach(controller: any, event: any): any;
        /**
         * Detach the listener from the events manager
         *
         * @param string eventType
         * @param object handler
         */
        detach(eventType: any, handler: any): any;
        /**
         * Removes all events from the EventsManager
         */
        detachAll(controller: any): any;
        /**
         * Fires an event in the events manager causing the active listeners
         */
        fire(controller: any, event: any, callback: any): any;
        /**
         * Returns all the attached listeners of a certain type
         *
         * @param string type
         * @return array
         */
        getListeners(type: any): any;
    }
}
declare namespace Events {
    interface EventsAwareInterface {
        /**
         * Sets the events manager
         */
        setEventsManager(eventsManager: any): any;
        /**
         * Returns the internal event manager
         */
        getEventsManager(): Events.ManagerInterface;
    }
}
declare namespace Events {
    class Manager implements ManagerInterface {
        private events;
        attach(controller: any, event: any): void;
        detach(controller: any, event: any): void;
        detachAll(): void;
        fire(controller: any, event: any, callback: any): void;
        getListeners(): void;
    }
}
declare namespace Gravity {
    class Application {
        /**
         *
         */
        private config;
        /**
         *
         */
        private env;
        /**
         *
         */
        constructor();
        /**
         *
         */
        setScope(env: number): void;
        /**
         *
         */
        setConfig(config: Environment.Config): void;
        /**
         *
         */
        private resolveConfig(di);
        /**
         *
         */
        private resolveUrl(di, urls);
        /**
         *
         */
        private resolveControllers(di, controllers);
        /**
         *
         */
        private resolveServices(di, service);
        /**
         *
         */
        start(): void;
    }
}
declare namespace Helper {
    class ArrayHelper {
        constructor();
        static inArray(container: any[], element: any): boolean;
    }
}
declare namespace Helper {
    class MathHelper {
        constructor();
        static getRandom(init: any, last: any): number;
        static getUUID(): string;
        static getS4(): string;
    }
}
declare namespace Helper {
    class StringHelper {
        constructor();
        /**
         * [sanitizeString description]
         * @param  {string} str [description]
         * @return {[type]}     [description]
         */
        static sanitizeString(str: string): string;
        /**
         * [capitalize description]
         * @param  {[type]} str [description]
         * @return {[type]}     [description]
         */
        static capitalize(str: any): any;
    }
}
declare namespace Helper {
    class Uuid {
        constructor();
        static get(): string;
    }
}
declare namespace Helper {
    class Validator {
        static validStructArray(data: any[]): boolean;
    }
}
declare namespace Loader {
    interface DiConstructorInjection {
        initialize(di: Service.Container): any;
    }
}
declare namespace Service {
    interface InjectionAwareInterface {
        di: Service.Container;
        setDi(di: Service.Container): any;
        getDi(): Service.Container;
    }
}
declare namespace Logic {
    class Controller implements Service.InjectionAwareInterface {
        di: Service.Container;
        /**
         *
         */
        initialize(): void;
        /**
         *
         */
        onConstruct(): void;
        /**
         *
         */
        setDi(di: Service.Container): void;
        /**
         *
         */
        getDi(): Service.Container;
    }
}
declare namespace ModelData {
    class RawModel {
        state: number;
        identify: string;
        initialize(): void;
        beforeInsert(): void;
        beforeFind(): void;
        beforeUpdate(): void;
        beforeDelete(): void;
        /**
         * [getClassName description]
         * @return {[type]} [description]
         */
        getClassName(): string;
        /**
         *
         */
        getIdentify(): string;
    }
}
declare namespace ModelData {
    class AjaxModel extends RawModel implements ModelInterface {
        source: string;
        insertUrl: string;
        deleteUrl: string;
        updateUrl: string;
        findUrl: string;
        params: Object;
        internalId: string;
        method: string;
        constructor();
        setSource(data: any): void;
        getClassName(): string;
        setInsertUrl(url: string): void;
        setFindUrl(url: string): void;
        setDeleteUrl(url: string): void;
        setUpdateUrl(url: string): void;
        getInsertUrl(): string;
        getFindUrl(): string;
        getDeleteUrl(): string;
        getUpdateUrl(): string;
        setParams(params: Object): void;
        getParams(): Object;
        setMethod(method: string): void;
        getMethod(): string;
    }
}
declare namespace ModelData {
    class Deny {
        static getDeny(): string[];
    }
}
declare namespace ModelData {
    interface ModelInterface {
        insertUrl: string;
        deleteUrl: string;
        updateUrl: string;
        findUrl: string;
        state: number;
        internalId: string;
        setSource(source: Object): void;
        setFindUrl(url: string): void;
        setInsertUrl(url: string): void;
        setUpdateUrl(url: string): void;
        setDeleteUrl(url: string): void;
        getFindUrl(): string;
        getInsertUrl(): string;
        getUpdateUrl(): string;
        getDeleteUrl(): string;
    }
}
declare namespace ModelData {
    class StaticModel extends RawModel implements Service.InjectionAwareInterface {
        private index;
        private container;
        di: Service.Container;
        /**
         *
         */
        constructor(di: Service.Container);
        /**
         *
         */
        setData(data: any): void;
        /**
         *
         */
        getData(): string;
        /**
         *
         */
        getObjectData(): any;
        /**
         *
         */
        setDi(di: Service.Container): void;
        /**
         *
         */
        getDi(): Service.Container;
        /**
         *
         */
        setIndex(index: any): void;
        /**
         *
         */
        getIndex(): number;
        /**
         *
         */
        getSerialized(): void;
    }
}
declare namespace Network {
    class Ajax implements Service.InjectionAwareInterface {
        di: Service.Container;
        private httpRequest;
        private context;
        private method;
        private parameters;
        private error;
        private url;
        private container;
        responseFn: Function;
        bfSendFn: Function;
        /**
         *
         */
        constructor();
        /**
         *
         */
        setContext(ctx: Object): void;
        /**
         *
         */
        getContext(): Object;
        /**
         *
         */
        setUrl(url: any): this;
        /**
         *
         */
        getUrl(): string;
        /**
         *
         */
        set(key: any, value: any): void;
        /**
         *
         */
        get(key: any): any;
        /**
         *
         */
        setParams(params: any, value?: any): this;
        /**
         *
         */
        POST(): this;
        /**
         *
         */
        PUT(): this;
        /**
         *
         */
        DELETE(): this;
        /**
         *
         */
        GET(): this;
        /**
         *
         */
        setMethod(method: string): this;
        addContext(): void;
        /**
         *
         */
        response(responseFunction: Function): this;
        /**
         *
         */
        beforeSend(fn: Function): void;
        /**
         *
         */
        private setHeaders();
        /**
         *
         */
        getError(errorFunction: any): void;
        clear(): void;
        /**
         *
         */
        send(fn?: any): void;
        /**
         *
         */
        setDi(di: Service.Container): void;
        /**
         *
         */
        getDi(): Service.Container;
    }
}
declare namespace Network {
    class MethodType {
        static POST: string;
        static GET: string;
        static PUT: string;
        static DELETE: string;
    }
}
declare namespace Paginator {
    class Model {
        private pages;
        private context;
        /**
         *
         */
        constructor(context: any);
        /**
         *
         */
        getPages(): void;
    }
}
declare namespace Eval {
}
declare namespace Persistence {
    class ComparisonOperators {
        static AND: string;
        static OR: string;
        static EQUAL: string;
        static DIFFERENT: string;
    }
}
declare namespace Persistence {
    class DatamapperOperators {
        static OR: string;
        static AND: string;
        static SORT: string;
        static IS_NOT: string;
        static LIMIT: string;
        static COLUMNS: string;
        static CONDITIONAL: string;
    }
}
declare namespace Persistence {
    class DataType {
        static BOOLEAN: number;
        static INTEGER: number;
        static STRING: number;
        static OBJECT: number;
        static ARRAY: number;
        static CLASS: number;
        static BOOLEAN_TYPE: string;
        static INTEGER_TYPE: string;
        static STRING_TYPE: string;
        static OBJECT_TYPE: string;
        /**
         *
         */
        static getValueByType(value: any): any;
    }
}
declare namespace Reflection {
    class Reflection {
        private classToReflect;
        private methods;
        private attributes;
        constructor();
        read(obj: any): string;
        getAtttributeAsObjects(obj: any): any[];
        /**
         *
         */
        getMethods(): any[];
        /**
         *
         */
        getAttributes(): any[];
    }
}
declare namespace Service {
    class Container {
        private service;
        set(serviceName: any, content: any): void;
        get(serviceName: any): any;
        setPersistent(serviceName: any, content: any): void;
        getPersistent(serviceName: any): string;
    }
}
declare namespace Persistence {
    class UnitOfWork {
        static NEW: number;
        static CREATED: number;
        static DELETED: number;
        private detached;
        private updated;
        private deleted;
        constructor();
    }
}
declare namespace Persistence {
    class Hydrator {
        private reflector;
        constructor();
        hydrate(model: any, data: any): any;
    }
}
declare namespace Persistence {
    class Filter {
        private params;
        private first;
        private final;
        private init;
        private sort;
        private limit;
        private columns;
        constructor();
        buildCondition(params: any): void;
        getSort(sortContent: any): void;
        getLimit(limit: any): void;
        getExpression(key: any, content: any, operator: any, index: any, length: any, comparison?: string): void;
        /**
         *
         */
        getColumns(row: any): Object;
        /**
         *
         */
        getMultipleRowValues(response: any, conds?: boolean): any[];
        getOneRowValue(data: any): void;
    }
}
declare namespace Persistence {
    class EntityManager implements EntityManagerInterface {
        di: Service.Container;
        uow: UnitOfWork;
        private container;
        private ajax;
        private hydrator;
        private source;
        private model;
        private fnResponse;
        private resultSet;
        constructor();
        /**
         *
         */
        private getContainer();
        /**
         *
         */
        find(model: any, params?: Object): this;
        /**
         *
         */
        findOne(model: any, params?: Object): this;
        /**
         *
         */
        private getResultSet(response, params, model);
        /**
         *
         */
        save(model: any): this;
        /**
         *
         */
        delete(): boolean;
        /**
         *
         */
        response(fn: Function): this;
        /**
         *
         */
        private setResponse(data, type, model, params);
        /**
         *
         */
        flush(): boolean;
        /**
         *
         */
        reset(): boolean;
        /**
         *
         */
        group(): {};
        /**
         *
         */
        distinct(): {};
        /**
         *
         */
        count(): number;
        /**
         *
         */
        purge(): boolean;
        /**
         *
         */
        forget(): boolean;
        checksum(obj: any): string;
        setDi(di: Service.Container): void;
        getDi(): Service.Container;
    }
    interface EntityManagerInterface extends Service.InjectionAwareInterface {
        uow: Object;
        find(conext: any, model: ModelData.RawModel, params: Object): any;
        findOne(context: any, model: ModelData.RawModel, params: Object): any;
        count(context: any, model: ModelData.RawModel, params: Object): any;
        distinct(context: any, model: ModelData.RawModel, params: Object): any;
        group(context: any, model: ModelData.RawModel, params: Object): any;
        save(context: any, model: ModelData.RawModel): any;
        delete(context: any, model: ModelData.RawModel): any;
        forget(): any;
        flush(): any;
        purge(): any;
        reset(): any;
    }
}
declare namespace Persistence {
    class Sort {
        static ASC: number;
        static DESC: number;
        static sortByField(data: any, field: any): any[];
    }
}
declare namespace Reflection {
    class Checksum {
        /**
         *
         */
        private toObj;
        /**
         *
         */
        constructor(obj: Object);
        private utf8ToBase64(str);
        /**
         *
         */
        getChecksum(): Object;
    }
}
declare namespace Service {
    class FactoryDefault extends Service.Container {
        constructor();
    }
}
declare namespace Url {
    class Url extends Service.Container {
    }
}
declare namespace View {
    /**
     *
     * @type
     */
    class ViewElement implements Service.InjectionAwareInterface {
        di: any;
        em: Persistence.EntityManager;
        /**
         * Node javascript element
         */
        element: any;
        /**
         * Controller
         */
        context: any;
        /**
         *
         */
        id: any;
        /**
         *
         */
        private deny;
        /**
         * [url description]
         * @type {String}
         */
        private url;
        /**
         * [className description]
         * @type {[type]}
         */
        private className;
        /**
         *
         * @param  {string} name [description]
         * @return {[type]}      [description]
         */
        constructor(name?: any, newClone?: boolean);
        initialize(): void;
        /**
         *
         */
        getContext(): any;
        /**
         *
         */
        setContext(ctx: any): void;
        /**
         *
         */
        setElement(element: any): this;
        /**
         *
         */
        show(): this;
        /**
         *
         */
        hide(): this;
        /**
         *
         */
        getById(id: string): any;
        /**
         *
         */
        getByTag(name: string): any;
        /**
         *
         */
        getByClass(name: string): any;
        /**
         *
         */
        create(tag: string): this;
        /**
         * Create html component like jquery object
         *
         * @param  {string} element [description]
         * @param  {string} name    [description]
         * @return ViewElement
         */
        init(element: string, name: string): HTMLElement;
        /**
         *
         * @return
         */
        getType(): any;
        /**
         *
         * @param  {string} class [description]
         * @return {[type]}       [description]
         */
        class(attrClass: string): this;
        /**
         *
         */
        addClass(attrClass: string): this;
        /**
         * Set inner html throught
         */
        setInnerHtml(html: any): any;
        /**
         *
         */
        getAttribute(attr: any): any;
        /**
         *
         * @return {[type]} [description]
         */
        addChild(element: any): this;
        /**
         * [click description]
         * @param  {Function} fn [description]
         * @return {[type]}      [description]
         */
        click(fn: any): this;
        /**
         *
         */
        doubleClick(fn: any): this;
        /**
         *
         * @return {[type]} [description]
         */
        change(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        keypress(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        keydown(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        keyup(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        blur(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        focus(fn: any): this;
        destroyEvent(event: any): void;
        /**
         * [get description]
         * @return {[type]} [description]
         */
        getElement(): any;
        /**
         * Append elements
         * @param value append
         * @return this
         */
        append(append: any): this;
        /**
         *
         */
        data(key: any, value?: boolean): this;
        /**
         *
         */
        private checkAppendValue(append);
        /**
         *
         * @param  html [description]
         * @return
         */
        html(html?: any): any;
        /**
         *
         */
        verifyElement(append: any, type?: string): void;
        /**
         *
         */
        private removeChildNodes();
        /**
         *
         */
        private removeChilds(element, childs);
        /**
         *
         * @param attr
         * @return
         */
        attr(attr: any, value?: any): any;
        /**
         *
         */
        getAttr(attr: any): any;
        /**
         * [css description]
         * @param   css [description]
         * @return
         */
        css(css: any, value?: any): this;
        /**
         *
         * @param  {[type]} event [description]
         * @return {[type]}       [description]
         */
        unbind(event: any): this;
        /**
         * [getClassName description]
         * @return {[type]} [description]
         */
        getClassName(): string;
        /**
         * [validateAndSet description]
         * @param  {[type]} config [description]
         * @return {[type]}        [description]
         */
        validateAndSet(config: any): void;
        /**
         * [clone description]
         * @return {[type]} [description]
         */
        clone(newIdentify?: string): ViewElement;
        /**
         *
         * @param  {any = null}        val [description]
         * @return {[type]}   [description]
         */
        val(val?: any): any;
        /**
         * zzzz
         * @param  {any = null}        text [description]
         * @return {[type]}   [description]
         */
        text(text?: any): any;
        /**
         *
         */
        empty(): void;
        /**
         *
         */
        getChilds(): any[];
        /**
         *
         */
        getAsObject(): any[];
        /**
         *
         */
        getAsJson(): string;
        /**
         *
         */
        getRandomString(): string;
        /**
         *
         */
        remove(element?: boolean): void;
        /**
         *
         */
        setId(id: any): this;
        /**
         *
         */
        getId(): any;
        /**
         *
         */
        setDi(di: any): void;
        /**
         *
         */
        getDi(): any;
    }
}
declare namespace View {
    /**
     *
     */
    class A extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
        /**
         * [favIcon description]
         * @return {[type]} [description]
         */
        favIcon(favIcon: any): this;
        /**
         * [href description]
         * @param  {[type]} href [description]
         * @return {[type]}      [description]
         */
        href(href: any): this;
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Abbr extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Address extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Area extends View.ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Article extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Aside extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Audio extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class B extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Base extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Bdi extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Bdo extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Blockquote extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Body extends ViewElement {
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Br extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     *
     */
    class Button extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
        /**
         *
         * @param
         * @return
         */
        type(type: any): this;
        /**
         *
         * @return
         */
        favIcon(favIcon: any): this;
        /**
         *
         * @return
         */
        success(): this;
        /**
         *
         * @return
         */
        notice(): this;
        /**
         *
         * @return
         */
        default(): this;
        /**
         *
         * @return
         */
        primary(): this;
        /**
         * [warning description]
         * @return {[type]} [description]
         */
        warning(): this;
        /**
         * [danger description]
         * @return {[type]} [description]
         */
        danger(): this;
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Canvas extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Caption extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Cite extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Code extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Col extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class ColGroup extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Datalist extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Db extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Del extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Details extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Dfn extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Dialog extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Div extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Dl extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Dt extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Em extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Embed extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Fieldset extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Figcaption extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Figure extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Footer extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Form extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class H1 extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class H2 extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class H3 extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class H4 extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class H5 extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class H6 extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Head extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Header extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class I extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Iframe extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Img extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
        src(src: any): this;
    }
}
declare namespace View {
    /**
     * [Input description]
     * @type {[type]}
     */
    class Input extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
        /**
         * [type description]
         * @param  {[type]} type [description]
         * @return {[type]}      [description]
         */
        type(type: any): this;
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Ins extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Kbd extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Keygen extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Label extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Leyend extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Li extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Link extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Main extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Map extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Menu extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Menuitem extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Meta extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Meter extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Nav extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Noscrip extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Object extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Ol extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Optgroup extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     *
     * @type
     */
    class Option extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
        setValue(val: any): this;
        /**
         *
         */
        getValue(): any;
        /**
         *
         */
        setContent(content: any): this;
        /**
         *
         */
        getContent(): any;
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Output extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class P extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Param extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Pre extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Progress extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Q extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Rp extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Rt extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Ruby extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class S extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Samp extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Script extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Section extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    class Select extends ViewElement {
        private choose;
        /**
         *
         */
        constructor(ctx: any);
        /**
         *
         */
        getSelected(): Option;
        /**
         *
         */
        setChoose(choose: any): void;
        /**
         *
         */
        select(value: any): void;
        /**
         *
         * @param  content
         * @return
         */
        build(content: any, fields: any): this;
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Small extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Source extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Span extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Strong extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Style extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Sub extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [Table description]
     * @type {[type]}
     */
    class Table extends ViewElement {
        private tblElements;
        private thead;
        private tbody;
        private tfoot;
        private tr;
        private th;
        private td;
        private system;
        private header;
        private fnCHeader;
        private fnCContent;
        /**
         *
         */
        constructor(ctx: any);
        /**
         *
         */
        getThead(): any;
        /**
         *
         */
        getTbody(): any;
        /**
         *
         */
        toHead(component: any): this;
        /**
         *
         */
        toHeadTr(component: any): this;
        /**
         *
         */
        toBody(component: any): this;
        /**
         *
         */
        toFoot(component: any): this;
        /**
         *
         */
        toBodyTr(component: any): this;
        /**
         *
         */
        toFootTr(component: any): this;
        /**
         *
         *
         */
        setHeader(columns: any): this;
        /**
         * [setCustomize description]
         * @param  {Function} fn      [description]
         * @return {[type]}           [description]
         */
        setHeaderCustomize(fn: any): this;
        /**
         *
         * @param  {[type]} rows
         * @return {[type]}
         */
        build(content: any): this;
        /**
         * [setCustomize description]
         * @param  {Function} fn      [description]
         * @return {[type]}           [description]
         */
        setContentCustomize(fn: any): this;
        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        private validateSystemKeys(row);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Tbody extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Td extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
        /**
         *
         * @param  {[type]} num [description]
         * @return {[type]}     [description]
         */
        colspan(cols: any): this;
        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        rowspan(rows: any): this;
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Textarea extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Tfoot extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Th extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
        colspan(cols: any): this;
        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        rowspan(rows: any): this;
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Thead extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Time extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Title extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Tr extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Track extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class U extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Ul extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Var extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Video extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Wbr extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    class ViewAdapter {
        /**
         *
         */
        private element;
        /**
         *
         */
        constructor(element: any);
        /**
         *
         */
        get(context: any): any;
    }
}
declare namespace View {
    class Controller implements Service.InjectionAwareInterface {
        di: Service.Container;
        em: Persistence.EntityManager;
        /**
         *
         */
        initialize(): void;
        /**
         *
         */
        getById(id: string): any;
        /**
         *
         */
        getByTag(name: string): any;
        /**
         *
         */
        getByClass(name: string): any;
        /**
         *
         */
        getDi(): Service.Container;
        /**
         *
         */
        setDi(di: Service.Container): void;
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Summary extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
declare namespace View {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Sup extends ViewElement {
        /**
         *
         */
        constructor(ctx: any);
    }
}
