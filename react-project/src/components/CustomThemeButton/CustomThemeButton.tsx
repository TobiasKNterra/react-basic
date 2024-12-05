import styles from "./CustomThemeButton.module.css";

interface CustomThemeButtonProps {
  text: string;
  onClick?: () => void;
  type: "primary" | "secondary" | "tertiary";
}

export default function CustomThemeButton(props: CustomThemeButtonProps) {
  return <button onClick={props.onClick} className={styles[props.type]}>{props.text}</button>
}

