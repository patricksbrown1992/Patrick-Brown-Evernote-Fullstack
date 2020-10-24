import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { merge } from "lodash";

const NoteTagAddForm = (props) => {
  const [newTag, updateTag] = useState(() => {
    return "";
  });

  useEffect(() => {
    props.getTags(props.user);
  }, []);

  function clickItem(entity) {
    return (e) => {
      e.preventDefault();
      const tag_id = entity.id;
      const note_id = props.note;
      const user_id = props.user.id;
      const tagging = { note_id, tag_id, user_id };
      props.closeModal();
      props.createTagging(tagging);
    };
  }
  function comparison(a, b) {
    const aUpperName = a.name.toUpperCase();
    const bUpperName = b.name.toUpperCase();
    let comparison = 0;
    if (aUpperName > bUpperName) {
      comparison = 1;
    } else if (aUpperName < bUpperName) {
      comparison = -1;
    }
    return comparison;
  }

  if (props.tags.length < 1) return null;

  let tags = props.tags.filter((tag) =>
    tag.name.toUpperCase().includes(newTag.toUpperCase())
  );
  tags = tags.sort(comparison);
  tags = tags.map((tag) => {
    return (
      <li key={tag.id}>
        <div className="tag-name-item" onClick={clickItem(tag)}>
          {tag.name}
        </div>
      </li>
    );
  });

  return (
    <div className="tag-search-modal">
      <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      <input
        type="text"
        value={newTag}
        onChange={(e) => updateTag(e.target.value)}
        placeholder="Add a tag"
      />
      <ul>{tags}</ul>
    </div>
  );
};

export default NoteTagAddForm;
