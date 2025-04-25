import React from 'react';

interface PrimaryInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const PrimaryInput: React.FC<PrimaryInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={`flex flex-col w-full gap-2 mt-5 ${className}`}>
      <label className="text-base font-medium">{label}</label>
      <input
        name={name}
        type={type}
        className="border rounded-lg bg-bgSecondary p-2 flex-1 focus:outline-none focus:ring-1 focus:ring-bgPrimary"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PrimaryInput;