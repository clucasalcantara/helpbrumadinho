import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

const getSize = size => {
  switch (size) {
    case 'small':
      return 'h4'
    case 'medium':
      return 'h3'
    case 'big':
      return 'h1'

    default:
      return 'h2'
  }
}
const Title = ({ content, size }) => (
  <Header as={getSize(size)}>{content}</Header>
)

Title.propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.string
}

Title.defaultProps = {
  size: null
}

export default Title
