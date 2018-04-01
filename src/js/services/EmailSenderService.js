class EmailSenderService{
    
    static sendEmail(target){
        var url = "https://hustler-s-league-email.firebaseapp.com/send?="+target;
        EmailSenderService._handleEmail(url);
    }
  
    static _handleEmail(url){
        $.get(url,function(data){
            if(data!="sent")
                handleEmail(url);
        });
    }
}