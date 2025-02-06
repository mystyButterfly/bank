import "./MyBanks.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Cart from "../../components/Cart";

function MyBanks() {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { user, contextBanksList } = context;
  return (
    <div className="myBanks">
      <div className="notscrol">
        <h1>My Bank Accounts</h1>
        <p>Effortless Manage Your Banking Activities</p>
        <h3>Your cards</h3>
      </div>
      <div className="myBanks-gradients mybanks-flex">
        {contextBanksList.length > 0 ? (
          contextBanksList.map((b) => (
            <div key={b.cardID}>
              <Cart
                bankName={b.bankName}
                firstName={user?.firstName || "First name"}
                lastName={user?.lastName || "Last name"}
                card={b.cardID}
              />
              <br />
            </div>
          ))
        ) : (
          <p>No cards - no problems!</p>
        )}
      </div>
    </div>
  );
}

export default MyBanks;
