"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { sendRequest } from "../../utils/api";

interface User {
  uid: number;
  uname: string;
  fname: string;
  lname: string;
  lastlogin?: string; // Optional as it might not exist initially
}

interface Response {
  resultCode: number;
  resultMessage: string;
  data: User[];
  size: number;
  action: string;
  curdate: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = localStorage.getItem("token");
      if (!userData) {
        router.push("/login");
        return;
      }

      try {
        const parsedUser = JSON.parse(userData);
        // Assuming `parsedUser` contains a UID or some unique identifier
        const response: Response = await sendRequest(
          "http://localhost:8000/useredit/",
          "POST",
          {
            action: "getuserresume",
            uid: parsedUser.uid,
          }
        );

        if (response.resultCode === 1006 && response.data?.length) {
          setUser(response.data[0]); // Assuming the API response structure
        } else {
          setError(response.resultMessage || "Failed to load user data");
          localStorage.removeItem("token"); // Clear invalid token
          router.push("/login");
        }
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching user data");
        localStorage.removeItem("token"); // Clear token in case of failure
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (loading) return <p className="text-center text-xl">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Dashboard
      </h1>

      <div className="bg-gray-50 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700">
          Welcome, {user.fname} {user.lname}! {/* Change Password link */}
          <button
            onClick={() => router.push("/changepassword")}
            className="bg-gray-300 text-white px-6 py-1 rounded-md hover:bg-gray-700 transition"
          >
            Change Password
          </button>
        </h2>

        <p className="text-lg text-gray-600">Email: {user.uname}</p>
        {user.lastlogin && (
          <p className="text-lg text-gray-600">
            Last Login: {new Date(user.lastlogin).toLocaleString()}
          </p>
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleLogout}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
