import { redirect } from "next/navigation";

const page = () => {
    redirect("https://accounts.theshiva.xyz/logout?redirectUrl=https://demosso.theshiva.xyz/");
};

export default page;
