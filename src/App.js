import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import ContentHeader from "./components/MainContentHeader";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";
import FilterParams from "./components/SideBarFilterParams";
import TaskCard from "./components/TaskCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import firebaseConfig from "./config/fbconfig";
import { getProjects } from "./components/actions";
// import { v4 as uuidv4 } from "uuid";

const DrugStocLogger = ({ tasks, getProjects, loading }) => {
  // const [offset, setOffset] = useState(0);
  // const [taskToRender, setTaskToRender] = useState([]);
  // const [perPage] = useState(6);
  // const [pageCount, setPageCount] = useState(0);

  // const getTaskPerPage = async () => {
  //   const slice = await tasks.slice(offset, offset + perPage);
  //   const taskToRender = await slice.map((task, index) => (
  //     <Fragment key={index}>
  //       <TaskCard tasksItem={task} />
  //     </Fragment>
  //   ));
  //   setTaskToRender(taskToRender);
  //   setPageCount(Math.ceil(tasks.length / perPage));
  // };

  // const ref = firebaseConfig.firestore().collection("taskProjects");
  // const handlePageClick = (e) => {
  //   const selectedPage = e.selected;
  //   setOffset(selectedPage + 1);
  // };

  useEffect(() => {
    getProjects();
    // getTaskPerPage();
    // eslint-disable-next-line
  }, [offset]);

  return (
    <div className="container-holder">
      <NavigationBar />
      <SearchBar />
      <section className="page_contentLayout">
        <FilterParams />
        <div style={{ width: "100%", marginTop: "30px" }}>
          <ContentHeader />

          <div>
            <p> Current</p>
            {tasks.length === 0 ? (
              <SkeletonTheme color="#f9f9f9" highlightColor="#fff">
                <Skeleton count={6} height={150} width="maxContent" />
              </SkeletonTheme>
            ) : null}
            {tasks?.map((task, index) => (
              <Fragment key={index}>
                {<TaskCard tasksItem={task} />}

                <div style={{ marginTop: "20px" }}>
                  {/* <p> Next</p> 
                  {taskToRender?.map((task, index) => (
              <Fragment key={index}> *
                  {index > 0 && index <= 5 && <TaskCard tasksItem={task} />} */}
                </div>
              </Fragment>
            ))}
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
