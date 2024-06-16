"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
// you can get users via server actions too
import { getUser } from "@/server/actions";
import { useRouter } from "next/navigation";
import axios from "axios";
const Page = () => {
  const cookie = getCookie("token") || "";
  const router = useRouter();
  const [user, setUser] = React.useState({} as any); // Add type assertion here
  const getUserProfile = async () => {
    if (cookie) {
      const decodedToken = jwt.decode(cookie) as jwt.JwtPayload; // Add type assertion here
      if (!decodedToken) {
        alert("Invalid Token");
      }
      if (decodedToken && decodedToken.username) {
        try {
          const req = await axios.get(
            `https://accounts.theshiva.xyz/api/profile?username=${decodedToken.username}`
          );
          const user = req.data;
          setUser(user.user);
          console.log(user);
        } catch (e) {
          alert("Error getting user profile");
          console.log(e);
        }
      }
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className=" flex justify-center items-center min-h-screen">
      {cookie ? (
        <div className="flex flex-col gap-4 text-center">
          <Link href={"/logout"} className=" p-4 bg-red-500 rounded-md">
            Logout
          </Link>
          <span className=" border-2 border-blue-600 p-3 rounded-md text-center w-72 font-semibold hover:bg-blue-600 duration-200">
            You are logged in
          </span>
          <h1>Profile Information</h1>
          <h1>username : {user?.username || "N/A"}</h1>
          <h1>Email : {user?.email || "N/A"}</h1>
          <h1>
            Verify Status : {user.isverified ? "Verified" : "Not verified"}
          </h1>
        </div>
      ) : (
        <Link
          href={"/signin"}
          className=" border-2 border-blue-600 p-3 rounded-md text-center w-72 font-semibold hover:bg-blue-600 duration-200"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Page;
