import React, {useCallback} from 'react'
import styles from './CodeInput.module.css'
import PropTypes from 'prop-types'
import Input from '../Input/Input'

const max = 19

const CodeInput = (props) => {

  const onChangeFromProps = props.onChange
  const onChange = useCallback(
    (ev) => {
      const {value} = ev.target

      if(value.length <= max) {
        onChangeFromProps(value)
      }
    },
    [onChangeFromProps],
  )

  return (
    <div className={styles.codeInput}>
      <Input
        label='Number Input'
        type='number'
        onChange={onChange}
      />
    </div>
  )
}

CodeInput.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default CodeInput
