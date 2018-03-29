class IntervieweeDal{
    constructor(){
        // Initialize Firebase
		var config = {
            apiKey: "AIzaSyCHQ0WOTYQWjZqHqp47yQt9Vc1Qh_bXdaY",
            authDomain: "hustler-s-league.firebaseapp.com",
            databaseURL: "https://hustler-s-league.firebaseio.com",
            projectId: "hustler-s-league",
            storageBucket: "hustler-s-league.appspot.com",
            messagingSenderId: "725127233905"
        };
        firebase.initializeApp(config);

        this._firebirdRef = firebase.database().ref('interviewees');
    }

    _convertData(data){
        if(!data || !data.val()) return;

        let interviewees = data.val();
        let keys = Object.keys(interviewees);
        let intervieweeList = [];
        keys.forEach(key => {
            let item = interviewees[key];
            intervieweeList.push(new Interviewee(item.fullName, item.email, item.type, item.ip, item.datetime));
        }, this);

        return intervieweeList;
    }

    save(interviewee){
        this._firebirdRef.push({
            fullName: interviewee.fullName,
            email: interviewee.email,
            type: interviewee.type,
            ip: interviewee.ip,
            datetime: interviewee.datetime
        });
    }

    get(){
        return new Promise(resolve =>{
            this._firebirdRef.once("value", data => resolve(this._convertData(data)));
        });
    }
}