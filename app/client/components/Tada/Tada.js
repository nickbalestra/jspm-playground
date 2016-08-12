import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const App = () => (
  <h1 className={css(styles.red)}>TADA!</h1>
  )

const styles = StyleSheet.create({
  red: {
    background: 'red',
    color: 'white'
  }
})

export default App