import styles from './Button.module.css';
function Button({type, text, onClick }) {
   
    return (
      <div className= {styles.buttonCenter}>
        <button type={type} className={styles.Button} onClick={onClick}>
          {text}
        </button>
      </div>
    );
}
export default Button;