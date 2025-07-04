import { HeadTitleStyle } from "./HeadTitle.styled";
import PropTypes from "prop-types";

const HeadTitle = ({ children }) => {
  return <HeadTitleStyle>{children}</HeadTitleStyle>;
};
export default HeadTitle;

HeadTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
