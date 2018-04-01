class Question{
    constructor(question, answer, symbol){
        this._question = question;
        this._answer = answer;
        this._symbol = symbol;
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
    get symbol(){
        return this._symbol; 
    }
}