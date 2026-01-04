import {jwtDecode} from "jwt-decode";

export const getUserFromToken = () => {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    return jwtDecode<{ _id: string; name: string; role: string }>(token);
  } catch {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
