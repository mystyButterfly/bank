import Cart from "./Cart";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router";

function RightSidebar() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { user, contextBanksList } = context;
  const navigate = useNavigate()

  return (
    <>
      <div className="gradient"></div>
      <div className="sidebar-label">
        <h2>
          {user?.firstName} {user?.lastName}
        </h2>
        <p>{user?.email}</p>
      </div>
      <div className="carts-container">
        <div className="carts-header">
          <h2>My Banks</h2>
          <Link className="add-link" to={"/add"}>
            + Add Bank
          </Link>
        </div>
        <div className="carts">
          {contextBanksList.length > 0 ? (
            contextBanksList.map((b) => (
              <div key={b.cardID} onClick={()=>{
                navigate('/mybanks')
              }}>
                <Cart
                  bankName={b.bankName}
                  firstName={user?.firstName || "First Name"}
                  lastName={user?.lastName || "Last Name"}
                  card={b.cardID}
                />
              </div>
            ))
          ) : (
            <p>No cards - no problems!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default RightSidebar;
