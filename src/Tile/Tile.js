import React from 'react'
import styles from './Tile.module.css'
import PropTypes from 'prop-types'

const Tile = props => {
  return (
    <div className={styles.tile}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
}

export default Tile
