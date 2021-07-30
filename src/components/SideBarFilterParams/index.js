import styles from "./styles.module.css";
const FilterParams = () => {
  return (
    <div className={styles.sidebar_container}>
      <p>Tags</p>
      <div className={styles.checkbar}>
        <input type="checkbox" value="Custom task" />
        <label htmlFor="myCheck">Custom task</label>
        <div>
          {" "}
          <input type="checkbox" value="Marketing & sale " />
          <label htmlFor="myCheck">Marketing & sale</label>
        </div>
        <div>
          <input type="checkbox" value="Integrations " />
          <label htmlFor="myCheck">Integrations</label>
        </div>
        <div>
          <input type="checkbox" value="Optimazation " />
          <label htmlFor="myCheck">Optimazation</label>
        </div>
        <div>
          <input type="checkbox" value="Deployment " />
          <label htmlFor="myCheck">Deployment</label>
        </div>
        <div>
          <input type="checkbox" value="Testing" />
          <label htmlFor="myCheck">Testing</label>
        </div>
      </div>
      <p>Task Price Range</p>
      <div className={styles.checkbar}>
        <input type="checkbox" />
        <label htmlFor="myCheck">Less than N100</label>
        <div>
          {" "}
          <input type="checkbox" />
          <label htmlFor="myCheck">N100 - N300</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="myCheck">N301 - N900</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="myCheck">Above N900</label>
        </div>
      </div>
    </div>
  );
};

export default FilterParams;
