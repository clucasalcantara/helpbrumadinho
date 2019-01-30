import React, { Fragment } from 'react'
// UI Elements
import {
  Header,
  Hero,
  Footer,
  Statistics,
  TypedText
} from 'components/molecules'
// Styles
import './style.scss'

const Understand = ({ baseContext: { config } }) => (
  <Fragment>
    <Header navItems={config.nav} />
    <Hero
      headline={config.headline}
      placeholder="Digite o nome da sua cidade..."
    />
    <div className="wwcontent">
      <Statistics />
      <TypedText config={config} />
    </div>
    <Footer />
  </Fragment>
)

export default Understand
