import React, {useState} from 'react'
import styles from './App.module.css'
import ColorConfigWidget from './ColorConfigWidget/ColorConfigWidget'
import ThemeProvider from './ThemeProvider'
import BarcodeEditor from './BarcodeWidget/BarcodeEditor';
import toChecksum from './toChecksum';
import BarcodeDisplay from './BarcodeWidget/BarcodeDisplay';



function App() {

  const [code, setCode] = useState('')

  const checksum = toChecksum(code)

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <p>
          Barcode App for Bluecode
        </p>
      </header>

        <ThemeProvider>
          <section className={styles.content}>
            <ColorConfigWidget />
            <BarcodeEditor setCode={setCode} checksum={checksum} />
            <div>

              <BarcodeDisplay code={code} checksum={checksum} />
            </div>
          </section>
        </ThemeProvider>


    </div>
  )
}

export default App
