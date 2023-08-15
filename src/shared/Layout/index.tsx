import { Outlet } from 'react-router-dom';

import styles from './layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};
