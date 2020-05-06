import React from "react";
import styles from "./modal.module.css";

const Modal = ({ largeImageURL, onClose }) => (
  <div className={styles.Overlay} onClick={onClose} role="presentation">
    <div className={styles.Modal}>
      <img src={largeImageURL} alt="" width="840" height="627" />
    </div>
  </div>
);

export default Modal;
