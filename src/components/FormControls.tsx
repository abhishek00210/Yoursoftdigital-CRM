// src/components/FormControls.tsx
import React from 'react';

// --- Reusable Form Input ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}
export const FormInput: React.FC<InputProps> = ({
  label,
  required,
  id,
  ...props
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={id}
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>
);

// --- Reusable Form Select ---
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}
export const FormSelect: React.FC<SelectProps> = ({
  label,
  required,
  id,
  children,
  ...props
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={id}
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
    >
      {children}
    </select>
  </div>
);

// --- Reusable Form Section ---
interface FormSectionProps {
  title: string;
  action?: React.ReactNode;
}
export const FormSection: React.FC<React.PropsWithChildren<FormSectionProps>> =
  ({ title, action, children }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center bg-red-600 text-white p-3 rounded-t-lg">
        <h2 className="text-lg font-semibold">{title}</h2>
        {action && <div className="flex gap-2">{action}</div>}
      </div>
      <div className="p-4 border border-gray-200 border-t-0 rounded-b-lg">
        {children}
      </div>
    </div>
  );