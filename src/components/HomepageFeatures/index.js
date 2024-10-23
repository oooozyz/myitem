import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '项目介绍',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        巴拉巴拉巴拉
        巴拉巴拉
      </>
    ),
  },
  {
    title: '团队介绍',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        高梦雨 202100130061
        周昱含 202100130036
        房博宇 202100130168
        孙帅   202100130145
      </>
    ),
  },
  {
    title: '欢迎联系我们',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        联系邮箱 1055062046@qq.com
        联系电话 15161227513
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
        <Heading as="h3">{title}</Heading>
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
