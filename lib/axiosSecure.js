import axios from "axios";
import { getSession, signOut } from "next-auth/react";

const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_ADDRESS,
});

axiosSecure.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session?.user?.token) {
    config.headers.Authorization = `Bearer ${session.user.token}`;
  }

  return config;
});

axiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      signOut({ callbackUrl: "/login" });
    }
    return Promise.reject(error);
  }
);

export default axiosSecure;
