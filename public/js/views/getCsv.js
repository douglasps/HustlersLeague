(function(){
    let intervieweeLeadsCsvExport = new IntervieweeLeadsCsvExport();
    let intervieweePersonCsvExport = new IntervieweePersonCsvExport();

    $(document).ready(() => {
        $('#btn-get-lead-csv').click(() => {
            intervieweeLeadsCsvExport.export();
        });
        $('#btn-get-questions-csv').click(() => {
            intervieweePersonCsvExport.export();
        });
    });
})();