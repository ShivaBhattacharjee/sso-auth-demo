"use client"
import { deleteCookie, getCookie } from "cookies-next";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
    const router = useRouter()
    useEffect(()=>{
        const cookie = getCookie("token") || "";
    if(cookie){
        deleteCookie("token");
        router.push(`${process.env.NEXT_PUBLIC_DOMAIN_URL}`)
    }
    },[])
    router.push(`https://accounts.theshiva.xyz/logout?redirectUrl=${process.env.NEXT_PUBLIC_DOMAIN_URL}`);
};

export default Page;
