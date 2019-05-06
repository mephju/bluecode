import React, {useState} from 'react'
import styles from './App.module.css'
import ThemeEditor from './ThemeEditor/ThemeEditor'
import ThemeProvider from './ThemeProvider'
import BarcodeEditor from './BarcodeEditor/BarcodeEditor'
import toChecksum from './toChecksum';
import Barcode from './Barcode/Barcode'



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
            <ThemeEditor />
            <BarcodeEditor setCode={setCode} checksum={checksum} />
            <div>

              <Barcode code={code} checksum={checksum} />
            </div>
          </section>
        </ThemeProvider>


    </div>
  )
}

export default App
