import React, { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function LoginAuth0() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();

  const [alert, setAlert] = useState(false);
  const authDataRef = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (authDataRef.current && !authDataRef.current.contains(event.target)) {
        setAlert(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [alert]);


  if (isLoading) {
    return <h2 style={{ color: "#fff" }}>Plz Wait...</h2>;
  }

  


  return (
    <div className="login-container">
      
      {isAuthenticated ? (
        <button className="logged-btn" onClick={() => setAlert(!alert)}>
          <img src={user.picture} className="logged-img" alt="#" />
        </button>
      ) : (
        <Button
          variant="contained"
          startIcon={<PersonIcon />}
          color="success"
          size="small"
          style={{
            fontSize: "1.5rem",
            background: "#FFB800",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
          onClick={loginWithRedirect}
        >
          Login
        </Button>
      )}
      {alert && (
        <div className="logoutAlert" ref={authDataRef}>
          <div className="alert-text">
            Do you want to <span style={{ color: "#fff" }}>logout?</span>
          </div>
          <div className="alert-btn-container">
            <button className="alert-btn no" onClick={() => setAlert(false)}>
              No!
            </button>
            <button className="alert-btn" onClick={logout}>
              Yes😥
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
