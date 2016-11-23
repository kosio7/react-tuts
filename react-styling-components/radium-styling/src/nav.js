import Radium from 'radium'
import React from 'react'

import styles from './nav-styles'

const { func, bool } = React.PropTypes;

const getPrevStyles = (props) => {
    return props.hasPrevious ? styles.prev : styles.prevHidden;
};

const getNextStyles = (props) => {
    return props.hasNext ? styles.next : styles.nextHidden;
};

const Nav = (props) => {
  return (
    <div style={styles.root}>
      <button key="prev" style={getPrevStyles(props)} onClick={props.onPrevious}>&#10094;</button>
      <button key="next" style={getNextStyles(props)} onClick={props.onNext}>&#10095;</button>
    </div>
  )
};

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
};

export default Radium(Nav)
