import {
  GET_ALL_TASKS,
  SET_LOADING,
  UPDATE_TASK,
  SEARCH_TASK,
  ADD_TASK,
  CLEAR_CURRENT,
  SET_CURRENT,
  TASK_ERROR,
  DELETE_TASK,
} from "./types";

import firebaseConfig from "../../config/fbconfig";

const ref = firebaseConfig.firestore().collection("projects");

export const getProjects = () => async (dispatch) => {
  try {
    setLoading();
    ref.get().then((item) => {
      dispatch({
        type: GET_ALL_TASKS,
        payload: item.docs.map((doc) => doc.data()),
      });
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: err,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

//add log

export const addNewTask = (task) => async (dispatch) => {
  try {
    setLoading();
    // const addNewTask = (task) => {
    ref
      .doc()
      .set(task)
      .catch((err) => {
        console.error(err);
      });
    // };

    dispatch({ type: ADD_TASK, payload: "Task Added" });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: err,
    });
  }
};

//Delete log

export const deleteTask = (id) => async (dispatch) => {
  try {
    setLoading();

    // function deleteTask(task) {
    ref
      .doc(id)
      .delete()
      .catch((err) => {
        console.error(err);
      });

    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: err,
    });
  }
};
export const editTask = (task) => async (dispatch) => {
  try {
    setLoading();
    // console.log("were");

    ref
      .doc(task.id)
      .update(task)
      .catch((err) => {
        console.error(err);
      });

    dispatch({
      type: UPDATE_TASK,
      payload: task,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: err,
    });
  }
};

export const setCurrent = (task) => {
  return {
    type: SET_CURRENT,
    payload: task,
  };
};
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const searchLog = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`http://localhost:5000/logs?q=${text}`);
    const data = await res.json();
    dispatch({
      type: SEARCH_TASK,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: err.response.statusText,
    });
  }
};
