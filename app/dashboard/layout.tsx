import React from "react";

export default function DashboardLayout({children}:{children:React.ReactNode}){
    setTimeout(() => {
        console.log(123123);
    },7000)
    return (
        <section>
            {children}
        </section>
    )
}