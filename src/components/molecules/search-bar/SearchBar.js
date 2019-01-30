import React, { useState } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'
import { func } from 'prop-types'
// UI Elements
import AutoComplete from './AutoComplete'

const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
)

searchClient.initIndex('wwcoffee-places')

const SearchBar = ({ handleSelect, placeholder }) => {
  const [query, setQuery] = useState('')

  const handleSuggestion = (_, { suggestion = {} } = {}) => {
    if (suggestion.length) {
      return setQuery(suggestion.name)
    }

    return setQuery('')
  }

  const handleSubmitQuery = value => {
    console.info('Request search object', value)

    return handleSelect ? handleSelect(value) : null
  }

  return (
    <div className="container">
      <InstantSearch indexName="wwcoffee-places" searchClient={searchClient}>
        <AutoComplete
          value={query}
          handleClick={handleSubmitQuery}
          placeholder={placeholder}
          onSuggestionSelected={handleSuggestion}
          onSuggestionCleared={handleSuggestion}
          defaultRefinement={{
            lat: 37.7793,
            lng: -122.419
          }}
        />
      </InstantSearch>
    </div>
  )
}

SearchBar.propTypes = {
  handleSelect: func
}

SearchBar.defaultProps = {
  handleSelect: query => console.info('Search Query: ', query)
}

export default SearchBar
