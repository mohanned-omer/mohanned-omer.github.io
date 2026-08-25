import React from 'react';
function App() {
  return (
    <main className="coming-soon">
      <div className="coming-soon__frame" aria-hidden="true" />

      <section className="coming-soon__content" aria-labelledby="coming-soon-title">
        <p className="coming-soon__eyebrow">Mohanned Omer</p>

        <div className="coming-soon__rule" />

        <h1 id="coming-soon-title">Coming soon.</h1>
        <p className="coming-soon__message">
          I&rsquo;m making a few final adjustments to this space.
          <br />
          The site will be back online shortly.
        </p>

        <div className="coming-soon__status" role="status">
          <span className="coming-soon__status-dot" aria-hidden="true" />
          Work in progress
        </div>
      </section>

      <p className="coming-soon__footer">mohanned-omer.com</p>
    </main>
  );
}

export default App;
