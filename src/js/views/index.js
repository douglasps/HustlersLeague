document.querySelector("#typeEmployer").addEventListener("click", function() {
	document.querySelector("#formEmployee").classList.remove("show");
});

document.querySelector("#typeEmployee").addEventListener("click", function() {
	document.querySelector("#formEmployer").classList.remove("show");
});

(function(){
    window.onload = function(){
        this.controller = new IntervieweeController();
    }
})();