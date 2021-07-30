import { useState } from "react";
import { connect } from "react-redux";
import { setCurrent } from "../actions";
import AddTaskForm from "../AddTaskForm";
import TaskStatusLabel from "../customButton/CustomButton";
import ConfirmationDialogue from "../PopConfirmation";
import styles from "./style.module.css";
const TaskCard = ({ tasksItem, deleteTask, setCurrent }) => {
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
    // deleteTask(tasksItem);

    // console.log(showPopUp);
    // showPopUp
  };

  // const deleteTask =(task)=> {
  //   ref
  //     .doc(task.id)
  //     .delete()
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  return (
    <div className={styles.task_card}>
      <div className={styles.icons}>
        {" "}
        <i className="fa fa-list-alt"></i>
      </div>
      <div className={styles.task_description}>
        <p className={styles.task}>{tasksItem.description}</p>
        <p
          className={`${
            tasksItem["taskLabel"] === "optimization"
              ? styles.optimization
              : null
          } ${tasksItem["taskLabel"] === "Custom task" ? styles.labelTag : null}
           ${
             tasksItem["taskLabel"] === "Testing"
               ? styles.integration
               : styles.labelTag
           }
           ${
             tasksItem["taskLabel"] === "Integrations"
               ? styles.integration
               : styles.labelTag
           }
          
          `}
        >
          {tasksItem.taskLabel}
        </p>
      </div>
      <div>
        <h5>N{tasksItem.taskPrice}</h5>
        <p className={styles.subtitle}>Task price</p>
        <h6 className={styles.subtitle}>
          Delivery: <span className={styles.subtitle}></span> within{" "}
          {tasksItem.delivryDate} days
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
          <h5>{tasksItem.expert}</h5>
          <p className={styles.subtitle}>Assigned to</p>
        </div>
      </div>
      <div>
        <TaskStatusLabel>
          {" "}
          <span
            className={`${styles.label_dot} ${
              tasksItem.taskStatus === " In Review" ? styles.verify : null
            }`}
          >
            &#8226;
          </span>{" "}
          {tasksItem.taskStatus}
        </TaskStatusLabel>
      </div>
      <span className={styles.icons}>
        {/* <i className="fa fa-list-alt"></i> */}
        <img
          src="./icons/comment.png"
          width="30px"
          style={{ color: "#888" }}
          height="30px"
          alt="icon"
        />
        {/* <i className="fa fa-comment"></i> */}
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
          <i className="fa fa-edit" onClick={() => setCurrent(tasksItem)}></i>
        </AddTaskForm>
      </div>
    </div>
  );
};

export default connect(null, { setCurrent })(TaskCard);
