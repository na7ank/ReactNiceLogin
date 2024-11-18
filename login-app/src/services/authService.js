// src/services/authService.js

const login = async (email, password) => {
    // Simulação de login
    if (email === 'usuario@exemplo.com' && password === 'senha123') {
      return { success: true, user: { name: 'Usuário Exemplo' } };
    }
    return { success: false, error: 'Credenciais inválidas' };
  };
  
  const resetPassword = async (email) => {
    // Simulação de recuperação de senha
    return { success: true, message: 'E-mail de recuperação enviado' };
  };
  
  export { login, resetPassword };