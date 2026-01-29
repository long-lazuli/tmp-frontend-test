import { Inter } from "next/font/google";

import "./globals.css";

import { Source_Sans_3 } from "next/font/google";
const source = Source_Sans_3({subsets: ['latin']})

import styles from './layout.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={[source.className, styles.layout].join(' ')}>{children}</body>
    </html>
  );
}
