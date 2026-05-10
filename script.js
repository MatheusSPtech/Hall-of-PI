// MENU NAV
function menuLateral() {

    document
        .getElementById("header")
        .classList.toggle("active");
}

// VETOR
let listaUsuarios = [];

// CADASTRO
function cadastrar() {

    let nome = ipt_nome.value;
    let senha = ipt_senha.value;

    if (nome == "" || senha == "") {

        resultado.innerHTML =
            "Preencha todos os campos!";

        return;
    }

    listaUsuarios.push({
        nome,
        senha
    });

    resultado.innerHTML =
        "Cadastro realizado!";
}

// LOGIN
function login() {

    let nome = ipt_login_nome.value;
    let senha = ipt_login_senha.value;

    let encontrado = false;

    for (let i = 0; i < listaUsuarios.length; i++) {

        if (
            listaUsuarios[i].nome == nome &&
            listaUsuarios[i].senha == senha
        ) {

            encontrado = true;

            break;
        }
    }

    if (encontrado) {

        resultado.innerHTML =
            "Login realizado!";

        localStorage.setItem(
            "usuario",
            nome
        );

        setTimeout(() => {

            window.location.href =
                "lakers.html";

        }, 1500);

    } else {

        resultado.innerHTML =
            "Usuário ou senha inválidos!";
    }
}