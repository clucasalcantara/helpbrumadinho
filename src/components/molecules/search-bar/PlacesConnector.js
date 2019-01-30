import { createConnector } from 'react-instantsearch-dom'

export default createConnector({
  displayName: 'wwcoffee-places',

  getProvidedProps() {
    return {}
  },

  refine(props, searchState, nextValue) {
    return {
      ...searchState,
      aroundLatLng: nextValue,
      boundingBox: {}
    }
  }
})
