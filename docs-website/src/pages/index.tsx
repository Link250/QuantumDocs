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
    // Delay initial height calculation slightly to ensure all elements are rendered
    setTimeout(() => adjustHeight(), 100);
    
    const adjustHeight = () => {
      if (!linkTreeRef.current) return;
      
      // Get viewport height
      const windowHeight = window.innerHeight;
      
      // Get position of the LinkTree from the top
      const linkTreeRect = linkTreeRef.current.getBoundingClientRect();
      const linkTreeTop = linkTreeRect.top + window.scrollY; // Account for scrolling
      
      // Get footer height (select the footer element appropriately)
      const footer = document.querySelector('footer');
      const footerHeight = footer ? footer.offsetHeight : 0;
      
      // Get the natural height of the content inside LinkTree (the buttons)
      const linksContainer = linkTreeRef.current.querySelector(`.${styles.verticalLinks}`);
      const contentHeight = linksContainer ? linksContainer.scrollHeight + 128 : 400; // Add padding
      
      // Calculate available height: viewport minus (navbar + top position + footer)
      const availableHeight = windowHeight - linkTreeTop - footerHeight;
      
      // Use the greater of: content height or available height
      const minHeight = Math.max(contentHeight, availableHeight);
      
      // Only update if there's a meaningful change to prevent recursive updates
      const currentHeight = parseInt(linkTreeRef.current.style.minHeight || '0');
      if (Math.abs(currentHeight - minHeight) > 0) {
        linkTreeRef.current.style.minHeight = `${minHeight}px`;
      }
    };
    
    // Adjust on window resize events
    window.addEventListener('resize', adjustHeight);
    
    // Don't adjust on scroll, as it can cause recursive issues
    // window.addEventListener('scroll', adjustHeight);
    
    return () => {
      window.removeEventListener('resize', adjustHeight);
      // window.removeEventListener('scroll', adjustHeight);
    };
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
