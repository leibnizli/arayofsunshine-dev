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
    <header className={clsx('hero hero--primary', styles.heroBanner)} >
      <div className="container">
        <h1 className={clsx('hero__title', styles.hero__title)}><Translate>A SUNBEAM</Translate></h1>
        <h2><Translate>Here you can find some gadgets</Translate></h2>
        <p className="hero__subtitle">https://{siteConfig.tagline}</p>
      </div>
    </header>
  );
}
function HomepageFooter() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)} >
      <div className="container">
        <h1 className={clsx('hero__title', styles.hero__title)}>ConvertChineseCharacters</h1>
        <h2><Translate>Sublime text Chinese character and Unicode conversion plugin</Translate></h2>
        <p className="hero__subtitle"><Translate>It allowing you to convert your .js, .json, and .css files.</Translate></p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/ConvertChineseCharacters">
            <Translate>Get Started</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Hi! I’m Leibniz Li. I live in the Netherlands, and I’m the guy who manages this blog.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <HomepageFooter />
    </Layout>
  );
}
