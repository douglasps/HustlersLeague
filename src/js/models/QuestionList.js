class QuestionList{
    constructor(intervieweeId, email){
        this._intervieweeId = intervieweeId;
        this._email = email;
        this._questions = [];
        Object.freeze(this);
    }

    get intervieweeId(){
        return this._fullName;
    }

    get email(){
        return this._email;
    }

    get questions(){
        return [].concat(this._questions);
    }

    addQuestion(question){
        this._questions.push(question);
    }
}