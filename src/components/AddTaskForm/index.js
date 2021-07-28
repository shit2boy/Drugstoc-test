import { Fragment } from "react";
import Modal from "../custom-modal/customModal";
import FormInput from "../Form-input/form-input.component";
import AddTaskBTN from "../customButton/CustomButton";
import styles from "./style.module.css";

const AddTaskForm = ({ children, openModal, closeModal, handleopenModal }) => {
  return (
    <Fragment>
      <div onClick={handleopenModal} style={{ cursor: "pointer" }}>
        {children}
      </div>
      <Modal Open={openModal} onClose={closeModal}>
        <form
          className={styles.addtask_form}
          // style={{ border: "1px solid red" }}
        >
          <FormInput
            type="text"
            label="Task title"
            placeholder="Task description"
          />
          <div>
            <select className={styles.select}>
              <option>Marketing & sale</option>
              <option>Marketing & sale</option>
              <option>Marketing & sale</option>
            </select>
          </div>
          <FormInput type="text" label="Price" placeholder="Task price" />
          <FormInput
            type="text"
            label="Assign task to"
            placeholder="Assign task to"
          />
          <div style={{ padding: "10px 0" }}>
            <p>Task Status:</p>
            <label>
              In Progress
              <input type="radio" className={styles.checkbox} />
            </label>
            <label>
              In Review
              <input type="radio" className={styles.checkbox} />
            </label>
            <label>
              Verify
              <input type="radio" className={styles.checkbox} />
            </label>
            <label>
              Waiting Approval
              <input type="radio" className={styles.checkbox} />
            </label>
          </div>
          <FormInput
            type="text"
            label="comment"
            placeholder="leave some comments"
          />
          <AddTaskBTN type="button">Add Task to List</AddTaskBTN>
        </form>
      </Modal>
    </Fragment>
  );
};

export default AddTaskForm;
