import "./styles.css";

const Elevator = (props) => {
  const { isOpen, liftPosn } = props;
  const floor = 7 - liftPosn;
  const elevStyles = {
    top: `${floor * 100 + 60}px`,
  };
  const compClass = `flexRow elev ${isOpen ? "open" : "close"}`;
  return (
    <div style={elevStyles} className={compClass}>
      <div className="gate  " />
      <div className="gate  " />
    </div>
  );
};

export default Elevator;
