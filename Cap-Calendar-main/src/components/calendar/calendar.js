export class Calendar extends HTMLElement{
    constructor(){
        super();
        this._shadow = this.attachShadow({mode: "open"});
        this._create();
    }
    _create(){
        let clock = document.createElement("cap-clock");
        this._shadow.appendChild(clock);
        let sysDate = document.createElement("cap-system-date");
        this._shadow.appendChild(sysDate);
        let div = document.createElement("div");
        div.setAttribute("style", "display:grid; grid-template-columns: repeat(7, 1fr); border-top: 0.05em solid darkgrey; background-color: rgb(70,70,70); max-width: 23rem")
        let monthDate = document.createElement("cap-month-date");
        div.appendChild(monthDate);
        let calendarDownButton = document.createElement("cap-button");
        calendarDownButton.setAttribute("action", "down");
        div.appendChild(calendarDownButton);
        let calendarUpButton = document.createElement("cap-button");
        calendarUpButton.setAttribute("action", "up");
        div.appendChild(calendarUpButton);
        this._shadow.appendChild(div);
        let daysOfWeek = document.createElement("cap-days-of-week");
        this._shadow.appendChild(daysOfWeek);
        let calendar = document.createElement("cap-grid-calendar");
        this._shadow.appendChild(calendar);
        let eventDate = document.createElement("cap-event-date");
        this._shadow.appendChild(eventDate);
    }
}
customElements.define("cap-calendar", Calendar)