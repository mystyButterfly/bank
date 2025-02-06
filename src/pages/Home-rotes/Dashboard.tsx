import "./Dashboard.css";
import DoughnutChart from "../../components/DoughnutGrafic";
import { Link } from "react-router";
import TransactionTable from "../../components/TransactionTable";
import { useEffect, useState } from "react";
import RightSidebar from "../../components/RightSidebar";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Transaction } from "../../components/TransactionTable";

interface activeBank {
  cardID: string;
  bankName: string;
  status: boolean;
}
interface AccountType {
  name: string;
  currentBalance: number;
}

export interface Card {
  cardID: string;
  userId: string;
  bankName: string;
  balance: number;
  history: Transaction[];
}

function Dashboard() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }
  const { user, setContextBanksList } = context;

  const [activeBank, setActiveBank] = useState<activeBank[]>([]);
  const [accounts, setAccounts] = useState<AccountType[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [dashBoardBalance, setDashboardBalance] = useState<number>(0);

  // fetch amount of bank account and total amount
  useEffect(() => {
    const tempAccounts: { name: string; currentBalance: number }[] = [];
    const preActiveBank: {
      cardID: string;
      bankName: string;
      status: boolean;
    }[] = [];
    const dbCardsJSON = localStorage.getItem("cards");
    const dbCards = dbCardsJSON ? JSON.parse(dbCardsJSON) : [];
    dbCards?.forEach((element: Card) => {
      element.userId === user?.id &&
        (tempAccounts.push({
          name: element.bankName,
          currentBalance: Number(element.balance),
        }),
        preActiveBank.push({
          cardID: element.cardID,
          bankName: element.bankName,
          status: false,
        }));
    });
    setAccounts(tempAccounts);
    preActiveBank.length > 0 && (preActiveBank[0].status = true);
    setActiveBank(preActiveBank);
  }, [user]);

  useEffect(() => {
    const newBank = activeBank.find((b) => b.status === true);
    const dbCardsJSON = localStorage.getItem("cards");
    const dbCards = dbCardsJSON ? JSON.parse(dbCardsJSON) : [];
    const activeCard = dbCards.find(
      (card: Card) => card.cardID === newBank?.cardID
    );
    if (activeCard) {
      setTransactions(activeCard.history);
      setDashboardBalance(activeCard.balance);
    }

    setContextBanksList(activeBank);
  }, [activeBank]);

  function pickActiveBank(bankName: string) {
    setActiveBank((prevBanks) =>
      prevBanks.map((bank) =>
        bank.bankName === bankName
          ? { ...bank, status: true }
          : { ...bank, status: false }
      )
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <div className="dashboard-notscroll">
          <div className="dashboard-header">
            <h1>
              Welcome, <span>{user?.firstName}</span>
            </h1>
            <p>Access & manage your account and transactions efficiently.</p>
          </div>
          <div className="doughtnut-container">
            <div className="doughnutChart">
              <DoughnutChart accounts={accounts} />
            </div>
            <div className="doughtnut-label">
              <div>
                <h3>
                  Banks accounts: {accounts.length > 0 && accounts.length}
                </h3>
                <Link to="/add">+ Add bank</Link>
              </div>
              <p>Total current balance</p>
              <h2>
                $
                {accounts.reduce(
                  (total, account) => total + account.currentBalance,
                  0
                )}
              </h2>
            </div>
          </div>
        </div>
        <div className="dashboard-scroll">
          <h2>Recent transactions</h2>
          <div className="banks">
            <div className="banks-buttons">
              {accounts.length > 0
                ? accounts.map((element, index) => (
                    <span
                      key={Math.random() * 100000}
                      className={
                        activeBank[index].status ? "actictiveBank" : undefined
                      }
                      onClick={() => pickActiveBank(element.name)}
                    >
                      {element.name}
                    </span>
                  ))
                : null}
            </div>
            <div className="active-bank-label-container">
              <div className="active-bank-label">
                {activeBank.length > 0
                  ? activeBank.map((b) => (b.status ? b.bankName[0] : null))
                  : null}
              </div>
              <div>
                <h2>
                  {activeBank.length > 0
                    ? activeBank.map((b) => (b.status ? b.bankName : null))
                    : null}
                </h2>
                <h3>${dashBoardBalance}</h3>
              </div>
            </div>
          </div>
          <div>
            <TransactionTable transactions={transactions} />
          </div>
        </div>
      </div>

      <div className="righSidebar">
        <RightSidebar />
      </div>
    </div>
  );
}

export default Dashboard;
