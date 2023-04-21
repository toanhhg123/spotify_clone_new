import React, { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";

const AddList = ({ list, handleSubmit, show, onClose }) => {
  const [selected, setSelected] = useState(list[0]?._id);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(selected);
  };
  return (
    <Modal show={show} onClose={onClose}>
      <FormAddList onSubmit={handleSubmitForm}>
        <select onChange={(e) => setSelected(e.target.value)}>
          {list.map((x) => (
            <option key={x._id} value={x._id}>
              {x.name}
            </option>
          ))}
        </select>
        <button>Add</button>
      </FormAddList>
    </Modal>
  );
};

const FormAddList = styled.form`
  display: flex;
  gap: 10px;
  select {
    background-color: hsla(0, 0%, 100%, 0.1);
    border: 5px;
    color: hsla(0, 0%, 100%, 0.7);
    height: 40px;
    opacity: 1;
    padding: 8px 32px;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    flex-grow: 1;
  }
  button {
    background-color: #2cb557;
    display: block;
    border: none;
    border-radius: 2px;
    text-align: center;
    padding: 10px;
    font-weight: 600px;
    font-weight: 600;
    cursor: pointer;
  }
`;
export default AddList;
