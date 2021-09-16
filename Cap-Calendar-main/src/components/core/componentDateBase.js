import pubSub from "../../services/PubSub.js";
import  {CHANNELS} from "../../services/Config.js";
const METHOD_NOT_IMPLEMENTED = "Method not implemented";
import css from './componentDateBase.css.js';

export class ComponentDateBase extends HTMLElement{

    constructor(){
        super();
        this._create();
        this.date = new Date();
        this._oldDate = new Date();
        this._disposables = [];
    }

    set date(value){
        this._oldDate = this.date;
        if (this._changeDate(value)) {
            this._date = value;
            this._update();
        }
    }

    get date() {
        return this._date;
    }

    connectedCallback(){
        this._subscribe();
    }

    disconnectedCallback(){
        this._disposables.forEach(dispose => dispose && dispose());
        this._disposables = [];
    }

    _subscribe(channel = CHANNELS.CHANGEDATE) {
        const dispose = pubSub.on(channel, (date) => {
            this.date = date;
        });
        this._disposables.push(dispose);
    }

    _setStyle(){
        throw METHOD_NOT_IMPLEMENTED;
    }

    _isThereStyle(){
        return true;
    }

    _changeDate(value){
        throw METHOD_NOT_IMPLEMENTED;
    }

    _formatDate(){
        throw METHOD_NOT_IMPLEMENTED;
    }

    _update(){
        this._text.data = this._formatDate();
    }

    _create() {
        this._text = document.createTextNode("");
        this._shadow = this.attachShadow({mode: "open"});
        this._shadow.adoptedStyleSheets = [css];
        if(this._isThereStyle()){
            this._setStyle();
            this._shadow.appendChild(this._text);
        }
    }
    
}