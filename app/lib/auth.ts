import {jwtDecode} from "jwt-decode";

export const getUserFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  return jwtDecode<{ _id: string; name: string; role: string }>(token);
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
