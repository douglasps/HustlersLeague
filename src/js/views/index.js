document.querySelector("#formEmployer").addEventListener("click", function() {
	document.querySelector("#forEmployee").classList.remove("show");
	console.log("fecha o candidato");
});

document.querySelector("#formEmployee").addEventListener("click", function() {
	console.log("fecha o contratante");
	document.querySelector("#forEmployer").classList.remove("show");
});

(function(){
    window.onload = function(){
        this.controller = new IntervieweeController();
    }
})();