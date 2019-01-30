import React, { Suspense } from 'react'
import { oneOfType, element, array } from 'prop-types'

const Loadable = ({ children, loadingContent }) => (
  <Suspense fallback={loadingContent}>{children}</Suspense>
)

Loadable.propTypes = {
  loadingContent: element,
  children: oneOfType([element, array]).isRequired
}

Loadable.defaultProps = {
  loadingContent: <div>Loading...</div>
}

export default Loadable
