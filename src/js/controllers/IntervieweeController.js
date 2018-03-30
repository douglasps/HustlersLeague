class IntervieweeController{

    constructor(){
        this._inputFullName = $('#full-name');
        this._inputEmail = $('#email');
     
        this._dal = new IntervieweeDal();
        IpService.getIp()
            .then(ip => this._ip = ip); 
    }

    save(event){
        event.preventDefault();
        this._dal.saveInterviewee(this._newInterviewee());

        alert('Enviado com sucesso.');
        
        this._clearInputs();
    }

    _newInterviewee(){
        return new Interviewee(this._inputFullName.val(), this._inputEmail.val(), 'B2C', this._ip, new Date());
    }

    _clearInputs(){
        this._inputFullName.text = '';
        this._inputEmail.text = '';
        this._inputFullName.focus();
    }
}