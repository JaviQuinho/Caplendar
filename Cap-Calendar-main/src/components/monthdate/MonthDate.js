import { DateService } from "../../services/DateService.js";
import { FormatService } from "../../services/FormatService.js";
import { ComponentDateBase } from "../core/componentDateBase.js";
import css from './monthdate.css.js';
import { CHANNELS } from "../../services/Config.js";
import pubSub from "../../services/PubSub.js";

export class MonthDate extends ComponentDateBase{
    _formatDate() {
        return FormatService.getMonth(this.date);
    }
 
    _changeDate(value) {
      return !this.date || !DateService.isMonth(value, this._oldDate);
    }
 
    _setStyle() {
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }
 
    connectedCallback(value) {
        const texto = super._create
        const disposableDate = pubSub.on(CHANNELS.CHANGEDATE, (value) => {
             if (!DateService.isMonth(value, this._oldDate)) {
                 super._update(texto,value)
             }
         })
         const disposableMonth = pubSub.on(CHANNELS.CHANGEMONTH, (diff) => {
             let newDate = this._date;
             newDate.setMonth(this._date.getMonth() + diff);
             super._update(texto,newDate)
         })
         this._disposables.push(disposableDate, disposableMonth);
     }
}
 
customElements.define('cap-month-date', MonthDate);