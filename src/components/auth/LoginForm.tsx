import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, Lock } from 'lucide-react';
import { loginSchema } from '@/schemas/auth';
import { useAuth } from '@/hooks/useAuth';
import { FormField } from '@/components/common/FormField';

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { login } = useAuth();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      // Erro tratado no AuthContext
    }
  };

  return (
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

        <FormField
          form={form}
          name="password"
          label="Senha"
          icon={<Lock className="h-4 w-4 text-gray-400" />}
        >
          <Input
            type="password"
            {...form.register('password')}
          />
        </FormField>

        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </div>
    </form>
  );
};