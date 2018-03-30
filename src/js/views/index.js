(function(){
    $(document).ready(function() {
        this.controller = new IntervieweeController();

        $('#type-employer').click(() => {
            $('#type-selector').css('visibility', 'hidden');
            this.controller.initializeForm(false);
        });

        $('#type-employee').click(() =>{
            $('#type-selector').css('visibility', 'hidden');
            this.controller.initializeForm(true);
        });
    });
})();