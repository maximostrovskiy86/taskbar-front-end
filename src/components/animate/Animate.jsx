import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const Animate = ({ children, nodeRef, show, className }) => {
  return (
    <CSSTransition
      in={show}
      nodeRef={nodeRef}
      timeout={300}
      unmountOnExit
      classNames={className}
    >
      {children}
    </CSSTransition>
  );
};

export default Animate;

Animate.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  className: PropTypes.string,
  nodeRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
