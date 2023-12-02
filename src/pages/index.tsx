import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.header)} >
      <div className={clsx('container', styles.container)}>
        <div>
          <h1 className={clsx('hero__title', styles.hero__title)}><Translate>A RAY OF SUNSHINE</Translate></h1>
          <h2><Translate>Here you can find some gadgets</Translate></h2>
          <p className="hero__subtitle">https://{siteConfig.tagline}</p>
        </div>
        <div className={styles.headerImg}><img src="img/banner.svg" alt="banner"/></div>
      </div>
    </header>
  );
}
function PCalculator() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={clsx('hero', styles.PCalculator)} >
      <div className={clsx('container', styles.container)}>
        <div className={styles.PCalculatorImg}><img src="img/PCalculator.svg" alt="PCalculator"/></div>
        <div  className={styles.PCalculatorBody}>
          <h1 className={clsx('hero__title')}>PCalculator</h1>
          <h2><Translate>A simple calculator that supports addition, subtraction, multiplication and division.</Translate></h2>
          <p className="hero__subtitle">
            <Link className="button button--secondary" to="/docs/RCalculator">
              <Translate>Get Started</Translate>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
function HomepageFooter() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={clsx('hero', styles.heroBanner)} >
      <div className="container">
        <h1 className={clsx('hero__title')}>ConvertChineseCharacters</h1>
        <h2><Translate>Sublime text Chinese character and Unicode conversion plugin</Translate></h2>
        <p className="hero__subtitle"><Translate>It allowing you to convert your .js, .json, and .css files.</Translate></p>
        <div className={styles.buttons}>
          <Link className="button button--secondary" to="/docs/ConvertChineseCharacters">
            <Translate>Get Started</Translate>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        message: "A RAY OF SUNSHINE",
        description: 'The homepage title',
      })}
      description="Hi! I’m Leibniz Li. I live in the Netherlands, and I’m the guy who manages this blog.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <PCalculator />
      {/*<HomepageFooter />*/}
    </Layout>
  );
}
