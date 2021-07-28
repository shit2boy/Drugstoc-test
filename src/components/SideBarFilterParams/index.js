import styles from "./styles.module.css";
const FilterParams = () => {
  return (
    <div className={styles.sidebar_container}>
      <p>Tags</p>
      <div className={styles.checkbar}>
        <input type="checkbox" />
        <label for="myCheck">Checkbox</label>
      </div>
      <p>Task Price Range</p>
      <div className={styles.checkbar}>
        <input type="checkbox" />
        <label for="myCheck">Checkbox</label>
      </div>
    </div>
  );
};

export default FilterParams;
