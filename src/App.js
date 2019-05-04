import React from 'react'
import styles from './App.module.css'
import BarcodeWidget from './BarcodeWidget';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <section className={styles.content}>
        <BarcodeWidget />
      </section>


    </div>
  )
}

export default App
