import React from "react";

const TagDropDownForm = (props) => {
  function handleClickEditTag(e) {
    e.preventDefault();
    props.editTagModal(props.tag);
  }

  function handleClickDeleteTag(e) {
    e.preventDefault();
    props.deleteTagModal(props.tag);
  }

  function handleDeleteAll(e) {
    e.preventDefault();
    props.tagAllDelete(props.tag);
  }

  return (
    <div className="tag-drop-down-modal">
      <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      <div className="tag-drop-down-buttons">
        <button onClick={handleClickDeleteTag}>Delete Tag...</button>
        <button onClick={handleClickEditTag}>Rename Tag...</button>
        <button onClick={handleDeleteAll}>Remove tag from all notes...</button>
      </div>
    </div>
  );
};

export default TagDropDownForm;
