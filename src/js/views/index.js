(function(){
    $(document).ready(function() {
        this.controller = new IntervieweeController();

        $('#type-employer').click(() => {
            this.controller.initializeForm(false);
            $ ('#nameEmailInfo').show();
            $ ('#btnSummit').show();
            
        });

        $('#type-employee').click(() =>{
            this.controller.initializeForm(true);
            $ ('#nameEmailInfo').show();
            $ ('#btnSummit').show();

        });
    });
})();