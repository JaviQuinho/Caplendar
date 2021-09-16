const sheet = new CSSStyleSheet();
sheet.replace(`:host{
                    color: rgb(127, 178, 229);
                    padding: 0 1rem 1rem;
                }
                :host(:hover){
                    color: rgb(154, 158, 161);
                }`
)

export default sheet