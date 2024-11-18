import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { LoginForm } from './LoginForm';
import { useAuth } from '@/hooks/useAuth';

const LoginScreen = () => {
  const { error, setError } = useAuth();
  const [isResetMode, setIsResetMode] = React.useState(false);

  if (isResetMode) {
    return <ForgotPasswordForm onBack={() => setIsResetMode(false)} />;
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Entre com suas credenciais para acessar
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <LoginForm />
      </CardContent>
      <CardFooter>
        <Button
          variant="link"
          onClick={() => {
            setIsResetMode(true);
            setError('');
          }}
          className="w-full"
        >
          Esqueceu sua senha?
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginScreen;