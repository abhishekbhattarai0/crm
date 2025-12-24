import { cn } from '@/utils/cn';
import React from 'react'

type SelectOption = {
    label: string;
    value: string;
    disabled?: string
}

type SelectProps = {
    label?: string;
    name?: string;
    value?: string;
    options: SelectOption[];
    placeholder?: string;
    onChange: (value: string) => void;
    error?: string;
    disabled?: boolean;
    className?: string;
}

const Select: React.FC<SelectProps> = ({
    label,
    name,
    value,
    options,
    placeholder,
    onChange,
    error,
    disabled = false,
    className
}) => {
    return (
        <div className='w-full'>
            {label && (
                <label
                    htmlFor={name}
                    className="mb-1 block text-sm font-medium text-gray-700"
                > {label}
                </label>
            )}
            <select className={cn(
                'w-full border rounded border-gray-400 focus:outline-none  active:border-sky-600 text-gray-600 px-1 py-0.5',
                disabled && "bg-gray-100 cursor-not-allowed",
                error && 'border-red-500 active:border-red-600',
                className
            )}
                id={name}
                name={name}
                value={value}
                disabled={disabled}
                onChange={(e) => onChange(e.target.value)}
            >
                {placeholder && <option value="" disabled>
                    {placeholder}
                </option>}
                {options.map((option) => (
                    <option
                        key={option.label}
                        value={option.value}
                        disabled={option.disabled ? true : false}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select