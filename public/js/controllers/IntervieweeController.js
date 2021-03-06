class IntervieweeController{

    constructor(){
        this._inputFullName = $('#full-name');
        this._inputEmail = $('#email');
        this._emailLabel = $('#email-label');
        this._view = new IntervieweeView($('#form'));
        this._dalInterviewee = new IntervieweeDal();
        this._dalQuestions = new QuestionsDal();
        this._questionList = [];
        this._type = 'B2C';
        this._questionType = 'CONTRATADO';
        IpService.getIp()
            .then(ip => this._ip = ip); 
    }

    save(event){
        event.preventDefault();
        this._setAnswers();
        let interviewee = this._newInterviewee();
        let id = this._dalInterviewee.saveInterviewee(interviewee);
        this._dalQuestions.saveQuestions(this._newQuestionList(id));

        alert('Enviado com sucesso.'); 
          
        EmailSenderService.sendEmail(interviewee);
        
        this._clearInputs();
        window.location.href = "thanksPage.html";
    }

    _setAnswers(){
        this._questionList.forEach(q => {
            q.answer = $('#'+q.question.replace(IntervieweeView.PATTERN, '')).val();
        });

    }

    _newInterviewee(){
        return new Interviewee(this._inputFullName.val(), this._inputEmail.val(), this._type, userip, new Date());
    }

    _newQuestionList(id, questions){
        return new QuestionList(id, this._inputEmail.val(), this._questionType, this._questionList);
    }

    _clearInputs(){
        this._inputFullName.val('');
        this._inputEmail.val('');
        this._view.clear();
        this._inputFullName.focus();
    }

    initializeForm(employee){
        this._type = employee ? 'B2C' : 'B2B';
        this._questionType = employee ? 'CONTRATADO' : 'CONTRATANTE' ;
        this._emailLabel.text(employee ? 'Qual o seu e-mail?' : 'Qual o seu e-mail corporativo?');
        this._questionList = employee ? this._getEmployeeQuestionList() : this._getEmployerQuestionList();
        this._view.update(this._questionList);
    }

    _getEmployerQuestionList(){
        let list = [
            new Question('Qual o nome da empresa em que você trabalha?', null, 'iconCompany'),
            new Question('Qual a área de atuação da sua empresa?', null, 'iconTarget' ),
            new Question('Qual a sua função na empresa?', null, 'iconBusiness'),
            new Question('Como é o seu processo de contratação de um(a) vendedor?', null, 'iconHandShake'),
            new Question('Qual é a sua principal dificuldade  no processo seletivo do profissional de vendas?', null, 'iconPuzzle'),                     
            new Question('Como seria uma ferramenta perfeita para o seu processo seletivo na contratação de vendedores?', null, 'iconTools'),
            new Question('Quanto você estaria disponível para investir em uma ferramenta para solucionar este problema?', null, 'iconWallet'),
            new Question('Como você avalia a qualidade técnica do candidato de vendas?', null, 'iconMedal')
        ];
        return list;
    }

    _getEmployeeQuestionList(){
        let list = [
            new Question('Qual segmento de empresa você gostaria de trabalhar?', null, 'iconTarget'),
            new Question('Você costuma enviar o seu currículo ou preenche algum formulário de candidatura?', null, 'iconPaper'),
            new Question('Como você apresenta as suas experiências com vendas?', null, 'iconMedal'),
            new Question('Quais dificuldades você encontra no momento em que participa de um processo seletivo de RH?', null, 'iconPuzzle'),
            new Question('Quais foram os pontos positivos e os negativos do processo seletivo que você participou?', null, 'iconUpDown')
        ];
        return list;
    }
}