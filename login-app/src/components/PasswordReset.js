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