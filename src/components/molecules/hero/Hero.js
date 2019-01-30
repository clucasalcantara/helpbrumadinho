import React from 'react'
import { string } from 'prop-types'
import SearchBar from '../search-bar'

const Hero = ({ headline, placeholder }) => (
  <section className="ui vertical center aligned segment hb-hero">
    <div className="ui text container">
      <h1 className="ui header">{headline}</h1>
      <SearchBar placeholder={placeholder} />
    </div>
  </section>
)

Hero.propTypes = {
  headline: string
}

Hero.defaultProps = {
  headline: 'Headline'
}

export default Hero
