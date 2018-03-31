class DateHelper {
    
    constructor() {
        
        throw new Error('This class cannot be instanciated');
    }
    
    static dateToText(date) {
        let year = date.getFullYear();
        let month = (date.getMonth()+1 < 10 ?'0':'') + (date.getMonth()+1);
        let day = (date.getDate() < 10 ?'0':'') + date.getDate();
        let hours = (date.getHours() < 10 ?'0':'') + date.getHours();
        let minutes = (date.getMinutes() < 10 ?'0':'') + date.getMinutes();
        let seconds = (date.getSeconds() < 10 ?'0':'') + date.getSeconds();
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    
    static textToDate(text) {
        
        if(!/\d{4}-\d{2}-\d{2}/.test(text)) 
            throw new Error('Should match the format yyyy-mm-dd hh:MM:ss');
             
        return new Date(...text.split('-').map((item, index) => index == 1 ? item - 1 : item));
    }
    
}