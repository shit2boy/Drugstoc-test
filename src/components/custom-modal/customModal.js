import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./customModal.module.css";

const Modal = ({ Open, children, onClose, setBackgroungColor }) => {
  if (!Open) return null;

  return ReactDOM.createPortal(
    <Fragment>
      <div
        className={styles.modal_overlay}
        onClick={onClose ? onClose : null}
      />
      <div
        className={`${setBackgroungColor ? styles.setBgColor : null} ${
          styles.modal_container
        }`}
      >
        {onClose && (
          <div className={styles.close_btn} onClick={onClose}>
            <p className={styles.fa_times}>X</p>
          </div>
        )}
        {children}
      </div>
    </Fragment>,
    document.getElementById("modalPortal")
  );
};

export default Modal;
