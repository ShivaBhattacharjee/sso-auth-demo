import { redirect } from "next/navigation";

const page = () => {
    redirect("https://accounts.theshiva.xyz/login?redirectUrl=https://demosso.theshiva.xyz/identity");
};

export default page;
