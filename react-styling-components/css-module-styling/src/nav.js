import React from 'react'
import stylable from 'react-styleable'

import css from './nav.css'

const { func, bool } = React.PropTypes;

const getPrevLastName = (props) => {
    return props.hasPrevious ? props.css.prev : props.css.prevHidden
};

const getNextLastName = (props) => {
    return props.hasNext ? props.css.next : props.css.nextHidden
};

function Nav(props) {
  return (
    <div className={props.css.root}>
      <button className={getPrevLastName(props)} onClick={props.onPrevious}>&#10094;</button>
      <button className={getNextLastName(props)} onClick={props.onNext}>&#10095;</button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
};

export default stylable(css)(Nav)