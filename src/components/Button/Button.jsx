import styles from './Button.module.css';
function Button({type, text, onClick }) {
   
    return (
    
        <button type={type} className={styles.Button} onClick={onClick}>
          {text}
        </button>
      
    );
}
export default Button;