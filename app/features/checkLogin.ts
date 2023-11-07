import { setAuthorizationToken } from "@/hook/config.axios";
import { useEffect, useState } from "react";

export default function CheckLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage?.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setAuthorizationToken(token);
    } else {
      setIsLoggedIn(false);
    }
  });
  return isLoggedIn;
}
