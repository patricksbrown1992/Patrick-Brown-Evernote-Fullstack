import React, { useEffect } from "react";
import { merge } from "lodash";

const TagAllDeleteForm = (props) => {
  useEffect(() => {
    props.getTaggings(props.user);
  }, []);

  function handleClick(e) {
    e.preventDefault();
    props.closeModal();
    for (let i = 0; i < props.taggings.length; i++) {
      let tagging = props.taggings[i];
      if (tagging.tag_id === props.tag.id) {
        props.deleteTagging(tagging.id);
      }
    }
  }

  return (
    <div className="tag-all-delete-modal">
      <div className="tag-delete-modal-top">
        <h1>Remove Tag?</h1>
        <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      </div>
      <h3>
        Are you sure you want to remove the "{props.tag.name}" tag from all
        notes?
      </h3>

      <button onClick={handleClick}>Remove</button>
    </div>
  );
};

export default TagAllDeleteForm;
