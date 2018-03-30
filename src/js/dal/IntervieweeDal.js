class IntervieweeDal extends BaseDal{
    constructor()
    {
        super('interviewees', Interviewee, 'fullName', 'email', 'type', 'ip', 'datetime');
    }

    saveInterviewee(interviewee){
        this.save(interviewee);
    }

    getAllInterviewees(){
        return this.getAll();
    }
}