// src/styles/fonts.js

import { Inter, Lusitana } from 'next/font/google';

// Configure fonts with desired weights and subsets
export const inter = Inter({
  weight: ['400', '700'], // Specify weights you need
  subsets: ['latin'], // Add subsets
  style: ['normal', 'italic'], // Optional: Specify styles
  display: 'swap', // Optional: Control font-display property
});



export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
});
