class QuestionsDal extends BaseDal{
    constructor()
    {
        super('questionList', QuestionList, 'intervieweeId', 'email', 'questions');
    }

    saveQuestions(model){
        this.save(model);
    }

    getAllQuestions(){
        return this.getAll();
    }
}