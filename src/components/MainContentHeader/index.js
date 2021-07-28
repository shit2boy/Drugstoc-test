import styles from "./style.module.css";
const ContentHeader = () => {
  return (
    <div className={styles.main_content_header}>
      <div className={styles.header_items}>
        <p>Active Task (2)</p>
        <p> Completed (1)</p>
        <span>Archived (6)</span>
        <span>Closed (0)</span>
      </div>
      <div className={styles.pagination_button}>
        <span>Next</span> | <span>Prev</span>
      </div>
    </div>
  );
};

export default ContentHeader;
