const formulario = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value;

    if (nome === "" || email === "" ||
        telefone === "" || senha.trim() === "") {

        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    }

    const numerosTelefone = telefone.replace(/\D/g, "");

    if (numerosTelefone.length !== 10 &&
        numerosTelefone.length !== 11) {

        mensagem.textContent = "Digite um telefone válido!";
        mensagem.style.color = "red";
        return;
    }

    if (senha.length < 6) {
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres!";
        mensagem.style.color = "red";
        return;
    }

    mensagem.textContent = "Cadastro validado com sucesso!";
    mensagem.style.color = "green";

    formulario.reset();
});