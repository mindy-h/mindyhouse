import React from 'react'
import './ReadMe.css'

export default function ReadMe() {
  return (
    <div className="readme-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to<br />
            the Martech<br />
            component library
          </h1>
          <p className="hero-description">
            This library is a <strong>shared foundation for web experiences</strong> that are fast, consistent, and development-ready while leaving room for each brand's unique voice and creativity.
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">🧱</div>
            <h3>Build smarter</h3>
            <p>Reuse tested components and patterns.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Collaborate efficiently</h3>
            <p>Design in a way that's accessible and development-ready.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Contribute back</h3>
            <p>Great ideas can become reusable patterns for all brands.</p>
          </div>
        </div>
      </section>

      {/* How This Works Section */}
      <section className="how-works-section">
        <h2>How this works</h2>
        <div className="how-works-content">
          <div className="column">
            <h3>Agency</h3>
            <ul>
              <li>Start from Martech patterns and components</li>
              <li>Apply brand theming (fonts, colors, and creative tone).</li>
              <li>Collaborate early for feasibility checks.</li>
              <li>Propose reusable ideas back to Martech for review.</li>
            </ul>
          </div>
          <div className="column">
            <h3>Martech</h3>
            <ul>
              <li>Maintain the shared design library.</li>
              <li>Review new submissions for reusability.</li>
              <li>Provide component documentation and dev alignment.</li>
              <li>Support creative extension through theming.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Library Structure Section */}
      <section className="library-section">
        <div className="library-table">
          <div className="table-row">
            <div className="table-cell icon-cell">
              <span className="icon">🧩</span>
              <span className="label">Components</span>
            </div>
            <div className="table-cell description-cell">
              <p>Core building blocks from our internal design system (Hexa).</p>
            </div>
            <div className="table-cell examples-cell">
              <p>Buttons, Carousels, Cards</p>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell icon-cell">
              <span className="icon">🧭</span>
              <span className="label">Patterns</span>
            </div>
            <div className="table-cell description-cell">
              <p>Predefined layouts that combine multiple components for key flows.</p>
            </div>
            <div className="table-cell examples-cell">
              <p>Product Locator, Age Gate, Forms</p>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell icon-cell">
              <span className="icon">🎨</span>
              <span className="label">Brand Layer</span>
            </div>
            <div className="table-cell description-cell">
              <p>Where your creativity lives — colors, typography, imagery, and voice</p>
            </div>
            <div className="table-cell examples-cell">
              <p>Brand-specific theming</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}