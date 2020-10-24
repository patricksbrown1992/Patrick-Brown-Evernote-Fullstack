import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { merge } from "lodash";

const TagSearchForm = (props) => {
  const [search, updateSearch] = useState(() => {
    return "";
  });

  useEffect(() => {
    props.getTags(props.user);
  }, []);

  function clickItem(entity) {
    return (e) => {
      e.preventDefault();
      props.closeModal();
      props.removeTriage();
      props.updateTriage(entity);
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

  if (!props.tags.length) return null;

  let tags = props.tags.filter((tag) =>
    tag.name.toUpperCase().includes(search.toUpperCase())
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
        value={search}
        onChange={(e) => updateSearch(e.target.value)}
        placeholder="Find tags..."
      />
      <ul>{tags}</ul>
    </div>
  );
};

export default TagSearchForm;
