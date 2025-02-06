import Dropdown from "../../components/Dropdown";
import "./Transfer.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

interface FormData {
  recipientBankID: string;
  currentBankID: string;
  comment: string;
  amount: string;
  recipientEmail: string;
  date: string;
}

function Transfer() {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }
  const { contextBanksList } = context;

  const [upSelectedOption, setUpSelectedOption] = useState<
    string | undefined
  >();
  const [upSelectedMyRecipientBank, setUpSelectedMyRecipientBank] = useState<
    string | undefined
  >();
  const [upSelectedMyRecipientBankStyle, setUpSelectedMyRecipientBankStyle] = useState<number>(1)
  const [formData, setFormData] = useState<FormData>({
    recipientBankID: "",
    currentBankID: "",
    comment: "",
    amount: "",
    recipientEmail: "",
    date: `${new Date().toLocaleString()}`,
  });
  const [response, setResponse] = useState<{ success: string; error: string }>({
    success: "",
    error: "",
  });
  
  const regEx = /^(?=.*[0-9])([0-9]*([.,][0-9]*)?|[0-9]+)$/;

  useEffect(() => {
    const timer = setTimeout(() => {
      setResponse({
        success: "",
        error: "",
      });
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, [response]);

  useEffect(() => {
    if (upSelectedMyRecipientBank) {
      setFormData((prevData) => ({
        ...prevData,
        recipientBankID: upSelectedMyRecipientBank,
      }));
    }
  }, [upSelectedMyRecipientBank]);
  useEffect(()=>{
    if(upSelectedMyRecipientBank!==formData.recipientBankID&&formData.recipientBankID!==""){
      setUpSelectedMyRecipientBankStyle(0.5)
    }else{setUpSelectedMyRecipientBankStyle(1)}
  }, [formData.recipientBankID])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (upSelectedOption) {
      const newFormData = { ...formData, currentBankID: upSelectedOption };
      setFormData(newFormData);
    }
  }, [upSelectedOption]);

  const handleTransfer = () => {
    sendMoney();
  };

  function sendMoney() {
    try {
      const storedCards = localStorage.getItem("cards");
      if (!storedCards) {
        console.error("No cards found in localStorage.");
        setResponse((prev) => ({
          ...prev,
          error: "No cards found in localStorage",
        }));
        return; // or handle the error appropriately
      }

      const dbCards = JSON.parse(storedCards);
      let senderCard, recipientCard;

      // Find the sender and recipient cards
      for (let i = 0; i < dbCards.length; i++) {
        if (dbCards[i].cardID === formData.currentBankID) {
          senderCard = dbCards[i];
        }
        if (dbCards[i].cardID === formData.recipientBankID) {
          recipientCard = dbCards[i];
        }
      }

      // Check if senderCard was found
      if (!senderCard) {
        console.error("Sender card not found.");
        setResponse((prev) => ({
          ...prev,
          error: "Sender card not found.",
        }));
        return; // or handle the error appropriately
      }

      // Check if recipientCard was found
      if (!recipientCard) {
        console.error("Recipient card not found.");
        setResponse((prev) => ({
          ...prev,
          error: "Recipient card not found.",
        }));
        return; // or handle the error appropriately
      }

      // Check if sender has enough balance
      if (senderCard.balance >= Number(formData.amount)) {
        // Deduct amount from sender
        senderCard.balance -= Number(formData.amount);
        senderCard.history.push({
          transactionId: Math.random() * 10000000,
          amount: formData.amount,
          type: "credit",
          comment: `${formData.comment} from ${formData.currentBankID} to ${formData.recipientBankID} recipient email ${formData.recipientEmail}`,
          date: formData.date,
        });

        // Add amount to recipient
        recipientCard.balance += Number(formData.amount);
        recipientCard.history.push({
          transactionId: Math.random() * 10000000,
          amount: formData.amount,
          type: "debit",
          comment: `${formData.comment} from ${formData.currentBankID} to ${formData.recipientBankID} recipient email ${formData.recipientEmail}`,
          date: formData.date,
        });

        setFormData({
          recipientBankID: "",
          currentBankID: upSelectedOption||"",
          comment: "",
          amount: "",
          recipientEmail: "",
          date: `${new Date().toLocaleString()}`,
        });
        setResponse((prev) => ({ ...prev, success: "Transaction is success" }));
      } else {
        console.error("Insufficient balance.");
        setResponse((prev) => ({ ...prev, error: "Insufficient balance." }));
        return; // or handle the error appropriately
      }

      // Save the updated cards back to localStorage
      localStorage.setItem("cards", JSON.stringify(dbCards));
    } catch (err) {
      console.log(err);
      setResponse((prev) => ({ ...prev, error: String(err) }));
    }
  }

  function handleFirstMyRecipientBank() {
    if (formData.recipientBankID.length < 19) {
      const newFormData = {
        ...formData,
        recipientBankID: contextBanksList[0].cardID,
      };
      setFormData(newFormData);
    }
  }


  return (
    <div className="transfer">
      {response.success && (
        <div className="transfer-message t-green">{response.success}</div>
      )}
      {response.error && !response.success && <div className="transfer-message t-red">{response.error}</div>}
      <h1>Payment Transfer</h1>
      <p>
        Please provide any specific details or notes related to the payment
        transfer.
      </p>
      
      <br />
      <h3>Transfer details</h3>
      <p>Enter the details of the recipient</p>
      <br />
      <div className="transfer-container">
        <div>
          <div>Select Source Bank</div>
          <p>Select the bank account you want to transfer from.</p>
        </div>
        <div className="transfer-dropdown">
          <span>
            <Dropdown
              banksList={contextBanksList}
              setUpSelectedOption={setUpSelectedOption}
            />
          </span>
          <span>{upSelectedOption}</span>
        </div>
      </div>
      <div className="transfer-container">
        <div>
          <div>Transfer Note (Optional)</div>
          <p>
            Please provide any additional information or instructions related to
            the transfer
          </p>
        </div>
        <input
          type="text"
          name="comment"
          placeholder="Enter the additional information"
          onChange={handleInputChange}
          value={formData.comment}
        />
      </div>
      <div>
        <h3>Bank account details</h3>
        <p>The bank account details of the recipient</p>
      </div>
      <div className="transfer-container">
        <div>Recipient's Email Address (Optional)</div>
        <input
          type="text"
          name="recipientEmail"
          placeholder="Enter the Recipient's Email Address"
          onChange={handleInputChange}
          value={formData.recipientEmail}
        />
      </div>
      <div className="transfer-container">
        <div>Recipient's Bank Account Number</div>
       { contextBanksList.length>0 && <div className="transfer-c-mybanks" style={{ opacity: upSelectedMyRecipientBankStyle }}>
          <p>My banks:</p>{" "}
          <div
            className="transfer-dropdown-mycard"
            onClick={() => handleFirstMyRecipientBank()}
          >
            <Dropdown
              banksList={contextBanksList}
              setUpSelectedOption={setUpSelectedMyRecipientBank}
            />
          </div>
        </div>}

        <input
          type="text"
          name="recipientBankID"
          placeholder="ex. 1234 1234 1234 1234 (with space)"
          onChange={handleInputChange}
          value={formData.recipientBankID}
          maxLength={19}
          style={{border:"2px solid grey"}}
        />
      </div>
      <div className="transfer-container">
        <div>Amount</div>
        <input
          type="text"
          name="amount"
          placeholder="for example, 150"
          onChange={handleInputChange}
          value={formData.amount}
        />
      </div>
      <div className="transfer-btn-container">
        <button
          className={`transfer-btn ${
            !regEx.test(formData.amount) && "disable"
          }`}
          onClick={handleTransfer}
          disabled={!regEx.test(formData.amount)}
        >
          Transfer
        </button>
      </div>
    </div>
  );
}

export default Transfer;
