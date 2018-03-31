class QuestionList{
    constructor(intervieweeId, email, type, questions){
        this._intervieweeId = intervieweeId;
        this._email = email;
        this._questions = questions;
        this._type = type;
        Object.freeze(this);
    }

    get intervieweeId(){
        return this._intervieweeId;
    }

    get email(){
        return this._email;
    }

    get type(){
        return this._type;
    }

    get questions(){
        return [].concat(this._questions);
    }
}