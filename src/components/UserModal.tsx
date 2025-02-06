import { useState, useEffect, useContext } from "react";
import "./UserModal.css";

import { UserContext } from "../context/UserContext";

interface UserModalProps {
  user: UserType;
  isOpen: boolean;
  onClose: () => void;
}
type UserType = {
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
};

const UserModal: React.FC<UserModalProps> = ({ user, isOpen, onClose }) => {
  const [formData, setFormData] = useState<UserType>(user);
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { setUser } = context;

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dbJSON = localStorage.getItem("users");
    const dbUsers = dbJSON ? JSON.parse(dbJSON) : [];
    for (let i = 0; i < dbUsers.length; i++) {
      if (dbUsers[i]?.id === formData?.id) {
        dbUsers[i] = formData;
      }
    }
    localStorage.setItem("users", JSON.stringify(dbUsers));
    setUser(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Edit User Profile</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={formData?.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData?.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <input
            type="text"
            name="address"
            value={formData?.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
          <input
            type="text"
            name="state"
            value={formData?.state}
            onChange={handleChange}
            placeholder="State"
            required
          />
          <input
            type="text"
            name="postCode"
            value={formData?.postCode}
            onChange={handleChange}
            placeholder="Post Code"
            required
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData?.dateOfBirth}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="ssn"
            value={formData?.ssn}
            onChange={handleChange}
            placeholder="SSN"
            required
          />
          <input
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData?.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button type="submit">Save</button>
        </form>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default UserModal;
