import styles from "./style.module.css";
const SearchBar = () => {
  return (
    <div className={styles.search_container}>
      <form className={styles.form}>
        <span className={styles.search_icon}>
          <i className="fa fa-search"></i>
        </span>
        <input
          className={styles.search_input}
          type="serach"
          placeholder="Search Keyword"
          name="search"
        />
        <div>
          <p className={styles.sort_by}>
            Sort by{" "}
            <span>
              <i className="fa fa-align-left" />{" "}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
