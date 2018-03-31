//email, nome, ip, tipo, data_hora
class IntervieweeLeadsCsvExport{
    constructor(){
        this._dalInterviewee = new IntervieweeDal();
        this._dalQuestions = new QuestionsDal();
    }

    export(){
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "email, nome, ip, tipo, data_hora\r\n";
        this._dalInterviewee.getAllInterviewees()
        .then(items => {
            items.forEach(i =>{
                let columns = [i.email, i.fullName, i.ip, i.type, DateHelper.dateToText(i.datetime)];
                let row = columns.join(",");
                csvContent += row + "\r\n";
            });

            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "lead.csv");
            document.body.appendChild(link); 
            link.click();
        });
    }
}