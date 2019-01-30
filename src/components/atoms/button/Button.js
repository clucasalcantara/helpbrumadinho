import React from 'react'
import PropTypes from 'prop-types'
import { Button as Btn } from 'semantic-ui-react'

const Button = ({ text, handleClick, className }) => (
  <Btn
    content={text}
    onClick={handleClick}
    className={`ui primary button ${className}`}
  />
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  className: PropTypes.string
}

Button.defaultProps = {
  handleClick: () => {},
  className: ''
}

export default Button
