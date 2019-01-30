import React, { Component } from 'react'
import places from 'places.js'
import connect from './PlacesConnector'
// Styles
import './style.scss'

class AutoComplete extends Component {
  constructor(props) {
    super(props)
    this.placesInput = React.createRef()
  }

  state = {
    query: ''
  }

  componentDidMount = () => {
    const { defaultRefinement, refine } = this.props
    const autocomplete = places({
      container: this.placesInput.current
      // Algolia Places options
    })

    autocomplete.on('change', event => {
      refine(event.suggestion.latlng)

      return this.setState({ query: event.suggestion })
    })

    autocomplete.on('clear', () => {
      refine(defaultRefinement)

      return this.setState({ query: '' })
    })
  }

  render() {
    const { handleClick, placeholder } = this.props
    const { query } = this.state

    return (
      <div className="search-master">
        <div className="ui action fluid left input">
          <input ref={this.placesInput} type="text" placeholder={placeholder} />
          <button
            onClick={() => handleClick(query)}
            type="button"
            className="go ui vertical animated button"
          >
            <div className="visible content">Buscar</div>
            <div className="hidden content">Vai!</div>
          </button>
        </div>
      </div>
    )
  }
}

export default connect(AutoComplete)
