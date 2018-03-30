class QuestionList{
    constructor(intervieweeId, questions){
        this._intervieweeId = intervieweeId;
        this._questions = questions;
        Object.freeze(this);
    }

    get intervieweeId(){
        return this._intervieweeId;
    }

    get questions(){
        return [].concat(this._questions);
    }

    addQuestion(question){
        this._questions.push(question);
    }
}