import React, { useEffect, useState } from "react";
import NoteIndexContainer from "../notes/noteIndexContainer";
import { Redirect } from "react-router-dom";
import LeftNav from "../username/usernameLeftContainer";
import { withRouter } from "react-router-dom";

const NotebookShowForm = (props) => {
  const [loaded, updateLoaded] = useState(() => {
    return false;
  });

  useEffect(() => {
    props.clearNotes();
    props
      .getNotebooks(props.user)
      .then(() => props.getTags(props.user))
      .then(() => updateLoaded(true));

    return () => {
      props.clearTags();
      props.removeTriage();
    };
  }, []);

  function handleClickDropDown(e) {
    e.preventDefault();
    props.notebookDropDown(props.notebooks[props.match.params.notebook_id]);
  }

  function handleTagModal(e) {
    e.preventDefault();
    props.tagSearchDropDown();
  }

  function handleRemoveTriage(e) {
    e.preventDefault();
    props.removeTriage();
  }

  {
    if (props.search.length > 0) return <Redirect to="/allnotes" />;
  }
  {
    if (!loaded) return null;
  }

  {
    if (!props.notebooks[props.match.params.notebook_id])
      return <Redirect to="/notebooks" />;
  }

  return (
    <>
      <div className="username-form">
        <LeftNav notebook={props.notebooks[props.match.params.notebook_id]} />

        <div className="notebook-show">
          <div className="notebook-show-title">
            <h1>{props.notebooks[props.match.params.notebook_id].name}</h1>
            <div className="notebook-show-icons">
              <div className="tag-triage-div">
                {props.triage.length ? (
                  <button
                    onClick={handleRemoveTriage}
                    className="tag-triage-name"
                  >
                    {props.triage[0].name} x
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="notebook-show-bottom">
                <i
                  onClick={handleTagModal}
                  className={props.tags.length ? "fas fa-tag" : ""}
                ></i>
                <i
                  onClick={handleClickDropDown}
                  className="fas fa-ellipsis-h move-left"
                ></i>
              </div>
            </div>
          </div>
          <NoteIndexContainer
            notebook_id={props.match.params.notebook_id}
            notebook={props.notebooks[props.match.params.notebook_id]}
          />
        </div>
      </div>
    </>
  );
};

export default withRouter(NotebookShowForm);
