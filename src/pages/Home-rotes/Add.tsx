import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";
import "./Add.css"; // Import your CSS file for styles
import { Card } from "./Dashboard";

function Add() {
  const navigate = useNavigate();
  
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { user } = context;

  const card:Card = {
    cardID: generateRandomString(),
    userId: user?.id,
    bankName: generateRandomUppercaseString(3),
    balance: 1500,
    history: [],
  };

  function generateRandomString() {
    const randomFourDigit = Math.floor(1000 + Math.random() * 9000);
    const randomFourDigit2 = Math.floor(1000 + Math.random() * 9000);
    return `1234 1234 ${randomFourDigit} ${randomFourDigit2}`;
  }

  function generateRandomUppercaseString(length:number) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result + ` Bank`;
  }

  function handleAdd() {
    const dbCardsJSON = localStorage.getItem("cards");
    const dbCards = dbCardsJSON ? JSON.parse(dbCardsJSON) : [];
    dbCards.push(card);
    localStorage.setItem("cards", JSON.stringify(dbCards));
    navigate("/dashboard");
  }

  return (
    <div className="add-container">
      <h1>Add New Card</h1>
      <h2>Complete the following steps:</h2>
      <p>1. Ensure that you have the necessary details ready.</p>
      <p>2. Click the "Add" button to create a new card.</p>
      <p>3. Your card information will be saved automatically.</p>
      <p>
        4. You will be redirected to your dashboard upon successful addition.
      </p>
      <p>5. Enjoy managing your finances with ease!</p>
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Add;
