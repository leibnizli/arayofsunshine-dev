import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  href: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Helm',
    Svg: require('@site/static/img/Helm.svg').default,
    href: '/docs/Helm',
    description: (
      <>
        <Translate>Helm is a hosts file manager that runs on macOS. Helm enables you to edit hosts files and switch between them. Helm merges the original file and the active file into one file each time you switch. Write to the hosts file of the mac system.</Translate>
      </>
    ),
  },
  {
    title: 'WebFont',
    Svg: require('@site/static/img/WebFont.svg').default,
    href: '/docs/WebFont',
    description: (
      <>
        <Translate>WebFont is a font manipulation application that supports macOS. It can export specific glyphs to SVG, PDF and PNG files. The color and size of the output can be set in the preferences.</Translate>
      </>
    ),
  },
  {
    title: 'RGB',
    Svg: require('@site/static/img/RGB.svg').default,
    href: '/docs/RGB',
    description: (
      <>
        <Translate>A color picking app that supports macOS and can pick colors anywhere on the screen.</Translate>
      </>
    ),
  },
];

function Feature({title, Svg, href, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <Link to={href}>
            {title}
          </Link>
        </h3>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
