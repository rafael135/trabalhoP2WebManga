let formCadastro = document.getElementById("formCadastro");
let formLogin = document.getElementById("formLogin");

let action = "";

function removeError(e) {
    let input = e.target;
    let inputError = input.parentNode.querySelector("span.error");

    input.classList.remove("errored")
    inputError.classList.remove("errored");
    inputError.innerHTML = "";

    input.removeEventListener("focus", removeError);
}

function showError(error) {
    let id = error.inputId;

    let form = (action == "register") ? "form#formCadastro" : "form#formLogin";
    let input = document.querySelector(`${form} input[id=${id}]`);
    let inputError = input.parentNode.querySelector("span.error");

    input.classList.add("errored");
    inputError.innerHTML = error.msg;
    inputError.classList.add("errored")

    input.addEventListener("focus", removeError);
}

function checkInputs() {
    let form = (action == "register") ? "form#formCadastro" : "form#formLogin";
    let formInputs = document.querySelectorAll(`${form} input:not([type=radio])`);
    let errors = new Array();

    formInputs.forEach((input) => {
        let reqs = input.getAttribute("data-reqs");
        reqs = reqs.split("|");

        reqs.forEach((req) => {
            let reqValue = req.split("=");

            switch(req) {
                case "required":
                    if(input.value == "") {
                        errors.push({
                            inputId: input.getAttribute("id"),
                            msg: "Campo não preenchido!"
                        });
                    }
                    break;

                case "min":
                    let min = parseInt(reqValue[1]);

                    if(input.value.length < min) {
                        errors.push({
                            inputId: input.getAttribute("id"),
                            msg: `O campo deve no mínimo ${min} caracteres`
                        });
                    }
                    break;
                
            }
        });
    });

    if(errors.length > 0) {
        return errors;
    } else {
        return true;
    }


}



formCadastro.addEventListener("submit", (e) => {
    e.preventDefault();

    action = "register";

    let isValid = checkInputs();

    if(isValid == true) {
        
    } else {
        isValid.forEach((error) => {
            showError(error);
        });
    }
});

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    action = "login";

    let isValid = checkInputs();

    if(isValid == true) {
        
    } else {
        isValid.forEach((error) => {
            showError(error);
        });
    }
});