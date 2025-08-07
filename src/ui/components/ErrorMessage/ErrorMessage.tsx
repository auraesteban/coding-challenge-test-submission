import styles from "../../../App.module.css";

interface ErrorMessageProps {
  children: React.ReactNode;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return <div className={styles.error}>{children}</div>;
}
