import { useState } from "react";
import AddTaskForm from "../AddTaskForm";
import ActionButton from "../customButton/CustomButton";
import styles from "./style.module.css";
const NavigationBar = () => {
  const [ismodal, setisOpen] = useState(false);
  const handleopenModal = () => {
    setisOpen(true);
  };
  const closeModal = () => {
    setisOpen(false);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span style={{ color: "#A6E009", marginRight: "4px" }}>Drug</span>Stoc
      </div>
      <AddTaskForm
        openModal={ismodal}
        closeModal={closeModal}
        handleopenModal={handleopenModal}
      >
        <ActionButton colored>Add a new task &#43;</ActionButton>
      </AddTaskForm>
    </nav>
  );
};

export default NavigationBar;
