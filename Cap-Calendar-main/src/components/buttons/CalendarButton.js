import pubSub from "../../services/PubSub.js";
import { CHANNELS } from "../../services/Config.js";
import css from './buttons.css.js';
import cssbase from '../core/componentDateBase.css.js';

const BUTTON = Object.freeze({
    UP: 1,
    DOWN: -1
})

const ACTION_IS_NULL = "action no contiene un valor correcto";

export class CalendarButton extends HTMLElement {
    constructor() {
        super();
        this.action = BUTTON.UP;
        this._shadow = this.attachShadow({mode: "open"});
    }
    get action() {
        return this._action;
    }
    set action(value) {
        this._action = value;
    }
    _create(){
        let button = document.createElement("button");     
        button.setAttribute("action", this._action);
        this._shadow.appendChild(button);
    }
    _handlerClick(ev) {
        ev.stopPropagation();
        pubSub.emit(CHANNELS.CHANGEMONTH, this.action);
    }
    connectedCallback() {
        this.addEventListener("click", this._handlerClick);        
    }
    disconnectedCallback() {
        this.removeEventListener("click", this._handlerClick);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        let action = null;
        if (oldValue !== newValue && newValue) {
            action = BUTTON[newValue.toUpperCase()]
        }
        if (!action) {
            throw ACTION_IS_NULL;
        }
        this.action = action;
        this._getStyle();
        this._create();
    }
    static get observedAttributes() { return ['action']; }

    _getStyle(){
        this._shadow.adoptedStyleSheets = [cssbase, css];
    }
}

customElements.define("cap-button", CalendarButton);