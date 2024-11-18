import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, AlertCircle, Mail } from 'lucide-react';
import { forgotPasswordSchema } from '@/schemas/auth';
import { useAuth } from '@/hooks/useAuth';
import { FormField } from '@/components/common/FormField';

interface ForgotPasswordFormProps {
  onBack: () => void;
}

interface ForgotPasswordData {
  email: string;
}

export const ForgotPasswordForm = ({ onBack }: ForgotPasswordFormProps) => {
  const { requestPasswordReset, error } = useAuth();
  const [resetSent, setResetSent] = React.useState(false);
  
  const form = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    try {
      await requestPasswordReset(data.email);
      setResetSent(true);
    } catch (error) {
      // Erro tratado no AuthContext
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onBack}
            className="h-8 w-8"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <CardTitle>Recuperar Senha</CardTitle>
            <CardDescription>
              Digite seu email para receber instruções
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {resetSent ? (
          <Alert className="mb-4">
            <AlertDescription>
              Se houver uma conta associada a {form.getValues('email')}, 
              você receberá um email com instruções para redefinir sua senha.
            </AlertDescription>
          </Alert>
        ) : (
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                form={form}
                name="email"
                label="Email"
                icon={<Mail className="h-4 w-4 text-gray-400" />}
              >
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  {...form.register('email')}
                />
              </FormField>
              <Button type="submit" className="w-full">
                Enviar instruções
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
};