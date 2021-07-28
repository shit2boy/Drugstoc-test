import "./App.css";
import ContentHeader from "./components/MainContentHeader";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";
import FilterParams from "./components/SideBarFilterParams";
import TaskCard from "./components/TaskCard";

const DrugStocLogger = () => {
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
            <TaskCard />
          </div>
          <div style={{ marginTop: "20px" }}>
            <p> Next</p>
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrugStocLogger;
