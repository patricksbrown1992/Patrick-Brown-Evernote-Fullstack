import React, { useState, useEffect } from "react";
import UsernameFormLeft from "../username/usernameLeftContainer";
import { Redirect, Link } from "react-router-dom";
import { merge } from "lodash";

const TagIndexForm = (props) => {
  useEffect(() => {
    props.removeTriage();
    props.getTags(props.user).then(() => props.getTaggings(props.user));
    return () => {
      props.clearTags();
    };
  }, []);

  const [selected, updateSelected] = useState(() => {
    return false;
  });

  const [search, updateSearch] = useState(() => {
    return "";
  });

  function handleTagClickTriage(entity) {
    return (e) => {
      e.preventDefault();
      updateSelected(entity);
      props.receiveTriage(entity);
    };
  }

  function handleClickNewTag(e) {
    e.preventDefault();
    props.addTag(props.user);
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

  function sortTags(tags) {
    let newTags = tags.map((tag) => tag);
    newTags = newTags.sort(comparison);
    for (let i = 0; i < newTags.length; i++) {
      if (i === 0) {
        newTags[i].duplicate = false;
      } else {
        if (
          newTags[i].name[0].toUpperCase() ===
          newTags[i - 1].name[0].toUpperCase()
        ) {
          newTags[i].duplicate = true;
        } else {
          newTags[i].duplicate = false;
        }
      }
    }
    return newTags;
  }

  function handleClickDropDown(entity) {
    return (e) => {
      e.preventDefault();
      props.tagDropDown(entity);
    };
  }

  // first render or no tags
  if (props.search.length > 0) return <Redirect to="/allnotes" />;

  if (selected) return <Redirect to="/allnotes" />;

  let tags = props.tags.filter((tag) =>
    tag.name.toUpperCase().includes(search.toUpperCase())
  );

  tags = sortTags(tags);

  tags = tags.map((tag) => {
    if (tag.duplicate) {
      // if tag starts with same letter as one before it
      return (
        <li key={tag.id}>
          <div className="tag-name">
            <button
              className="tag-triage-redirect-button"
              onClick={handleTagClickTriage(tag)}
            >
              {tag.name}
            </button>
            <button
              onClick={handleClickDropDown(tag)}
              className="chevron-down-button"
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </li>
      );
    } else {
      return (
        <li key={tag.id}>
          <div className="tag-index-intial">{tag.name[0].toUpperCase()}</div>
          <div className="tag-name">
            <button
              className="tag-triage-redirect-button"
              onClick={handleTagClickTriage(tag)}
            >
              {tag.name}
            </button>
            <button
              onClick={handleClickDropDown(tag)}
              className="chevron-down-button"
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </li>
      );
    }
  });

  return (
    <div className="tag-index">
      <UsernameFormLeft />

      <div className="tag-index-right">
        <div className="tag-index-upper">
          <div className="tag-index-header">
            <h1>Tags</h1>
            <input
              placeholder="Find Tags..."
              type="text"
              onChange={(e) => updateSearch(e.target.value)}
            />
          </div>
          <div className="tag-index-add">
            <button onClick={handleClickNewTag} className="new-tag">
              <i className="fas fa-plus-circle"></i> New Tag
            </button>
          </div>
        </div>

        <div className="tag-index-list">
          <ul>{tags}</ul>
        </div>
      </div>
    </div>
  );
};

export default TagIndexForm;
