import React from 'react'
import styles from './Input.module.css'
import PropTypes from 'prop-types'

const Input = (props) => {

  const { label } = props
  const inputProps = {...props, label: undefined, children: undefined}

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}> {label} </label>
      <input {...inputProps} />
      {props.children}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
}


export default Input