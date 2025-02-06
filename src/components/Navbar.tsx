import { NavLink, useNavigate } from "react-router";
import "./navbar.css";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import UserModal from "./UserModal";

export const logoSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
  >
    <path
      d="M7.92455 28.1577C6.9034 27.1219 6.9034 25.4426 7.92455 24.4069L9.74872 22.5566L15.2968 28.349L11.8263 29.2499L7.92455 28.1577Z"
      fill="url(#paint0_linear_3363_47878)"
    />
    <path
      d="M0.478784 20.807C-0.159595 20.1595 -0.159595 19.1095 0.478784 18.462L3.05024 15.8538L8.35746 21.2368L0.478784 20.807Z"
      fill="url(#paint1_linear_3363_47878)"
    />
    <path
      d="M33.9823 19.3653L20.0488 33.4978C18.9899 34.5683 17.2778 34.5683 16.2192 33.4978L2.28571 19.3653C1.23028 18.2912 1.23028 16.5547 2.28571 15.4809L16.2192 1.34838C17.2782 0.277877 18.9902 0.277877 20.0488 1.34838L33.9823 15.4809C35.0378 16.5547 35.0378 18.2912 33.9823 19.3653Z"
      fill="url(#paint2_linear_3363_47878)"
    />
    <path
      opacity="0.28"
      d="M33.1121 15.5819C30.465 16.8791 26.4736 17.4055 20.7977 14.8356C13.6263 11.5929 6.80912 13.9675 2.40869 16.4779C2.50158 16.2966 2.6217 16.1257 2.7732 15.9724L16.7032 1.83983C17.0847 1.45614 17.5936 1.24367 18.1334 1.24367C18.6731 1.24367 19.1817 1.45647 19.5636 1.84341L33.1121 15.5819Z"
      fill="url(#paint3_linear_3363_47878)"
    />
    <g opacity="0.44">
      <path
        d="M27.9271 18.8246L25.9021 26.4994L24.74 24.5225L21.1442 28.1732C20.3053 29.0205 19.3806 29.7528 18.387 30.3525C17.0942 31.1371 15.647 31.4961 14.2133 31.465L11.7896 29.0065C14.4468 28.8564 16.9187 27.7408 18.8165 25.8162L22.4812 22.1027L20.2121 20.7255L27.9271 18.8246Z"
        fill="url(#paint4_linear_3363_47878)"
      />
      <path
        d="M23.8615 9.68913L21.4825 18.7064L20.1141 16.3841L15.8889 20.6661C14.9642 21.604 13.9466 22.4201 12.8636 23.1001C11.1653 24.1635 9.24376 24.6206 7.35265 24.5052L4.55762 21.6703C7.78923 21.5693 10.8661 20.2268 13.1589 17.901L17.4562 13.5387L14.7954 11.9243L23.8615 9.68913Z"
        fill="url(#paint5_linear_3363_47878)"
      />
    </g>
    <path
      d="M27.2423 17.9549L25.2173 25.6297L24.052 23.6527L20.4562 27.2999C19.6179 28.1501 18.6929 28.8798 17.7012 29.4812C14.556 31.3879 10.516 30.7856 7.92529 28.1576H10.4794C13.3706 28.1576 16.0865 27.0172 18.132 24.9425L21.7931 21.2323L19.5276 19.8551L27.2423 17.9549Z"
      fill="url(#paint6_linear_3363_47878)"
    />
    <path
      d="M23.1751 8.81549L20.7961 17.8363L19.4246 15.5104L15.1993 19.796C14.2746 20.7339 13.2599 21.5478 12.175 22.2287C8.43695 24.5757 3.58713 23.9601 0.478516 20.807H3.47982C6.85205 20.807 10.0862 19.4484 12.4706 17.0296L16.7701 12.6683L14.1093 11.054L23.1751 8.81549Z"
      fill="url(#paint7_linear_3363_47878)"
    />
    <g opacity="0.5">
      <path
        opacity="0.78"
        d="M26.7596 18.4309L25.388 23.6333C24.3668 22.8662 23.2394 22.1479 22.0154 21.4994L22.3489 21.1648L20.4238 19.9932L26.7596 18.4309Z"
        fill="url(#paint8_linear_3363_47878)"
      />
      <path
        opacity="0.78"
        d="M22.6932 9.29504L20.6753 16.9487L19.4927 14.9471L15.5359 18.964C14.5938 18.706 13.6246 18.4864 12.631 18.3048C12.3389 18.2525 12.0464 18.2038 11.7578 18.1583C12.0877 17.8828 12.4077 17.5865 12.7136 17.2762L17.327 12.6001L15.0064 11.1914L22.6932 9.29504Z"
        fill="url(#paint9_linear_3363_47878)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_3363_47878"
        x1="7.15866"
        y1="25.9031"
        x2="15.2969"
        y2="25.9031"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B0D1FF" />
        <stop offset="1" stopColor="#4F93FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_3363_47878"
        x1="-0.000112109"
        y1="18.5454"
        x2="8.35733"
        y2="18.5454"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B0D1FF" />
        <stop offset="1" stopColor="#4F93FF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_3363_47878"
        x1="18.0062"
        y1="31.0963"
        x2="18.3599"
        y2="-5.68908"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0058D4" />
        <stop offset="1" stopColor="#00245B" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_3363_47878"
        x1="17.8538"
        y1="8.0426"
        x2="17.7359"
        y2="17.8641"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="1" stopColor="#B0D1FF" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_3363_47878"
        x1="11.7902"
        y1="25.1458"
        x2="27.9273"
        y2="25.1458"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#001334" />
        <stop offset="1" stopColor="#00245B" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_3363_47878"
        x1="4.558"
        y1="17.1057"
        x2="23.8613"
        y2="17.1057"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#001334" />
        <stop offset="1" stopColor="#00245B" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_3363_47878"
        x1="7.92526"
        y1="24.2753"
        x2="27.2424"
        y2="24.2753"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0065FF" />
        <stop offset="1" stopColor="#00C4F7" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_3363_47878"
        x1="0.478772"
        y1="16.2332"
        x2="23.1752"
        y2="16.2332"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0065FF" />
        <stop offset="1" stopColor="#00C4F7" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_3363_47878"
        x1="24.7575"
        y1="18.6926"
        x2="20.9552"
        y2="24.9214"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="1" stopColor="#B0D1FF" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_3363_47878"
        x1="17.4127"
        y1="14.6288"
        x2="12.9226"
        y2="20.3205"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="1" stopColor="#B0D1FF" />
      </linearGradient>
    </defs>
  </svg>
);
const homeSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M8 17H16M11.0177 2.76401L4.23539 8.03914C3.78202 8.39176 3.55534 8.56807 3.39203 8.78887C3.24737 8.98446 3.1396 9.2048 3.07403 9.43907C3 9.70353 3 9.99071 3 10.5651V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V10.5651C21 9.99071 21 9.70353 20.926 9.43907C20.8604 9.2048 20.7526 8.98446 20.608 8.78887C20.4447 8.56807 20.218 8.39176 19.7646 8.03914L12.9823 2.76401C12.631 2.49076 12.4553 2.35413 12.2613 2.30162C12.0902 2.25528 11.9098 2.25528 11.7387 2.30162C11.5447 2.35413 11.369 2.49076 11.0177 2.76401Z"
      stroke="#667085"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const dolarCircleSVG = (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.05 16.25H11.17C9.84001 16.25 8.75 15.13 8.75 13.75C8.75 13.34 9.09 13 9.5 13C9.91 13 10.25 13.34 10.25 13.75C10.25 14.3 10.66 14.75 11.17 14.75H13.05C13.44 14.75 13.75 14.4 13.75 13.97C13.75 13.43 13.6 13.35 13.26 13.23L10.25 12.18C9.61 11.95 8.75 11.49 8.75 10.02C8.75 8.76999 9.74001 7.73999 10.95 7.73999H12.83C14.16 7.73999 15.25 8.85999 15.25 10.24C15.25 10.65 14.91 10.99 14.5 10.99C14.09 10.99 13.75 10.65 13.75 10.24C13.75 9.68999 13.34 9.23999 12.83 9.23999H10.95C10.56 9.23999 10.25 9.58999 10.25 10.02C10.25 10.56 10.4 10.64 10.74 10.76L13.75 11.81C14.39 12.04 15.25 12.5 15.25 13.97C15.25 15.23 14.26 16.25 13.05 16.25Z" fill="#667085"></path>
    <path d="M12 17.25C11.59 17.25 11.25 16.91 11.25 16.5V7.5C11.25 7.09 11.59 6.75 12 6.75C12.41 6.75 12.75 7.09 12.75 7.5V16.5C12.75 16.91 12.41 17.25 12 17.25Z" fill="#667085"></path>
    <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#667085"/>
</svg>
);
const paymentTransferSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M13.05 16.25H11.17C9.84001 16.25 8.75 15.13 8.75 13.75C8.75 13.34 9.09 13 9.5 13C9.91 13 10.25 13.34 10.25 13.75C10.25 14.3 10.66 14.75 11.17 14.75H13.05C13.44 14.75 13.75 14.4 13.75 13.97C13.75 13.43 13.6 13.35 13.26 13.23L10.25 12.18C9.61 11.95 8.75 11.49 8.75 10.02C8.75 8.76999 9.74001 7.73999 10.95 7.73999H12.83C14.16 7.73999 15.25 8.85999 15.25 10.24C15.25 10.65 14.91 10.99 14.5 10.99C14.09 10.99 13.75 10.65 13.75 10.24C13.75 9.68999 13.34 9.23999 12.83 9.23999H10.95C10.56 9.23999 10.25 9.58999 10.25 10.02C10.25 10.56 10.4 10.64 10.74 10.76L13.75 11.81C14.39 12.04 15.25 12.5 15.25 13.97C15.25 15.23 14.26 16.25 13.05 16.25Z"
      fill="#667085"
    />
    <path
      d="M12 17.25C11.59 17.25 11.25 16.91 11.25 16.5V7.5C11.25 7.09 11.59 6.75 12 6.75C12.41 6.75 12.75 7.09 12.75 7.5V16.5C12.75 16.91 12.41 17.25 12 17.25Z"
      fill="#667085"
    />
    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2C12.75 2.41 12.41 2.75 12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 11.59 21.59 11.25 22 11.25C22.41 11.25 22.75 11.59 22.75 12C22.75 17.93 17.93 22.75 12 22.75Z"
      fill="#667085"
    />
    <path
      d="M22 6.75C21.59 6.75 21.25 6.41 21.25 6V2.75H18C17.59 2.75 17.25 2.41 17.25 2C17.25 1.59 17.59 1.25 18 1.25H22C22.41 1.25 22.75 1.59 22.75 2V6C22.75 6.41 22.41 6.75 22 6.75Z"
      fill="#667085"
    />
    <path
      d="M16.9999 7.75C16.8099 7.75 16.6199 7.68 16.4699 7.53C16.1799 7.24 16.1799 6.76 16.4699 6.47L21.4699 1.47C21.7599 1.18 22.2399 1.18 22.5299 1.47C22.8199 1.76 22.8199 2.24 22.5299 2.53L17.5299 7.53C17.3799 7.68 17.1899 7.75 16.9999 7.75Z"
      fill="#667085"
    />
  </svg>
);
const connectBankSVG = (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M13.5 9.25H2C1.59 9.25 1.25 8.91 1.25 8.5C1.25 8.09 1.59 7.75 2 7.75H13.5C13.91 7.75 14.25 8.09 14.25 8.5C14.25 8.91 13.91 9.25 13.5 9.25Z" fill="#667085"/>
  <path d="M8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25Z" fill="#667085"/>
  <path d="M14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill="#667085"/>
  <path d="M17.56 21.25H6.44C2.46 21.25 1.25 20.05 1.25 16.11V7.89C1.25 3.95 2.46 2.75 6.44 2.75H13.5C13.91 2.75 14.25 3.09 14.25 3.5C14.25 3.91 13.91 4.25 13.5 4.25H6.44C3.3 4.25 2.75 4.79 2.75 7.89V16.1C2.75 19.2 3.3 19.74 6.44 19.74H17.55C20.69 19.74 21.24 19.2 21.24 16.1V12.02C21.24 11.61 21.58 11.27 21.99 11.27C22.4 11.27 22.74 11.61 22.74 12.02V16.1C22.75 20.05 21.54 21.25 17.56 21.25Z" fill="#667085"/>
  <path d="M22 7H16.5C16.09 7 15.75 6.66 15.75 6.25C15.75 5.84 16.09 5.5 16.5 5.5H22C22.41 5.5 22.75 5.84 22.75 6.25C22.75 6.66 22.41 7 22 7Z" fill="#667085"/>
  <path d="M19.25 9.75C18.84 9.75 18.5 9.41 18.5 9V3.5C18.5 3.09 18.84 2.75 19.25 2.75C19.66 2.75 20 3.09 20 3.5V9C20 9.41 19.66 9.75 19.25 9.75Z" fill="#667085"/>
</svg>)
const logoutSVG = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>)

