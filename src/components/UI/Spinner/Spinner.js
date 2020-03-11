import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./spinner.scss";

const propTypes = {
  /**
   * Specifies size as small | large for the spinner.
   * @type ('sm'|'lg')
   * @default ('md')
   */
  size: PropTypes.oneOf(["sm", "lg", "md"]),

  /**
   * Specifies the motion color
   * @default ('#DEDEDE')
   */
  color: PropTypes.string,

  /**
   * Specifies the circle color
   * @default ('#267CB2')
   */
  circleColor: PropTypes.string
};

const defaultProps = {
  size: "md",
  color: "#267CB2",
  circleColor: "#DEDEDE"
};

const spinnerClassprefix = "spinner";

const Spinner = props => {
  let { size, classes, color, circleColor, ...attributes } = props;

  const classList = classNames(
    "spinner",
    classes,
    size && `${spinnerClassprefix}-${size}`
  );

  let style = {};
  style["borderColor"] = circleColor;
  style["borderTopColor"] = color;

  return (
    <div className="spinner-wrapper">
      {props.children}
      <div className={classList} style={style}></div>
    </div>
  );
};

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
