import { useState } from "react";
import AddTaskForm from "../AddTaskForm";
import TaskStatusLabel from "../customButton/CustomButton";
import ConfirmationDialogue from "../PopConfirmation";
import styles from "./style.module.css";
const TaskCard = () => {
  const [ismodal, setisOpen] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const handleopenModal = () => {
    setisOpen(true);
  };
  const closeModal = () => {
    setisOpen(false);
  };
  const handlePopUp = () => {
    setShowPopUp(!showPopUp);

    console.log(showPopUp);
    // showPopUp
  };
  return (
    <div className={styles.task_card}>
      <div className={styles.icons}>
        {" "}
        <i className="fa fa-list-alt"></i>
      </div>
      <div className={styles.task_description}>
        <p className={styles.task}>
          Increase confidence with TrustPilots reviews
        </p>
        <p className={styles.labelTag}>Custom Task</p>
      </div>
      <div>
        <h5>N500.00</h5>
        <p className={styles.subtitle}>Task price</p>
        <h6 className={styles.subtitle}>
          Delivery: <span className={styles.subtitle}></span> within 3 days
        </h6>
      </div>
      <div className={styles.asignee_user}>
        <div className={styles.user_image}>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 "
            width="100%"
            height="100%"
            alt="Assignee_icon"
          />
        </div>
        <div>
          <h5>Adamu Musa</h5>
          <p className={styles.subtitle}>Assigned to</p>
        </div>
      </div>
      <div>
        <TaskStatusLabel>
          {" "}
          <span className={styles.label_dot}>&#8226;</span> Verify
        </TaskStatusLabel>
      </div>
      <span className={styles.icons}>
        {/* <i className="fa fa-list-alt"></i> */}
        <i class="fa fa-comment"></i>
      </span>
      <span className={styles.icons}> ...</span>
      <div className={styles.action_btns}>
        <ConfirmationDialogue>
          <i className="fa fa-trash" onClick={handlePopUp}></i>
        </ConfirmationDialogue>
        <AddTaskForm
          openModal={ismodal}
          closeModal={closeModal}
          handleopenModal={handleopenModal}
        >
          <i className="fa fa-edit"></i>
        </AddTaskForm>
      </div>
    </div>
  );
};

export default TaskCard;
