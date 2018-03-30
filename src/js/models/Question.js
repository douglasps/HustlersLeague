class Question{
    constructor(question, answer){
        this._question = question;
        this._answer = answer;
    }

    get question(){
        return this._question;
    }

    get answer(){
        return this._answer;
    }

    set answer(answer){
        this._answer = answer;
    }
}