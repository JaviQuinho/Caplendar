const sheet = new CSSStyleSheet();

sheet.replace(
               `:host{
                    color: rgb(230,230,230);
                    padding: 1em 1em;
                    width: 14em;  
                    border-top: 0.05em solid darkgrey; 
                    display: block;
                    min-width: 21rem;
                }`
)

export default sheet;