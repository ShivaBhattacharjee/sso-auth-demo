import { redirect } from "next/navigation";

const page = () => {
    redirect(`https://accounts.theshiva.xyz/login?redirectUrl=${process.env.NEXT_PUBLIC_DOMAIN_URL}/identify`);
};

export default page;
