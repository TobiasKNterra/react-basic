import { useState } from "react";
import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  buttonText: string;
  onClick: () => void;
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
}
