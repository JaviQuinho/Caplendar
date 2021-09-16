import { FormatService } from "../../services/FormatService.js";
import { ComponentDateBase } from "../core/componentDateBase.js";
import { CHANNELS } from "../../services/Config.js";
import css from './eventdate.css.js';

export class EventDate extends ComponentDateBase{

    constructor(){
        super();
    }

    _setStyle(){
        return document.createElement("style");
    }

    connectedCallback(){
        this._subscribe(CHANNELS.CHANGESELECDTEDDATE);
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }

    _changeDate(){
        return true;
    }

    _formatDate(){
        return FormatService.getSelected(this.date);
    }

}

customElements.define("cap-event-date", EventDate);
