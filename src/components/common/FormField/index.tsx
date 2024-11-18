import React, { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Label } from '@/components/ui/label';

interface FormFieldProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  icon?: ReactNode;
  children: ReactNode;
}

export const FormField = ({
  form,
  name,
  label,
  icon,
  children
}: FormFieldProps) => {
  const error = form.formState.errors[name];

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-3">
            {icon}
          </div>
        )}
        <div className={icon ? 'pl-10' : ''}>
          {children}
        </div>
      </div>
      {error && (
        <span className="text-sm text-red-500">
          {error.message as string}
        </span>
      )}
    </div>
  );
};