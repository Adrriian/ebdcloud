import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import AuthContext from "@/services/contexts/authContext";
import  RoleContext  from "@/services/contexts/roleContext";
import IgrejaId from "@/services/contexts/igrejaIDContext";


export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body >
        <AuthContext>
          <RoleContext>
            <IgrejaId>
            {children}
            </IgrejaId>
          </RoleContext>
        </AuthContext>
      </body>
    </html>
  );
}
