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
        router.push("https://demosso.theshiva.xyz")
    }
    },[])
    router.push("https://accounts.theshiva.xyz/logout?redirectUrl=https://demosso.theshiva.xyz");
};

export default Page;
