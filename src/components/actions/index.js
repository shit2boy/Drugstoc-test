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
  NEXT_PAGE,
} from "./types";

import firebaseConfig from "../../config/fbconfig";

// const ref = firebaseConfig.firestore().collection("projects");
const ref = firebaseConfig.firestore().collection("taskProjects");
export const getProjects = (sort) => async (dispatch) => {
  const sortPattern = sort || "asc";

  ref
    // .where('owner', '==', currentUserId)
    // .where('title', '==', 'School1') // does not need index
    // .where("taskPrice", "<=", 500) // needs index
    .orderBy("createdDate", sortPattern)
    // .orderBy("description", "asc")
    .limit(6)
    .onSnapshot((querySnapshot) => {
      const tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push(doc.data());
      });
      dispatch({
        type: GET_ALL_TASKS,
        payload: tasks,
      });
      // console.log(tasks);
    });
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
      .doc(task.id)
      .set(task)
      .then(() => getProjects())
      .catch((err) => {
        console.error(err);
      });
    // };
    // getProjects();
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
export const updateTask = (task, callBack) => async (dispatch) => {
  try {
    setLoading();
    // console.log("were");

    ref
      .doc(task.id)
      .update(task)
      .then(callBack("Task Updated"))
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

export const paginationQuery = () => async (dispatch) => {
  let first = ref.orderBy("description").limit(5);
  console.log("hjhhhhj");
  return first.get().then((documentSnapshots) => {
    let lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

    let next = ref
      .orderBy("description", "asc")
      .startAfter(lastVisible)
      .limit(5);
    dispatch({
      type: NEXT_PAGE,
      payload: next,
    });
  });
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
