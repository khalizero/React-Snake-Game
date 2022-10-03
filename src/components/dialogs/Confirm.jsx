import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import "../../styles/Confirm.scss";

const Confirm = (props) => {
  const { title, buttons } = props;
  const {
    gameOver: { isOpen },
  } = useSelector((state) => state.snake);

  return (
    <>
      {isOpen && (
        <>
          <div className="overlay"></div>
          <div className="confirmDialog">
            <div className="titleWrapper">
              <p className="title">{title}</p>
            </div>
            <div className="buttonsWrapper">
              {buttons.map(({ type, text, onClick }) => (
                <button key={type + text} className={type} onClick={onClick}>
                  {text}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

Confirm.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["confirm", "cancel"]).isRequired,
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default Confirm;
