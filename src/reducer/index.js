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
} from "../components/actions/types";

const initState = {
  loading: false,
  current: null,
  tasks: [],

  experts: [
    {
      id: 2,
      fullName: "Sam Smith",
    },
    {
      fullName: "Akeem shittu",

      id: 5,
    },
    {
      fullName: "Allen Adekunle",

      id: 6,
    },
    {
      fullName: "Kareem tolani",

      id: 7,
    },
    {
      fullName: "Akeem Trump",

      id: 8,
    },
  ],
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      console.log(action.payload);
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        loading: false,
      };
    case UPDATE_TASK:
      return {
        ...state,
        current: action.payload,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        loading: false,
      };
    case CLEAR_CURRENT:
      // console.log("cleared");
      return {
        ...state,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case NEXT_PAGE:
      console.log("werww");
      return {
        ...state,
        tasks: action.payload,
      };
    case SEARCH_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case TASK_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
