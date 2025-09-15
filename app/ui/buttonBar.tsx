// components/button.tsx
'use client';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonBar(props: ButtonProps) {
    let val = props.value;

return <button onClick={() => {!val}} {...props}>Toggle</button>;
}