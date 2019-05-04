import React, {useState} from 'react'
import styles from './BarcodeWidget.module.css'
import BarcodeDisplay from './BarcodeDisplay'
import BarcodeInput from './BarcodeInput'

const BarcodeWidget = (props) => {

  const [barcode, setBarcode] = useState('')

  return (
    <div className={styles.barcodeWidget}>
      <BarcodeInput onChange={setBarcode} />
      <BarcodeDisplay barcode={barcode} />
    </div>
  )
}

BarcodeWidget.propTypes = {
}

export default BarcodeWidget
