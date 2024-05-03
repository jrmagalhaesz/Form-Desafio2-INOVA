const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const endereco = document.getElementById("endereco");
const cidade = document.getElementById("cidade");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();

});

username.addEventListener("blur", (event) => {
    checkInputUsername();
});
email.addEventListener("blur", (event) => {
    checkInputemail();
});
cpf.addEventListener("blur", (event) => {
    checkInputCpf();
});
telefone.addEventListener("blur", (event) => {
    checkInputTelefone();
});
endereco.addEventListener("blur", (event) => {
    checkInputEndereco();
});
cidade.addEventListener("blur", (event) => {
    checkInputCidade();
});


function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue==="") {
        errorInput(username, "Preencha com um nome");
    }else {
        const formItem = username.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputemail() {
    const emailValue = email.value;

    if (emailValue==="") {
        errorInput(email, "Preencha com um e-mail");
    }else {
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputCpf() {
    const cpfValue = cpf.value;

    if (cpfValue==="") {
        errorInput(cpf, "Preencha com um CPF");
    }else {
        const formItem = cpf.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputTelefone() {
    const telefoneValue = telefone.value;

    if (telefoneValue==="") {
        errorInput(telefone, "Preencha com um telefone");
    }else {
        const formItem = telefone.parentElement;
        formItem.className = "form-content";
    }
}

function  checkInputEndereco() {
    const enderecoValue = endereco.value;

    if (enderecoValue==="") {
        errorInput(endereco, "Preencha com um endereço");
    }else {
        const formItem = endereco.parentElement;
        formItem.className = "form-content";
    }
}

function  checkInputCidade() {
    const cidadeValue = cidade.value;

    if (cidadeValue==="") {
        errorInput(cidade, "Preencha com uma cidade");
    }else {
        const formItem = cidade.parentElement;
        formItem.className = "form-content";
    }
}

function checkForm() {
    checkInputUsername();
    checkInputemail();
    checkInputCpf();
    checkInputTelefone();
    checkInputEndereco();
    checkInputCidade();

    const formItems = form.querySelectorAll(".form-content");

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content" 
    });

    if (isValid) {
        alert("Isso é apenas um formulário teste, obrigado por interagir! :)");
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form-content error";
}