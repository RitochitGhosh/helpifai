import React from "react";

export const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="min-h-screen min-w-screen flex flex-col justify-center items-center">
            {children}
        </div>
    );
};