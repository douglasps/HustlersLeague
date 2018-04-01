class IntervieweeDal extends BaseDal{
    constructor()
    {
        super('interviewees', Interviewee, 'fullName', 'email', 'type', 'ip', 'datetime');
    }

    saveInterviewee(interviewee){
        return this.save(interviewee);
    }

    getAllInterviewees(){
        return this.getAll();
    }
}