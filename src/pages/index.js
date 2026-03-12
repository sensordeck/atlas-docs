import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Atlas Developer Documentation"
      description="Deterministic Sensor Infrastructure for Robotics">
      <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>Atlas Developer Documentation</h1>
        <p>Deterministic Sensor Infrastructure for Robotics</p>
        <p>Fusion Hardware + DSIL SDK + ROS2 Integration</p>
        <div style={{ marginTop: '2rem' }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/index">
            Enter Documentation
          </Link>
        </div>
      </main>
    </Layout>
  );
}
