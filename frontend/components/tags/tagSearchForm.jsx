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

  function duplicateArray(array) {
    // deep dupes objects
    let ans = [];
    for (let i = 0; i < array.length; i++) {
      let newObject = merge({}, array[i]);
      ans.push(newObject);
    }

    return ans;
  }

  function sortTags(tags) {
    let newTags = duplicateArray(tags);
    let sorted = false;

    while (!sorted) {
      sorted = true;
      // bubble sort
      for (let i = 0; i < newTags.length - 1; i++) {
        let current = newTags[i];
        let next = newTags[i + 1];
        if (current.name.toUpperCase() > next.name.toUpperCase()) {
          // Swaps if first element is after second in alphabet
          sorted = false;
          [newTags[i], newTags[i + 1]] = [newTags[i + 1], newTags[i]];
        }
      }
    }
    return newTags;
  }

  if (!props.tags.length) return null;

  let tags = sortTags(props.tags);

  tags = tags.filter((tag) =>
    tag.name.toUpperCase().includes(search.toUpperCase())
  );
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
