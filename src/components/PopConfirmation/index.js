import { useState } from "react";
import styles from "./style.module.css";
const ConfirmationDialogue = ({ children, popUpMessage }) => {
  const [confirm, setConfirm] = useState(false);
  const handlePopUp = () => {
    setConfirm(!confirm);
  };
  return (
    <div className={styles.popup} onClick={handlePopUp}>
      {children}
      <span className={`${!confirm ? styles.show : null} ${styles.popuptext}`}>
        {popUpMessage ? { popUpMessage } : "Are you sure to delete ?"}
        <div className={styles.button_container}>
          <button>Yes</button>
          <button onClick={handlePopUp}>No</button>
        </div>
      </span>
    </div>
  );
};

export default ConfirmationDialogue;
