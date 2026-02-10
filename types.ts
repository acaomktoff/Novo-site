
// Added React import to define React namespace for types
import React from 'react';

export interface ServiceBenefit {
  title: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
}

export interface SystemBenefit {
  icon: React.ReactNode;
  text: string;
}