/// <reference path="./definitions/jquery.d.ts"/>
/// <reference path="./definitions/gravity.d.ts"/>

namespace Gravity
{
    /**
     * [Tabs description]
     * @type {[type]}
     */
    export class Tabs extends View.Div
    {
        private idStr;

        /**
         *
         */
        public initialize()
        {
            this.idStr = this.getRandomString();
        }

        /**
         *
         */
        public setHeader(header : any[])
        {
            if (!Array.isArray(header)) {
                throw "Header must be array";
            }

            var ul = new View.Ul(this.getContext());
            ul.attr("role", "tablist");
            ul.class("nav nav-tabs");

            var i = 0;
            for (var key in header) {

                let li = new View.Li(
                    this.getContext()
                );
                var cls = "";
                if (i == 0) {
                    cls = "active";
                }
                li.attr({
                    "class" : cls,
                    "role"  : "presentation",
                });

                let a = new View.A(
                    this.getContext()
                );
                a.attr({
                    "aria-controls" : "home",
                    "role" : "tab",
                    "data-toggle" : "tab",
                    "href" : "#tab" + i + this.idStr
                });
                a.append(header[key]);
                li.append(a);

                ul.append(
                    li
                );
                this.append(ul);
                i++;
            }
        }

        /**
         *
         */
        public setContent(content)
        {
            if (!Array.isArray(content)) {
                throw "Header must be array";
            }

            var divContent = new View.Div(
                this.getContext()
            );
            divContent.class("tab-content");

            var i = 0;
            for (var key in content) {
                var divRow = new View.Div(
                    this.getContext()
                );
                var cls = "";
                if (i == 0) {
                  cls = " active";
                }

                divRow.attr({
                    "role"  : "tabpanel",
                    "class" : "tab-pane" + cls,
                    "id"    : "tab" + i + this.idStr
                });
                divRow.append(content[key])
                divContent.append(
                    divRow
                );
                i++;
            }

            this.append(divContent);
        }
    }
}
