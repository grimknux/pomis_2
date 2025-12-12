import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TitleHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Online Customer Service - Login";
    } else if (location.pathname === "/dashboard") {
      document.title = "Online Customer Service - Dashboard";
    }
  }, [location]);

  return null;
}
