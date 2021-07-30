import { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import ContentHeader from "./components/MainContentHeader";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";
import FilterParams from "./components/SideBarFilterParams";
import TaskCard from "./components/TaskCard";
// import firebaseConfig from "./config/fbconfig";
import { getProjects } from "./components/actions";
// import { v4 as uuidv4 } from "uuid";

const DrugStocLogger = ({ tasks, getProjects, loading }) => {
  const [offset, setOffset] = useState(0);
  const [taskToRender, setTaskToRender] = useState([]);
  const [perPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);

  const getTaskPerPage = async () => {
    // const data = tasks
    const slice = await tasks.slice(offset, offset + perPage);
    const taskToRender = await slice.map((task, index) => (
      // index > 0 && index <= 5 &&
      <Fragment key={task.id}>
        <TaskCard tasksItem={task} />
      </Fragment>
    ));
    setTaskToRender(taskToRender);
    setPageCount(Math.ceil(tasks.length / perPage));
  };

  // const ref = firebaseConfig.firestore().collection("projects");
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  // const getTask = () => {
  //   ref
  // .where('owner', '==', currentUserId)
  // .where('title', '==', 'School1') // does not need index
  // .where('score', '<=', 10)    // needs index
  // .orderBy('owner', 'asc')
  //     .limit(6)
  //     .onSnapshot((querySnapshot) => {
  //       const tasks = [];
  //       querySnapshot.forEach((doc) => {
  //         tasks.push(doc.data());
  //       });
  //       console.log(tasks);
  //       setProjects(tasks);
  //     });
  // };

  useEffect(() => {
    getProjects();
    getTaskPerPage();
    // console.log(taskToRender);
    // eslint-disable-next-line
  }, [offset, taskToRender]);

  // const addNewTask = (task) => {
  //   ref
  //     .doc()
  //     .set(task)
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  //DELETE FUNCTION
  // function deleteTask(task) {
  //   console.log(task);
  //   ref
  //     .doc(task["taskPrice"])
  //     .delete(task["taskPrice"])
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  // EDIT FUNCTION
  // function editTask(updateTask) {
  // setLoading();
  //   ref
  //     .doc(updateTask.id)
  //     .update(updateTask)
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  if (loading || tasks.length <= 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div className="container-holder">
      <NavigationBar />
      <SearchBar />
      <section className="page_contentLayout">
        <FilterParams />
        <div style={{ width: "100%", marginTop: "30px" }}>
          <ContentHeader
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />

          <div>
            <p> Current</p>

            {/* {tasks?.map((task, index) => (
              <Fragment key={index}> */}
            {/* {index === 0 && <TaskCard tasksItem={task} />} */}
            {taskToRender}
            <div style={{ marginTop: "20px" }}>
              {/* <p> Next</p> 
                  {taskToRender?.map((task, index) => (
              <Fragment key={index}> *
                  {index > 0 && index <= 5 && <TaskCard tasksItem={task} />} */}
            </div>
            {/* </Fragment>
             ))} */}
          </div>
        </div>
      </section>
    </div>
  );
};
const mapStateToProps = (state) => ({
  tasks: state.tasks,
  loading: state.loading,
});

export default connect(mapStateToProps, { getProjects })(DrugStocLogger);
