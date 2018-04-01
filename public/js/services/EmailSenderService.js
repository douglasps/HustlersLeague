class EmailSenderService{
    
    static sendEmail(interviewee){
        var url = `https://hustler-s-league.firebaseapp.com/send?to=${interviewee.email}&name=${interviewee.fullName}&type=${interviewee.type}`;var url = `https://hustler-s-league.firebaseapp.com/send?to=${interviewee.email}&name=${interviewee.fullName}&type=${interviewee.type}`;
        EmailSenderService._handleEmail(url);
    }
  
    static _handleEmail(url){
        $.get(url,function(data){
            if(data!="sent")
                console.log('Error: E-mail not sent.');
        });
    }
}