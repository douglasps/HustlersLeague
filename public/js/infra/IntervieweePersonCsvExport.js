//email, persona, pergunta, resposta
class IntervieweePersonCsvExport{
    constructor(){
        this._dalInterviewee = new IntervieweeDal();
        this._dalQuestions = new QuestionsDal();
    }

    export(){
        let csvContent = "data:text/csv;charset=utf-8;";
        csvContent += ",email, persona, pergunta, resposta\r\n";
        this._dalQuestions.getAllQuestions()
        .then(items => {
            items.forEach(i => {
                i.questions.forEach(q => {
                    let columns = [i.email, i.type, '\"'+ q._question + '\"', '\"' + q._answer + '\"'];
                    let row = columns.join(",");
                    csvContent += row + "\r\n";
                });
            }); 
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "perguntas.csv");
            document.body.appendChild(link); 
            link.click();
        });
    }
}