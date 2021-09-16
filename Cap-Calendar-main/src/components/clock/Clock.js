import { FormatService } from "../../services/FormatService.js";
import { ComponentDateBase } from "../core/componentDateBase.js";
import sheet from './clock.css.js';

export class Clock extends ComponentDateBase {
 
    _formatDate(){
        return FormatService.getTimer(this.date);
    }

    _changeDate(value){
        return true;
    }

    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, sheet];
    }

}
window.customElements.define("cap-clock", Clock);

