import styles from './Button.module.css';
function Button() {
   
    return (
      <div className= {styles.buttonCenter}>
        <button type="button" className={styles.Button}>
          Load More
        </button>
      </div>
    );
}
export default Button;