import React, {Component, useCallback, useState} from 'react'
import styles from './Tile.module.css'
import PropTypes from 'prop-types'
import ThemeContext from '../ThemeContext';

class Tile extends Component {

  render() {

    return (
      <div className={styles.tile}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    )

  }

}

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
}

Tile.contextType = ThemeContext

export default Tile
