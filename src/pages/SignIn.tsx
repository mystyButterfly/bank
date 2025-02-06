import { useEffect, FormEvent, useState } from "react";
import { checkLocalStoarage } from "../utils/checkLocalStorage";
import { Link, useNavigate } from "react-router";
import { User } from "./SignUp";
import { logoSVG } from "../components/Navbar";

interface FormData {
  email: string;
  password: string;
}

function SignIn() {
  const [formData, setFormData] = useState<FormData>({
    email: "john.doe@mail.com",
    password: "password123",
  });
  const navigate = useNavigate();

  useEffect(() => {
    checkLocalStoarage();
    if (localStorage.getItem("isAuth")) {
      const prepreisAuth = localStorage.getItem("isAuth");
      const preisAuth = prepreisAuth
        ? JSON.parse(prepreisAuth)
        : { auth: false };
      const isAuth = preisAuth.authStatus || false;
      isAuth && navigate("/");
    }
  }, []);

  function handleLogIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const usersString = localStorage.getItem("users");

    const users = usersString ? JSON.parse(usersString) : [];
    const user = users.find((u: User) => u.email === formData.email);
    if (user) {
      if (user.password === formData.password) {
        localStorage.setItem(
          "isAuth",
          JSON.stringify({ user: user.email, authStatus: true })
        );
        navigate("/");
      } else {
        alert("Password is incorect");
      }
    } else {
      alert(formData.email + " is not found");
    }
  }

  return (
    <div className="sign-up">
      <div className="sign-up-form">
        <div className="logo">
          {logoSVG} <span>Horizon</span>
        </div>
        
        <h1>Log in</h1><br />
        <p>Welcome back! Pleace enter your details.</p>

        <form onSubmit={handleLogIn}>
          <label htmlFor="email">
            <div>Email</div>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="big-input"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
          <label htmlFor="password">
            <div>Password</div>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="big-input"
              required
              minLength={6}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </label>
          <button type="submit" className="sign-up-button">
            Sign in
          </button>
          <p className="sign-up-footer">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
      <Link to="/about" className="about-link">About project</Link>
    </div>
  );
}

export default SignIn;
