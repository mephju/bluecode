import React from 'react'
import styles from './Bar.module.css'
import PropTypes from 'prop-types'

const buildClassName = digit => {
  const barClassName = `bar${digit}`
  return `${styles.bar} ${styles[barClassName]}`
}

const Bar = ({digit, color}) => {

  const className = buildClassName(digit)
  const style = { backgroundColor: color }

  return (
    <div className={className} style={style}>
    </div>
  )
}

Bar.propTypes = {
  color: PropTypes.string.isRequired,
  digit: PropTypes.number.isRequired,
}

export default Bar
