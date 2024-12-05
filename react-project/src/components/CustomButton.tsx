import styles from "./CustomButton.module.css";
import {useState} from "react";

interface CustomButtonProps {
  buttonString: string;
  onClick: () => void;
}

export default function CustomButton(props: CustomButtonProps){
  return (
    <button className={styles.button} onClick={props.onClick} >{props.buttonString}</button>
  );
}