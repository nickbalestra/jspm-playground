import React from 'react'
import useSheet from 'react-jss'

const App = (props) => {
  const { classes } = props.sheet
  return (
    <h1 className={classes.red}>TADA!</h1>
  )
}

const styles = {
  red: {
    background: 'red',
    color: 'white'
  }
}

export default useSheet(App, styles)
