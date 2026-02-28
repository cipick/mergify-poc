import React from 'react';

export type BadgeColor = 'green' | 'red' | 'blue' | 'gray';

export interface BadgeProps {
  label: string;
  color?: BadgeColor;
}

export function Badge({ label, color = 'gray' }: BadgeProps) {
  return (
    <span className={`badge badge-${color}`}>
      {label}
    </span>
  );
}
