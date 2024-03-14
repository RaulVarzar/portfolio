import styles from './bubble.module.css';

const BubbleText = ({ text }) => {
  return (
    <h2 className="tracking-widest transition duration-300">
      {text.split('').map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;
