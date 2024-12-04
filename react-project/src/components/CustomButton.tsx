import styles from "./CustomButton.module.css";

export default function CustomButton(){
  const buttonString:string = "Click me!";
  const bittePrinteEtwasAufDerKonsole = () => {
    console.log("Du hast mich geklickt!");
  }

  return (
    <button className={styles.button} onClick={ () => console.log("du hast mich geklickt")} >{buttonString}</button>
  );
}