function Navbar() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { user } = context;
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="navbar">
      <nav>
        <div className="logo">{logoSVG} <span>Horizon</span></div>

        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {homeSVG} Home
        </NavLink>

        <NavLink
          to="/mybanks"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {dolarCircleSVG} My Banks
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi biList-check"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              strokeWidth="0.7"
              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"
            />
          </svg>
          Transaction History
        </NavLink>

        <NavLink
          to="/transfer"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {paymentTransferSVG} Payment Transfer
        </NavLink>

        <NavLink
          to="/add"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {connectBankSVG} Connect bank
        </NavLink>
      </nav>

      <div className="navbar-footer">
        <div className="first-name" onClick={handleOpenModal}>
          <div className="first">A</div>
          <div className="name">
            <div>
              {user?.firstName} {user?.lastName}
            </div>
            <div>{user?.email}</div>
          </div>
        </div>
        <div className="logOut"
          onClick={() => {
            localStorage.setItem(
              "isAuth",
              JSON.stringify({ user: "null", authStatus: false })
            ),
              navigate("/signin");
          }}>
          {logoutSVG}
        </div>
        
        {/* <img
          src="/icons/logout.svg"
          alt="log Out"
          onClick={() => {
            localStorage.setItem(
              "isAuth",
              JSON.stringify({ user: "null", authStatus: false })
            ),
              navigate("/signin");
          }}
        /> */}
      </div>
      <UserModal
        user={
          user || {
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
          }
        }
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default Navbar;
