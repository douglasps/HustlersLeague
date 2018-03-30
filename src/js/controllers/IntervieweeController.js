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
        IpService.getIp()
            .then(ip => this._ip = ip); 
    }

    save(event){
        event.preventDefault();
        this._setAnswers();
        let id = this._dalInterviewee.saveInterviewee(this._newInterviewee());
        this._dalQuestions.saveQuestions(this._newQuestionList(id));

        alert('Enviado com sucesso.');
        
        this._clearInputs();
    }

    _setAnswers(){
        this._questionList.forEach(q => {
            q.answer = $('#'+q.question.replace(IntervieweeView.PATTERN, '')).val();
        });

    }

    _newInterviewee(){
        return new Interviewee(this._inputFullName.val(), this._inputEmail, this._type, this._ip, new Date());
    }

    _newQuestionList(id, questions){
        return new QuestionList(id, this._inputEmail.val(), this._questionList);
    }

    _clearInputs(){
        this._inputFullName.val('');
        this._inputEmail.val('');
        this._view.clear();
        this._inputFullName.focus();
    }

    initializeForm(employee){
        this._type = employee ? 'B2C' : 'B2B'
        this._emailLabel.text(employee ? 'Qual o seu e-mail?' : 'Qual o seu e-mail corporativo?');
        this._questionList = employee ? this._getEmployeeQuestionList() : this._getEmployerQuestionList();
        this._view.update(this._questionList);
    }

    _getEmployerQuestionList(){
        let list = [
            new Question('Qual o nome da empresa que você trabalha (Nome do contratante)?'),
            new Question('Qual a área de atuação da (Nome da empresa)?'),
            new Question('Qual a sua função na (Nome da empresa)?'),
            new Question('Como é o seu processo de contratação de um(a) vendedor?'),
            new Question('Como seria uma ferramenta perfeita para o seu processo seletivo na contratação de vendedores?'),
            new Question('Quanto você estaria disponível para investir em uma ferramenta para solucionar este problema?'),
            new Question('Que outras soluções acredita serem possíveis?')
        ];
        return list;
    }

    _getEmployeeQuestionList(){
        let list = [
            new Question('Qual segmento de empresa você gostaria de trabalhar?'),
            new Question('Você costuma enviar o seu currículo ou preenche algum formulário de candidatura?'),
            new Question('Como você apresenta as suas experiências com vendas?'),
            new Question('Quais dificuldades você encontra no momento em que participa de um processo seletivo de RH?'),
            new Question('Quais foram os pontos positivos e os negativos do processo seletivo que você participou?')
        ];
        return list;
    }
}