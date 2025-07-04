import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { PopUpPickerContent, BackDrop } from "./PopUpPicker.styled";

const PopUpPicker = ({ children, onClose, ref }) => {
  useEffect(() => {
    window.addEventListener("keydown", onCLoseModal);

    return () => {
      window.removeEventListener("keydown", onCLoseModal);
    };
  });

  const onCLoseModal = (e) => {
    if (e.code === "Escape" || e.code === "Enter") {
      onClose();
    }
  };

  const onOverlayClose = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <>
      <BackDrop onClick={onOverlayClose} />
      <PopUpPickerContent ref={ref}>{children}</PopUpPickerContent>
    </>
  );
};

export default PopUpPicker;

PopUpPicker.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  ref: PropTypes.node.isRequired,
};
