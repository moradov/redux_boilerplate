import React from 'react';
import { connect } from 'react-redux';
const Alert = ({ alert }) => {
  const setPositionStyle = (alert) => {
    if (alert) {
      let returnedStyle = {};
      //set position style
      if (alert.position && alert.position === 'top') {
        returnedStyle = {
          ...returnedStyle,
          top: 0,
        };
      } else if (
        (alert.position && alert.position === 'bottom') ||
        !alert.position
      ) {
        returnedStyle = {
          ...returnedStyle,
          bottom: 0,
        };
      }
      //set color style
      alert.color
        ? (returnedStyle = { ...returnedStyle, backGroundColor: alert.color })
        : (returnedStyle = { ...returnedStyle, backGroundColor: 'blue' });
      return returnedStyle;
    }
  };
  return (
    <>
      {alert && (
        <div
          style={{
            padding: '10px 10px',
            backgroundColor: alert.color ? alert.color : '#FFF',
            color: 'white',
            textAlign: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            ...setPositionStyle(),
          }}
        >
          {alert.message && typeof alert.message == 'string'
            ? alert.message
            : 'the operation is done'}
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  alert: state.posts.alert,
});
export default connect(mapStateToProps, null)(Alert);
