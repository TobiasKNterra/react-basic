import styles from "./CustomThemeButton.module.css";

interface CustomButtonProps {
  type: "primary" | "secondary" | "tertiary";
  text: string;
  onClick?: () => void;
}

export default function CustomThemeButton(props: CustomButtonProps) {
  return (
    <button className={styles[props.type]} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
