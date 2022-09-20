import { useSelector } from "react-redux";
import React from "react";
import { connect } from "react-redux";

const Notification = (props) => {
  // const notification = useSelector((state) => state.notification);
  const notification = props.notification;

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  if (notification === null) {
    return null;
  }

  return <div style={style}>{notification}</div>;
};

// export default Notification;
const mapStateToProps = (state) => ({
  notification: state.notification,
});

export default connect(mapStateToProps, null)(Notification);
