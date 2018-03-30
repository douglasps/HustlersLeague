class IntervieweeView{

    constructor(divForm){
        this._divForm = divForm;
    }

    _template(questionList){
        return `<div>
        ${
            questionList.map(q => {
                let question = q.question;
                let id = question.replace(/[^\w]/gi, '');
                return `
                <div class="row">		
                    <label for="${id}">${question}</label>
                </div>
                <div class="row">
                    <textarea id="${id}" name="${id}" type="text" class="col-md-10" cols="10" rows="3" required tabindex="3"></textarea> 
                </div>`})
                .join('')
        }</div>`;
    }

    update(questionList){
        let str = this._template(questionList);
        let html = $(str);
        this._divForm.append(html);
    }
}