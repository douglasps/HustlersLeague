class Interviewee{
    constructor(fullName, email, type, ip, datetime, question1, question2, question3, question4){
        this._fullName = fullName;
        this._email = email;
        this._type = type;
        this._ip = ip;
<<<<<<< HEAD
        this._datetime = datetime;
        this._question1 = question1;
        this._question2 = question2;
        this._question3 = question3;
        this._question4 = question4;

=======
        this._datetime = typeof datetime == "Date" ? datetime : new Date(datetime);
>>>>>>> master
        Object.freeze(this);
    }

    get fullName(){
        return this._fullName;
    }

    get email(){
        return this._email;
    }

    get type(){
        return this._type;
    }

    get ip(){
        return this._ip;
    }

    get datetime(){
        return this._datetime;
    }
}