import { PageCard } from '@/components';
import { routes } from '@/utils/constants';

import styles from './pagesList.module.css';

export const PagesList = () => {
  const pages = [
    {
      title: 'Higher Order Component',
      link: routes.patterns.hoc,
    },
    {
      title: 'Render Props',
      link: routes.patterns.render,
    },
    {
      title: 'Compound Components',
      link: routes.patterns.compound,
    },
  ];

  return (
    <div className={styles.group}>
      {pages.map((page) => (
        <PageCard key={page.link} title={page.title} link={page.link} />
      ))}
    </div>
  );
};
