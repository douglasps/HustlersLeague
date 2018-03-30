class Interviewee{
    constructor(fullName, email, type, ip, datetime){
        this._fullName = fullName;
        this._email = email;
        this._type = type;
        this._ip = ip;
        this._datetime = typeof datetime == "Date" ? datetime : new Date(datetime);
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
        return new Date(this._datetime);
    }
}