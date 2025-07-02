import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import BgEffect from './backgroundEffect';
import React from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function LinkTree() {
  const linkTreeRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const adjustHeight = () => {
      if (!linkTreeRef.current) return;
      
      const windowHeight = window.innerHeight;
      const linkTreeTop = linkTreeRef.current.getBoundingClientRect().top;
      const availableHeight = windowHeight - linkTreeTop;
      
      linkTreeRef.current.style.minHeight = `${availableHeight}px`;
    };
    
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    return () => window.removeEventListener('resize', adjustHeight);
  }, []);
  return (
    <header ref={linkTreeRef} className={clsx(styles.linkTree)}>
      <BgEffect />
      <div className={clsx("container", styles.verticalLinks)}>
        <Link 
          to="https://discord.gg/Va5VPev" 
          className={clsx("button", "button--primary", styles.largeButton)}
          target="_blank" 
          rel="noopener noreferrer"
        >Discord</Link>
        <Link 
          to="http://www.patreon.com/quantumlot" 
          className={clsx("button", "button--primary", styles.largeButton)}
          target="_blank" 
          rel="noopener noreferrer"
        >Patreon</Link>
        <Link 
          to="https://www.youtube.com/@quantumlot" 
          className={clsx("button", "button--primary", styles.largeButton)}
          target="_blank" 
          rel="noopener noreferrer"
        >YouTube</Link>
        <Link 
          to="https://github.com/Link250" 
          className={clsx("button", "button--primary", styles.largeButton)}
          target="_blank" 
          rel="noopener noreferrer"
        >GitHub</Link>
        <Link 
          to="https://x.com/QuantumHeroLoT" 
          className={clsx("button", "button--primary", styles.largeButton)}
          target="_blank" 
          rel="noopener noreferrer"
        >X / Twitter</Link>
        <Link 
          to="https://www.instagram.com/quantum_lot/" 
          className={clsx("button", "button--primary", styles.largeButton)}
          target="_blank" 
          rel="noopener noreferrer"
        >Instagram</Link>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation of all my Projects and more.">
      <HomepageHeader />
      <LinkTree />
    </Layout>
  );
}
