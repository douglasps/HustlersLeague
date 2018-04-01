class IntervieweeView{

    static get PATTERN(){
        return /[^\w]/gi;
    }

    constructor(divForm){
        this._divForm = divForm;
    }

    _template(questionList){
        return `<div>
        ${
            questionList.map(q => {
                let question = q.question;
                let id = question.replace(IntervieweeView.PATTERN, '');
                return `

                <div class="row col-md-11 itemForm">       
                    <label for="${id}">${question}</label>
                </div>

                <div class="input-group col-md-11 itemForm">
                  <span class="input-group-addon" id="basic-addon1">
                  <span class="${q.symbol}" aria-hidden="true"></span>
                  </span>
                  <textarea id="${id}" name="${id}" type="text" class="form-control" aria-describedby="basic-addon1" cols="10" rows="3"></textarea>
                </div>
                `
            })
                .join('')
        }</div>`;
    }

    update(questionList){
        this.clear();
        let str = this._template(questionList);
        let html = $(str);
        this._divForm.append(html);
    }

    clear(){
        this._divForm.empty();
    }
}