import styles from './Head.module.scss';

const Head = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>My tasks</h1>
      <p>You can organize, track and complete your assigments efficiently</p>
    </div>
  );
};

export default Head;
