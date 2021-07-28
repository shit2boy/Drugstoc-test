import React from "react";
import styles from "./SelectInput.module.css";

const SelectInput = (
  { placeholder, handleChange, name, optItem, ...otherProps },
  props
) => {
  return (
    <div>
      <select className={styles.select} value={name} {...otherProps}>
        <option>{placeholder}</option>
        {optItem?.map((s) => (
          <option key={s} value={s} name={name}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
