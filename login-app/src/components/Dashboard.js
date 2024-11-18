// src/components/Dashboard.js
import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Button 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you'd clear authentication token here
    navigate('/');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ 
        marginTop: 8, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        <Typography component="h1" variant="h4" gutterBottom>
          Bem-vindo ao Dashboard
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Resumo</Typography>
                <Typography variant="body2">
                  Aqui você pode ver um resumo de suas informações e atividades.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Estatísticas</Typography>
                <Typography variant="body2">
                  Visualize seus dados e métricas importantes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Configurações</Typography>
                <Typography variant="body2">
                  Gerencie suas preferências e configurações de conta.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        <Button 
          variant="contained" 
          color="secondary" 
          sx={{ mt: 4 }}
          onClick={handleLogout}
        >
          Sair
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
