/// <reference path="./definitions/jquery.d.ts"/>
/// <reference path="./definitions/gravity.d.ts"/>

namespace Bootstrap
{
    /**
     *
     * @type
     */
    export class Modal extends View.Div
    {
        private body;
        private foot;
        private header;
        private dialog;
        private content;
        private container;
        private closeButton;

        /**
         *
         * @return
         */
        public initialize()
        {
            this.attr({
                "class" : "modal fade",
                "tabindex" : "-1",
                "role" : "dialog",
                "aria-labelledby" : "myModalLabel"
            });

            this.dialog = new View.Div(this.getContext());
            this.dialog.attr({
                "class" : "modal-dialog",
                "role" : "document"
            });

            this.content = new View.Div(this.getContext());
            this.content.attr({
                "class" : "modal-content"
            });

            this.header = new View.Div(
                this.getContext()
            );
            this.header.class("modal-header");

            this.body = new View.Div(
                this.getContext()
            );
            this.body.class("modal-body");

            this.foot = new View.Div(
                this.getContext()
            );
            this.foot.class("modal-footer");

            this.setCloseButton();

            return this;
        }

        /**
         * [large description]
         * @return {[type]} [description]
         */
        public large() {
            this.dialog.addClass("modal-lg");
            return this;
        }

        /**
         * [small description]
         * @return {[type]} [description]
         */
        public small() {
            this.dialog.addClass("modal-sm");
            return this;
        }

        /**
         * [normal description]
         * @return {[type]} [description]
         */
        public normal() {
            this.dialog.removeClass("modal-lg");
            this.dialog.removeClass("modal-sm");
            return this;
        }

        /**
         *
         * @param  {boolean = true}        status [description]
         * @param  {any     = ""}          title  [description]
         * @return {[type]}       [description]
         */
        public setCloseButton(status: boolean = true, title: any = "") {
            if (status) {
                let buttonClose = new View.Button(
                    this.getContext()
                );
                buttonClose.attr({
                    "type" : "button",
                    "class" : "close",
                    "data-dismiss" : "modal",
                    "aria-label" : title === "" ? "Close" : title
                });
                let span = new View.Span(
                    this.getContext()
                );
                span.attr({
                    "aria-hidden" : "true"
                });
                span.html("&times;");
                buttonClose.html(span);
                this.header.append(
                    buttonClose
                );
            }
            return this;
        }

        /**
         *
         * @param  {[type]} title [description]
         * @return {[type]}       [description]
         */
        public setHeader(title: any) {
            this.header.append(
                title
            );
            return this.header;
        }

        /**
         *
         * @param  {[type]} content [description]
         * @return {[type]}         [description]
         */
        public setBody(content: any) {
            this.body.append(
                content
            );
            return this;
        }

        /**
         *
         * @param  {[type]} content [description]
         * @return {[type]}         [description]
         */
        public setFooter(content: any = "") {
            this.foot.append(
                content
            );
            return this;
        }

        /**
         *
         */
        public launch()
        {
            this.container.modal('show');
            return this;
        }

        /**
         *
         */
        public build() {

            this.content.append(
                this.header,
                this.body,
                this.foot
            );

            this.dialog.append(
                this.content
            );

            this.append(
                this.dialog
            );

            return this;
        }

        /**
         *
         */
        public get()
        {
            return this;
        }
    }
}
