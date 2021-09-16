import { FormatService } from "../../services/FormatService.js";
import css from './systemdate.css.js';
import { ComponentDateBase } from "../core/componentDateBase.js";
import { DateService } from "../../services/DateService.js";

export class SystemDate extends ComponentDateBase{

    _changeDate(value){
        return !this.date || !DateService.isToday(value, this._oldDate);
    }

    _formatDate(){
        return FormatService.getSystemDate(this.date);
    }

    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }
}
customElements.define('cap-system-date', SystemDate);