class IntervieweeController{

    constructor(){
        this._inputFullName = $('#full-name');
        this._inputEmail = $('#email');

        this._dal = new IntervieweeDal();
    }

    save(event){
        event.preventDefault();
        this._dal.save(this._newInterviewee());

        alert('Enviado com sucesso.');
        
        this._clearInputs();
    }

    _newInterviewee(){
        return new Interviewee(this._inputFullName.val(), this._inputEmail.val(), 'B2C', '127.0.0.1', new Date());
    }

    _clearInputs(){
        this._inputFullName.text = '';
        this._inputEmail.text = '';
        this._inputFullName.focus();
    }
}