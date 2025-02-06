import { Link, useNavigate } from "react-router";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { checkLocalStoarage } from "../utils/checkLocalStorage";
import ProgressBar from "../components/ProgressBar";
import { logoSVG } from "../components/Navbar";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  state: string;
  postCode: string;
  dateOfBirth: string;
  ssn: string;
  email: string;
  password: string;
}

function SignUp() {
  // State to hold form data
  const [formData, setFormData] = useState<User>({
    id: `${Math.floor(Math.random() * 100000)}`,
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    postCode: "",
    dateOfBirth: "",
    ssn: "",
    email: "",
    password: "",
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

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const usersString = localStorage.getItem("users");
    const users = usersString ? JSON.parse(usersString) : [];
    const isRepetEmail = users.find((u: User) => u.email === formData.email);
    if (isRepetEmail)
      return alert("This email is exist. You need original email");
    const newUsers = [...users, formData];
    localStorage.setItem("users", JSON.stringify(newUsers));

    // redirect to home page
    localStorage.setItem(
      "isAuth",
      JSON.stringify({ user: formData.email, authStatus: true })
    );
    navigate("/");
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      postCode: "",
      dateOfBirth: "",
      ssn: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="sign-up">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="logo">
          {logoSVG} <span>Horizon</span>
        </div>
        <h2>Sign up</h2>
        <br />
        <p className="signup-p">Please enter your details</p>
        <div className="labels">
          <label htmlFor="firstName">
            <div>First name</div>
            <input
              type="text"
              id="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={11}
            />
          </label>
          <label htmlFor="lastName">
            <div>Last name</div>
            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={11}
            />
          </label>
        </div>
        <label htmlFor="address">
          <div>Address</div>
          <input
            type="text"
            id="address"
            placeholder="Enter your specific address"
            className="big-input"
            value={formData.address}
            onChange={handleChange}
            required
            minLength={5}
          />
        </label>
        <div className="labels">
          <label htmlFor="state">
            <div>State</div>
            <input
              type="text"
              id="state"
              placeholder="ex: NY"
              value={formData.state}
              onChange={handleChange}
              required
              minLength={2}
            />
          </label>
          <label htmlFor="postCode">
            <div>Postal Code</div>
            <input
              type="text"
              id="postCode"
              placeholder="ex: 10011"
              value={formData.postCode}
              onChange={handleChange}
              required
              minLength={2}
            />
          </label>
        </div>
        <div className="labels">
          <label htmlFor="dateOfBirth">
            <div>Date of Birth</div>
            <input
              type="date"
              id="dateOfBirth"
              placeholder="ex: yyyy-mm-dd"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              minLength={2}
            />
          </label>
          <label htmlFor="ssn">
            <div>SSN</div>
            <input
              type="text"
              id="ssn"
              placeholder="ex: 1234"
              value={formData.ssn}
              onChange={handleChange}
              required
              minLength={2}
            />
          </label>
        </div>
        <label htmlFor="email">
          <div>Email</div>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="big-input"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          <div>Password</div>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="big-input"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </label>
        <div className="pwd-progrssbar">
          <ProgressBar password={formData.password} />
        </div>
        <button type="submit" className="sign-up-button">
          Sign up
        </button>
        <p className="sign-up-footer">
          Do you have an account? <Link to="/signin">Login</Link>
        </p>
      </form>
      <Link to="/about" className="about-link">About project</Link>
    </div>
  );
}

export default SignUp;
