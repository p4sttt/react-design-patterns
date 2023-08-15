import { PagesList } from '@/widgets';

import styles from './home.module.css';

export const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Design Pattern For React ⚛️</h1>
      <PagesList />
    </div>
  );
};
