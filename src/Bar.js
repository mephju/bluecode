import React from 'react'
import styles from './Bar.module.css'
import PropTypes from 'prop-types'

const buildClassName = digit => {
  const barClassName = `bar${digit}`
  return `${styles.bar} ${styles[barClassName]}`
}

const Bar = ({digit}) => {
  console.log('Bar', digit)
  const className = buildClassName(digit)
  return (
    <div className={className}>
    </div>
  )
}

Bar.propTypes = {
  digit: PropTypes.number.isRequired,
}

export default Bar
