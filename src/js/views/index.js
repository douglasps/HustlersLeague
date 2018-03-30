(function(){
    $(document).ready(function() {
        this.controller = new IntervieweeController();

        $('#type-employer').click(() => {
            this.controller.initializeForm(false);
        });

        $('#type-employee').click(() =>{
            this.controller.initializeForm(true);
        });
    });
})();