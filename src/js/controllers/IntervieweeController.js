class IntervieweeController{

    constructor(){
        this._inputFullName = $('#full-name');
        this._view = new IntervieweeView($('#form'));
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
        this._inputFullName.focus();
    }

    initializeForm(employee){
        let list = employee ? this._getEmployeeQuestionList() : this._getEmployerQuestionList();
        this._view.update(list);
    }

    _getEmployerQuestionList(){
        let list = [
            new Question('Qual o seu e-mail corporativo?'),
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
            new Question('Qual o seu e-mail?'),
            new Question('Qual segmento de empresa você gostaria de trabalhar?'),
            new Question('Você costuma enviar o seu currículo ou preenche algum formulário de candidatura?'),
            new Question('Como você apresenta as suas experiências com vendas?'),
            new Question('Quais dificuldades você encontra no momento em que participa de um processo seletivo de RH?'),
            new Question('Quais foram os pontos positivos e os negativos do processo seletivo que você participou?')
        ];
        return list;
    }
}