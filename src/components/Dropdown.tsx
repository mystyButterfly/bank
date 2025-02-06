import { useEffect, useState } from "react";
import "./Dropdown.css";
import { ContextBanksList } from "../context/UserContext";


interface DropdownProps {
  banksList: ContextBanksList[];
  setUpSelectedOption:  React.Dispatch<React.SetStateAction<string | undefined>>
}

const Dropdown: React.FC<DropdownProps> = ({ banksList, setUpSelectedOption }:DropdownProps) => {
  const [options, setOptions] = useState<ContextBanksList[]>([]);
  const [selectedOption, setSelectedOption] = useState<ContextBanksList|null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (banksList.length > 0) {
      setOptions(banksList);
      setSelectedOption(banksList[0]);
      setUpSelectedOption(banksList[0].cardID)
    }
  }, [banksList]);

  const toggleDropdown = () => {
    const timer = setTimeout(() => setIsOpen(false), 5000);
    setIsOpen(!isOpen);
    return () => {
      clearTimeout(timer);
    };
  };

  const handleOptionClick = (option: ContextBanksList) => {
    setSelectedOption(option);
    setUpSelectedOption(option.cardID)
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      <div className="dropdown-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#77a3f4"
          className="dropdown-icon"
          viewBox="0 0 16 16"
        >
          <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
        </svg>
        <span className="dropdown-selected">{selectedOption?.bankName}</span>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="grey"
            className="bi bi-chevron-compact-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
            />
          </svg>
        )}
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option.bankName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
