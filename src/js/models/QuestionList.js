class QuestionList{
    constructor(intervieweeId, email, questions){
        this._intervieweeId = intervieweeId;
        this._email = email;
        this._questions = questions;
        Object.freeze(this);
    }

    get intervieweeId(){
        return this._intervieweeId;
    }

    get email(){
        return this._email;
    }

    get questions(){
        return [].concat(this._questions);
    }
}