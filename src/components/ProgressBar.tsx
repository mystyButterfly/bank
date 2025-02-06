import { useState, useEffect } from "react";


function ProgressBar({ password }:{password: string}) {
  const [strength, setStrength] = useState<number>(0);
  useEffect(() => {
    const checkPasswordStrength = (password: string) => {
      const lengthCriteria = password.length >= 8;
      const numberCriteria = /[0-9]/.test(password);
      const uppercaseCriteria = /[A-Z]/.test(password);
      const lowercaseCriteria = /[a-z]/.test(password);
      const specialCharacterCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      const criteriaMet = [
        numberCriteria,
        uppercaseCriteria,
        lowercaseCriteria,
        specialCharacterCriteria,
      ].filter(Boolean).length;

      if (password.length <= 4 || (password.length > 4 && criteriaMet === 1)) {
        setStrength(20); // Weak
      } else if (
        criteriaMet === 2 ||
        criteriaMet === 3 ||
        (!lengthCriteria && criteriaMet === 4)
      ) {
        setStrength(70); // Average
      } else if (lengthCriteria && criteriaMet === 4) {
        setStrength(100);
      } else {
        setStrength(20); // Default
      }
    };

    checkPasswordStrength(password);
  }, [password]);

  const getProgressBarColor = () => {
    if (strength === 20) return "red";
    if (strength === 70) return "orange";
    if (strength === 100) return "green";
    return "grey";
  };

  return (
    <div>
      {password.length > 0 ? (
        <div>
          <div
            style={{
              background: "#e0e0e0",
              borderRadius: "5px",
              height: "3px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${strength}%`,
                height: "100%",
                background: getProgressBarColor(),
                transition: "width 0.5s ease",
              }}
            />
          </div>
        </div>
      ) : null}
      {password === "" && (
        <span style={{ color: "grey" }}>
          Security is important! Use only strong password ¯\_(ツ)_/¯
        </span>
      )}
    </div>
  );
}

export default ProgressBar;
