import React, {useCallback} from 'react'
import styles from './BarcodeInput.module.css'
import PropTypes from 'prop-types'

const BarcodeInput = (props) => {

  const onChangeFromProps = props.onChange
  const onChange = useCallback(
    (ev) => {
      onChangeFromProps(ev.target.value)
    },
    [onChangeFromProps],
  )

  return (
    <div className={styles.barcodeInput}>
      <input type='number' onChange={onChange}/>
    </div>
  )
}

BarcodeInput.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default BarcodeInput
