import { redirect } from "next/navigation";

const page = () => {
    redirect("http://localhost:3000/logout?redirectUrl=http://localhost:3001/");
};

export default page;
