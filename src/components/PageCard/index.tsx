import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './pageCard.module.css';

interface PageCardProps {
  link: string;
  title: string;
}

export const PageCard: FC<PageCardProps> = ({
  title,
  link,
}) => {
  return (
    <Link to={link} className={styles.box}>
      <p>{title}</p>
    </Link>
  );
};
