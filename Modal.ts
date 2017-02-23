/// <reference path="./definitions/jquery.d.ts"/>
/// <reference path="./definitions/gravity.d.ts"/>

namespace Gravity
{
    /**
     *
     * @type
     */
    export class Modal extends View.Div
    {
        /**
         *
         */
        private modalDialog;

        /**
         *
         */
        private content;

        /**
         *
         */
        private body;

        /**
         *
         */
        private header;

        /**
         *
         */
        private footer;

        /**
         *
         */
        public initialize()
        {
            this.attr({
                "class"    : "modal fade",
                "tabindex" : "-1",
                "role"     : "dialog",
                "aria-labelledby" : "myModalLabel"
            });
            this.setDefault();
        }

        /**
         *
         */
        private setDefault()
        {
            this.modalDialog = new View.Div(this.context);
            this.modalDialog.attr({
                "class" : "modal-dialog",
                "role"  : "document"
            });

            this.content = new View.Div(this.context);
            this.content.attr({
                "class" : "modal-content"
            });

            this.header = new View.Div(this.context);
            this.header.class("modal-header");

            this.body   = new View.Div(this.context);
            this.body.class("modal-body");

            this.footer = new View.Div(this.context);
            this.footer.class("modal-footer");

            this.content.append([
                this.header,
                this.body,
                this.footer
            ]);

            this.modalDialog.append(
                this.content
            );
            this.append(
                this.modalDialog
            );
        }

        /**
         *
         */
        public setLarge()
        {
            this.modalDialog.class("modal-dialog modal-lg");
            return this;
        }

        /**
         *
         */
        public setSmall()
        {
            this.modalDialog.class("modal-dialog modal-sm");
            return this;
        }

        /**
         *
         */
        public setHeader(title)
        {
            var closeButton = new View.Div(this.context);
            closeButton.attr({
                "class" : "close",
                "type"  : "button",
                "data-dismiss" : "modal",
                "aria-label"   : "Close"
            });
            var span = new View.Span(this.context);
            span.attr("aria-hidden", "true");
            span.setInnerHtml("&times");
            closeButton.append(span);
            this.header.append([
                closeButton
            ]);
            if (title != "") {
                var titleHeader = new View.H4(this.context);
                titleHeader.class("modal-title");
                titleHeader.append(title);
                this.header.append(titleHeader);
            }

            return this;
        }

        /**
         *
         */
        public setBody(body)
        {
            this.body.append(body);
            return this;
        }

        /**
         *
         */
        public setFooter(footer)
        {
            this.footer.append(footer);
            return this;
        }

        /**
         *
         */
        public launch()
        {
            $(this.element).modal("show");
            return this;
        }
    }
}
