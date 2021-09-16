export class DateService {
    static getDaysOfMonth(date) {
        function calendarMonth(date) {
            let calendar = [];
            const firstDayCalendar = getFirstDayCalendar(date);
            let i = 1;
            for (i = 0; i < 42; i++) {
                let fecha = new Date(firstDayCalendar);
                calendar.push({ date: fecha, 
                                isToday: DateService.isToday(firstDayCalendar, new Date()), 
                                isMonth: DateService.isMonth(firstDayCalendar, date), 
                                isSelected: false });
                firstDayCalendar.setDate(firstDayCalendar.getDate() + 1);
            }
            return calendar;
        }

        function getFirstDayCalendar(date) {
            let firstDay = new Date(date);
            firstDay.setDate(1);
            while (firstDay.getDay() != 1) { 
                firstDay.setDate(firstDay.getDate() - 1); 
            }
            return firstDay;
        }
        return calendarMonth(date);
    }

    static addMonth(date, diff) {
        let newDate = new Date(date);
        newDate.setMonth(date.getMonth() + diff);
        return newDate;
    }

    static isToday(date, today) {
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    }

    static isMonth(date, thisMonth) {
        return date.getMonth() === thisMonth.getMonth() &&
            date.getFullYear() === thisMonth.getFullYear();
    }

}