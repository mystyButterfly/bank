import { useEffect, useState } from "react";
import TransactionTable from "../../components/TransactionTable";
import "./History.css";
import Dropdown from "../../components/Dropdown";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Card } from "./Dashboard";

function History() {
  const [upSelectedOption, setUpSelectedOption] = useState<
    string | undefined
  >();
  const [currentBank, setCurrentBank] = useState<Card | null>(null);

  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { user, contextBanksList } = context;

  // Log the selected option whenever it updates
  useEffect(() => {
    const dbCards = JSON.parse(localStorage.getItem("cards")!) || [];
    const newBank = dbCards.find((b: Card) => b.cardID === upSelectedOption);
    setCurrentBank(newBank);
  }, [upSelectedOption]);

  return (
    <div className="transactionHistory">
      <div className="history-notscroll">
        <div className="history-header">
          <div>
            <h1>Transaction history</h1>
            <p>Gain Insights and Track Your Transactions Over Time</p>
          </div>
          <div>
            <Dropdown
              banksList={contextBanksList}
              setUpSelectedOption={setUpSelectedOption}
            />
          </div>
        </div>
      </div>
      <div className="history-scroll">
      <div className="history-balance">
        <div>
          <h3>{currentBank?.bankName}</h3>
          <p>
            {user?.firstName} {user?.lastName}
          </p>
          <p>{currentBank?.cardID}</p>
        </div>
        <div className="history-balance-current">
          <div>Current balance</div>
          <h3>${currentBank?.balance}</h3>
        </div>
      </div>
      <h3>Transaction history</h3>
      <TransactionTable transactions={currentBank?.history || []} />
      </div>
      
    </div>
  );
}

export default History;
