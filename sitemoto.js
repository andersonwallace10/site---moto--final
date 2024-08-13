function validarsenha(senha) {
    // Regras de validação
    const comprimentoMinimo = 8;
    const temMaiuscula = /[A-Z]/;
    const temMinuscula = /[a-z]/;
    const temNumero = /[0-9]/;
    const temEspecial = /[!@#$%^&*(),.?":{}|<>]/;
  
    // Verifica o comprimento da senha
    if (senha.length < comprimentoMinimo) {
        return false;
    }
    
    // Verifica a presença de pelo menos uma letra maiúscula
    if (!temMaiuscula.test(senha)) {
        return false;
    }
  
    // Verifica a presença de pelo menos uma letra minúscula
    if (!temMinuscula.test(senha)) {
        return false;
    }
  
    // Verifica a presença de pelo menos um número
    if (!temNumero.test(senha)) {
        return false;
    }
  
    // Verifica a presença de pelo menos um caractere especial
    if (!temEspecial.test(senha)) {
        return false;
    }
  
    // Se todas as condições forem atendidas, a senha é válida
    return true;
  }
  
  function confirmarSenha(senha, confirmar) {
    // Verifica se a senha e a confirmação são iguais
    return senha === confirmar;
  }
  
  // Exemplo de uso
  const senha = "Exemplo@123";
  const confirmar = "Exemplo@123";
  
  if (validarsenha(senha)) {
    if (confirmarSenha(senha, confirmar)) {
      console.log("Senha válida e confirmação correta!");
    } else {
      console.log("A confirmação da senha não corresponde.");
    }
  } else {
    console.log("Senha inválida.");
  }
  
  module.exports = { validarsenha, confirmarSenha };






/*document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Chama a função de validação e obtém o resultado
    const { isValid, messages } = validateForm();

    // Exibe mensagens de erro ou confirma o envio
    const errorMessagesContainer = document.getElementById('errorMessages');
    errorMessagesContainer.innerHTML = '';

    if (!isValid) {
        messages.forEach(message => {
            const p = document.createElement('p');
            p.textContent = message;
            errorMessagesContainer.appendChild(p);
        });
    } else {
        alert('Cadastro realizado com sucesso!');
        // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor
        document.getElementById('signupForm').reset();
    }
});

function validateForm() {
    const dob = new Date(document.getElementById('dob').value);
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const errorMessages = [];
    let isValid = true;

    // Validação de idade
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    if (age < 18) {
        errorMessages.push('Você deve ter pelo menos 18 anos para se cadastrar.');
        isValid = false;
    }

    // Validação de senha
    const passwordLength = password.length;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    if (passwordLength < 8) {
        errorMessages.push('A senha deve ter pelo menos 8 caracteres.');
        isValid = false;
    }
    if (!hasLowerCase) {
        errorMessages.push('A senha deve conter pelo menos uma letra minúscula.');
        isValid = false;
    }
    if (!hasUpperCase) {
        errorMessages.push('A senha deve conter pelo menos uma letra maiúscula.');
        isValid = false;
    }
    if (password !== confirmPassword) {
        errorMessages.push('As senhas não coincidem.');
        isValid = false;
    }

    return { isValid, messages: errorMessages };
}

module.exports = {
    validateAge,
    rulespassword,
    validaPassword,
}*/



