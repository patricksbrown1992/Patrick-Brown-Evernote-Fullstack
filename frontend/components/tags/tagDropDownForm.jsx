import React from "react";

const TagDropDownForm = (props) => {
  function handleSubmitEditTag(e) {
    e.preventDefault();
    props.editTagModal(props.tag);
  }

  function handleSubmitDeleteTag(e) {
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
        <br />
        <span onClick={handleSubmitDeleteTag}>
          <button>Delete Tag...</button>
        </span>
        <br />
        <span onClick={handleSubmitEditTag}>
          <button>Rename Tag...</button>
        </span>
        <br />
        <span onClick={handleDeleteAll}>
          <button>Remove tag from all notes...</button>
        </span>
      </div>
    </div>
  );
};

export default TagDropDownForm;
