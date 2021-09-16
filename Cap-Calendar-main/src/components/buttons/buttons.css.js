const sheet = new CSSStyleSheet();
sheet.replace(`
:host{
    padding-right: 0.3em;
    background-color: rgb(70,70,70);
    display: inline-block;
}
:host >  button{
    background-color: transparent;
    border: 0.2em solid;
    width: 1.5em;
    height: 1.5em;
}
:host > button[action]:hover{
    color:red;
    border-color: grey transparent transparent grey;
}
:host > button[action="1"]{
    border-color: white transparent transparent white;
	transform: translateY(-40%) rotate(-135deg);
}
:host > button[action="-1"]{
    border-color: white transparent transparent white;
	transform: translateY(40%) rotate(45deg);
}
`)
export default sheet