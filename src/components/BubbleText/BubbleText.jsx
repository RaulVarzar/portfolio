import styles from "./bubble.module.css";

const BubbleText = ({ text }) => {
  return (
    <div className="tracking-widest transition duration-300">
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </div>
  );
};

export default BubbleText;
