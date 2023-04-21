import React from "react";
import styled from "styled-components";

const Modal = ({ children, title, show, onClose }) => {
  return (
    <>
      {show && <BlurModal onClick={onClose}></BlurModal>}
      {show && (
        <FixedModal>
          {title && <h3>{title}</h3>}
          {children}
        </FixedModal>
      )}
    </>
  );
};

const BlurModal = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const FixedModal = styled.div`
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 1rem;
  background: rgb(24, 24, 24);
  color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export default Modal;
