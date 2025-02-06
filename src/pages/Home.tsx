import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { checkLocalStoarage } from "../utils/checkLocalStorage";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { UserContext, UserType } from "../context/UserContext";


function Home() {
  const navigate = useNavigate();
  // get user from context
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }
  const { setUser } = context;
  
  useEffect(() => {
    checkLocalStoarage();
    // check authorization
    if (localStorage.getItem("isAuth")) {
      const prepreisAuth = localStorage.getItem("isAuth");
      const preisAuth = prepreisAuth
        ? JSON.parse(prepreisAuth)
        : { auth: false };
      const isAuth = preisAuth.authStatus || false;
      !isAuth && navigate("/signin");
    } else {
      navigate("/signin");
    }

    fetchUser();
  }, []);
  function fetchUser() {
    const userMailJSON = localStorage.getItem("isAuth");
      const userMail = userMailJSON ? JSON.parse(userMailJSON) : null;

      const dbJSON = localStorage.getItem("users");
      const db = dbJSON ? JSON.parse(dbJSON) : [];
    const currentUser = db?.find((u:UserType) => u?.email === userMail?.user);
    setUser(currentUser);
  }


  return (
    <div className="home">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;
