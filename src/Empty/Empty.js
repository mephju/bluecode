import React from 'react'
import styles from './Empty.module.css'
import PropTypes from 'prop-types'

const Empty = (props) => {

  return (
    <div className={styles.empty}>
      {props.children}
    </div>
  )
}

Empty.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Empty
