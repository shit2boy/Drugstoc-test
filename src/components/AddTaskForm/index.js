import { Fragment, useEffect, useState } from "react";
import Modal from "../custom-modal/customModal";
import FormInput from "../Form-input/form-input.component";
import AddTaskBTN from "../customButton/CustomButton";
import styles from "./style.module.css";
import { connect } from "react-redux";
import { addNewTask, updateTask, clearCurrent } from "../actions/index";
import { v4 as uuidv4 } from "uuid";

const AddTaskForm = ({
  children,
  openModal,
  closeModal,
  handleopenModal,
  staffs,
  addNewTask,
  current,
  updateTask,
  clearCurrent,
}) => {
  const [errors, setErrors] = useState({});

  const [task, setTask] = useState({});
  const [message, setMessage] = useState(null);
  useEffect(() => {
    if (current) {
      setTask(current);
    }
  }, [current]);

  const handleChange = (e) => {
    if (current === null) {
      setTask({
        ...task,
        id: uuidv4(),
        // delivryDate: "5",
        createdDate: new Date(),
        [e.target.name]: e.target.value,
      });
      console.log(task);
    }
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
    // console.log(task);
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    if (!task.expert) {
      formIsValid = false;
      errors["expert"] = "*Please assign the task";
    }
    if (!task.taskPrice) {
      formIsValid = false;
      errors["taskPrice"] = "*Please input price";
    }
    if (!task.deliveryDate) {
      formIsValid = false;
      errors["deliveryDate"] = "*Please input deadline for task";
    }
    if (!task.description) {
      formIsValid = false;
      errors["description"] = "*please provide detailed description";
    }
    if (task.description?.length <= 3) {
      formIsValid = false;
      errors["description"] = "*please provide detailed description";
    }
    if (typeof task.description !== "undefined") {
      if (!task.expert.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["description"] = "*Please enter alphabet characters only.";
      }
    }

    if (!task.taskStatus) {
      formIsValid = false;
      errors["taskStatus"] = "please indicate task status";
    }
    if (!task.taskLabel) {
      formIsValid = false;
      errors["taskLabel"] = "please indicate task Label";
    }
    setErrors(errors);
    return formIsValid;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // console.log(task);
    if (validateForm()) {
      // setLoading(!loading);
      setTask({
        description: "",
        taskLabel: "",
        taskPrice: "",
        deliveryDate: "",
        taskStatus: "",
        comments: "",
        expert: " ",
      });
      if (current !== null) {
        updateTask(task, setMessage);
        clearCurrent();
        await clearCurrent();
      } else {
        addNewTask(task);
        await clearCurrent();
      }
    }
  };

  return (
    <Fragment>
      <div onClick={handleopenModal} style={{ cursor: "pointer" }}>
        {children}
      </div>
      <Modal Open={openModal} onClose={closeModal}>
        <form
          onSubmit={onSubmit}
          className={styles.addtask_form}
          // style={{ border: "1px solid red" }}
        >
          <FormInput
            type="text"
            label="Task title"
            error={errors["description"]}
            value={task["description"]}
            onChange={handleChange}
            name="description"
            placeholder="Task description"
            required
          />
          <div>
            <label>Task Label</label>
            <span
              style={{ color: "#dd2b0e", fontSize: "0.8rem", display: "block" }}
            >
              {errors["taskLabel"]}
            </span>
            <select
              className="select"
              name="taskLabel"
              value={task["taskLabel"]}
              onChange={handleChange}
            >
              <option> Label task to Department</option>
              <option value="Custom task">Custom task</option>
              <option value="Marketing & sale ">Marketing & sale</option>
              <option value="Integrations ">Integrations</option>
              <option value="Optimazation ">Optimazation</option>
              <option value="Deployment ">Deployment</option>
              <option value="Testing">Testing</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              // justifyContent: "space-between",
              // width: "100%",
            }}
          >
            <FormInput
              type="number"
              label="Price"
              error={errors["taskPrice"]}
              value={task["taskPrice"]}
              onChange={handleChange}
              name="taskPrice"
              placeholder="Task price"
              required
              style={{ width: "95%" }}
            />
            <FormInput
              type="number"
              label="Duration"
              error={errors["deliveryDate"]}
              value={task["deliveryDate"]}
              onChange={handleChange}
              name="deliveryDate"
              placeholder="Number of days to Deliver task"
              required
            />
          </div>

          <div>
            <label>Assign Task</label>
            <span
              style={{ color: "#dd2b0e", fontSize: "0.8rem", display: "block" }}
            >
              {errors["expert"]}
            </span>
            <select
              className="select"
              name="expert"
              value={task["expert"]}
              onChange={handleChange}
            >
              <option>Choose assignee ..</option>
              {staffs?.map((staff) => (
                <option value={staff.fullname} key={staff.id}>
                  {staff.fullName}
                </option>
              ))}
            </select>
          </div>
          <div style={{ padding: "10px 0" }}>
            <p>Task Status:</p>
            <span
              style={{ color: "#dd2b0e", fontSize: "0.8rem", display: "block" }}
            >
              {errors["taskStatus"]}
            </span>
            <label className={styles.label}>
              In Progress
              <input
                type="radio"
                name="taskStatus"
                value="in progress"
                onChange={handleChange}
                className={styles.checkbox}
              />
            </label>
            <label className={styles.label}>
              In Review
              <input
                type="radio"
                name="taskStatus"
                value="in review"
                onChange={handleChange}
                className={styles.checkbox}
              />
            </label>
            <label className={styles.label}>
              Verify
              <input
                type="radio"
                name="taskStatus"
                value="verify"
                onChange={handleChange}
                className={styles.checkbox}
              />
            </label>
            <label className={styles.label}>
              Waiting Approval
              <input
                type="radio"
                name="taskStatus"
                value="waiting approval"
                onChange={handleChange}
                className={styles.checkbox}
              />
            </label>
          </div>
          <FormInput
            type="text"
            value={task["comments"]}
            label="Comment"
            onChange={handleChange}
            name="comments"
            placeholder="leave some comments"
          />
          <small
            style={{
              color: "green",
              fontSize: "14px",
              display: "grid",
              justifyContent: "center",
            }}
          >
            {" "}
            {message}
          </small>
          <AddTaskBTN type="submit" colored>
            Add Task to List
          </AddTaskBTN>
        </form>
      </Modal>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  staffs: state.experts,
  current: state.current,
});

export default connect(mapStateToProps, {
  addNewTask,
  clearCurrent,
  updateTask,
})(AddTaskForm);
