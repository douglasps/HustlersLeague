document.querySelector("#formEmployer").addEventListener("click", function() {
	document.querySelector("#formEmployee").classList.remove("show");
	console.log("fecha o candidato");
});

document.querySelector("#formEmployee").addEventListener("click", function() {
	console.log("fecha o contratante");
	document.querySelector("#formEmployer").classList.remove("show");
});

(function(){
    window.onload = function(){
        this.controller = new IntervieweeController();
    }
})();