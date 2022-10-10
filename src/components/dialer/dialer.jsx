import "./styles.css";
import Dial from "../dial/dial";
import * as React from "react";

const Dialer = (props) => {
  const getButtons = React.useCallback(() => {
    const buttons = [];
    for (let i = 6; i >= 0; i--) {
      if (i !== 0) {
        buttons.push(<Dial {...props} key={i} value={i} />);
      } else {
        buttons.push(<Dial {...props} key={i} value={i} />);
      }
    }
    return buttons;
  }, [props]);
  return <div className="dialer">{getButtons()}</div>;
};

export default Dialer;
