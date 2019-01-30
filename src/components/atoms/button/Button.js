import React from 'react'
import PropTypes, { oneOf } from 'prop-types'
import { Button as Btn } from 'semantic-ui-react'

const Button = ({ text, handleClick, className, children }) => (
  <Btn
    content={text}
    onClick={handleClick}
    className={children ? className : `ui primary button ${className}`}
  >
    {children}
  </Btn>
)

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  className: PropTypes.string,
  children: oneOf([PropTypes.element, PropTypes.array])
}

Button.defaultProps = {
  handleClick: () => {},
  text: undefined,
  className: '',
  children: undefined
}

export default Button
