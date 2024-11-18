# ReactNiceLogin
Test login screen.

# Configuração Inicial do Projeto
```
npx create-react-app login-app
cd login-app
npm install @mui/material @emotion/react @emotion/styled react-router-dom
```

# 2. Estrutura de Pastas
```
src/
├── components/
│   ├── Login.js
│   ├── PasswordReset.js
│   └── Dashboard.js
├── services/
│   └── authService.js
└── App.js
```

# 3. Configurar Serviço de Autenticação
```javascript
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
```

# 4. Componente de Login
```javascript
// src/components/Login.js

import React, { useState } from 'react';
import { 
  TextField, Button, Container, Typography, 
  Link, Box, Alert 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            margin="normal"
            required
            fullWidth
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
          <Link href="/reset-password" variant="body2">
            Esqueceu sua senha?
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
```

# 5. Componente de Recuperação de Senha
```javascript
// src/components/PasswordReset.js
import React, { useState } from 'react';
import { 
  TextField, Button, Container, Typography, 
  Box, Alert 
} from '@mui/material';
import { resetPassword } from '../services/authService';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const result = await resetPassword(email);
    
    if (result.success) {
      setMessage(result.message);
      setError('');
    } else {
      setError('Erro ao recuperar senha');
      setMessage('');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Recuperação de Senha
        </Typography>
        <Box component="form" onSubmit={handlePasswordReset} sx={{ mt: 1 }}>
          {message && <Alert severity="success">{message}</Alert>}
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            margin="normal"
            required
            fullWidth
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Recuperar Senha
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordReset;
```

# 6. Configurar Rotas no App
```javascript
// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import PasswordReset from './components/PasswordReset';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

# 7. Executar o Projeto
```javascript
npm start
```

# Funcionalidades

- Login com validação simples
- Tela de recuperação de senha
- Navegação entre telas
- Design responsivo com Material-UI

# Próximos Passos

- Adicionar validações mais robustas
- Implementar autenticação real
- Adicionar tratamento de erros mais detalhado