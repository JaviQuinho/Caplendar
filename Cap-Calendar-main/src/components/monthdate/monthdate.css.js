const sheet = new CSSStyleSheet();
sheet.replace(`
            :host{
                color: rgb(230,230,230);
                padding: 1em 1em;
                display: inline-block;
                width: 14em;
                }
            :host(:hover) {
                color:grey;
            }`
)

export default sheet