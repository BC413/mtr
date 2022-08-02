import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简洁至上',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        以 Markdown 为中心的项目结构，使界面简洁明了。
      </>
    ),
  },
  {
    title: '高速下载',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        提供MTRmod高速下载节点，不再因网络苦苦等待。
      </>
    ),
  },
  {
    title: '用爱发电',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        由BC413发起的完全免费的文档站及下载站，不含任何商业广告！
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
