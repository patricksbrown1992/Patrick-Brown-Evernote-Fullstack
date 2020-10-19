import React from "react";

const TagDeleteForm = (props) => {
  function handleSubmit(e) {
    e.preventDefault();
    props.deleteTag(props.tag).then(() => props.closeModal());
  }

  return (
    <div className="tag-delete-modal">
      <div className="tag-delete-modal-top">
        <h1>Delete Tag?</h1>
        <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      </div>
      <h3>
        Are you sure you want to delete the "{props.tag.name}" tag? This tag
        will be removed from all notes.
      </h3>

      <button onClick={handleSubmit}>Delete</button>
    </div>
  );
};

export default TagDeleteForm;
