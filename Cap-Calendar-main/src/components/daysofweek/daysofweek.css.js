const sheet = new CSSStyleSheet();
sheet.replace(`:host{
    
    display: grid; 
    grid-template-columns: repeat(7, 3em);
    justify-items: center;
    
}`)

export default sheet