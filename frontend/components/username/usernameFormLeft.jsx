import React, { useState } from "react";
import { Link } from "react-router-dom";

const usernameFormLeft = (props) => {
  const [body, updateBody] = useState(() => {
    return "";
  });

  const [selected, updateSelected] = useState(() => {
    return false;
  });

  const [shortCutChecker, updateShortCutChecker] = useState(() => {
    return false;
  });

  const [search, updateSearch] = useState(() => {
    return props.search;
  });

  function changeSelected() {
    props.getNotebooks(props.user).then(() => updateSelected(!selected));
  }

  function updateShortcuts() {
    props
      .getNotebooks(props.user)
      .then(() =>
        props.notebooks.forEach((notebook) => {
          props.getNotes(notebook.id);
        })
      )
      .then(() => updateShortCutChecker(!shortCutChecker));
  }

  function handleRemoveNotebook(entity) {
    return (e) => {
      e.preventDefault();
      const name = entity.name;
      const user_id = entity.user_id;
      const shortcut = !entity.shortcut;
      const id = entity.id;
      props.updateNotebook({
        id,
        name,
        user_id,
        shortcut,
      });
    };
  }

  function handleChange(e) {
    e.preventDefault();
    updateSearch(e.target.value);
    props.receiveSearch(e.target.value);
  }

  function handleLogOut(e) {
    e.preventDefault();
    props.logOutModal();
  }

  function handleRemoveNote(entity) {
    return (e) => {
      e.preventDefault();
      const title = entity.title;
      const body = entity.body;
      const notebook_id = entity.notebook_id;
      const id = entity.notebook_id;
      const id2 = entity.id;
      const shortcut = !entity.shortcut;
      const note = { title, body, notebook_id, id: id2, shortcut };
      props.updateNote({ id, note });
    };
  }

  function handleNoteSearch(e) {
    e.preventDefault();
    props.noteSearch(body);
  }

  function handleClearSearch(e) {
    e.preventDefault();
    props.clearSearch();
    updateSearch("");
  }

  function handleSubmitNewNote(e) {
    e.preventDefault();
    props.addNote(props.notebook);
  }

  return (
    <div className="left-nav">
      <ul>
        <li
          className="user-email"
          onClick={handleLogOut}
          className="user-email"
        >
          {props.user.email}
        </li>
        <form onSubmit={handleNoteSearch}>
          <div className="left-search-input">
            <input
              onChange={handleChange}
              value={search}
              placeholder="Search all notes..."
              type="text"
            ></input>
            <i
              onClick={handleClearSearch}
              className={
                search ? "search-circle far fa-times-circle" : "hidden-circle"
              }
            ></i>
          </div>
        </form>
        {props.match.params.notebook_id || props.match.params.note_id ? (
          <span onClick={handleSubmitNewNote} className="new-note">
            <i className="fas fa-plus-circle fa-2x"></i>
            <button>New Note</button>
          </span>
        ) : (
          ""
        )}

        <li className="shortcuts-li" onClick={updateShortcuts}>
          <i
            className={
              shortCutChecker ? "fas fa-caret-down" : "fas fa-caret-right"
            }
          ></i>
          <i className="fas fa-star"></i>Shortcuts
        </li>
        <ul className="username-left-shortcuts-ul">
          {shortCutChecker
            ? props.notebooks.map((notebook) => {
                if (notebook.shortcut) {
                  return (
                    <li className="shortcut-notebook" key={notebook.id}>
                      <div className="username-left-notebook-index">
                        <i className="fas fa-book"></i>
                        <Link to={`/username/${notebook.id}`}>
                          {notebook.name}
                        </Link>
                      </div>
                      <i
                        onClick={handleRemoveNotebook(notebook)}
                        className="far fa-times-circle"
                      ></i>
                    </li>
                  );
                }
              })
            : ""}
          {shortCutChecker
            ? props.notes.map((note) => {
                if (note.shortcut) {
                  return (
                    <li className="shortcut-note" key={note.id}>
                      <div className="username-left-notebook-index">
                        <i className="fas fa-sticky-note"></i>
                        <Link
                          to={`/username/${note.notebook_id}/notes/${note.id}`}
                        >
                          {note.title}
                        </Link>
                      </div>
                      <i
                        onClick={handleRemoveNote(note)}
                        className="far fa-times-circle"
                      ></i>
                    </li>
                  );
                }
              })
            : ""}
        </ul>
        <li className="all-notes-li">
          <Link to="/allnotes">
            <i className="fas fa-sticky-note"></i>All Notes
          </Link>
        </li>
        <li className="notebooks-li">
          <i
            className={selected ? "fas fa-caret-down" : "fas fa-caret-right"}
            onClick={changeSelected}
          ></i>
          <Link to="/notebooks">
            <i className="fas fa-book"></i>Notebooks
          </Link>
        </li>
        <ul className="username-left-ul">
          {selected
            ? props.notebooks.map((notebook) => (
                <li key={notebook.id}>
                  <div className="username-left-notebook-index">
                    <i className="fas fa-book"></i>
                    <Link to={`/username/${notebook.id}`}>{notebook.name}</Link>
                  </div>
                </li>
              ))
            : ""}
        </ul>
        {/* <li><i className="fas fa-user-friends"></i>Shared with Me</li> */}
        <li className="tags-li">
          <Link to="/tags">
            <i className="fas fa-tag"></i>Tags
          </Link>
        </li>
        <li className="notebooks-li">
          <a
            href="https://patricksbrown1992.github.io/portfolio/"
            target="_blank"
          >
            Portfolio
          </a>
        </li>
        <li className="notebooks-li">
          <a
            href="https://www.linkedin.com/in/patricksbrown1992/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li className="notebooks-li">
          <a href="https://github.com/patricksbrown1992" target="_blank">
            Github
          </a>
        </li>
        {/* <li><i className="fas fa-trash"></i>Trash</li> */}
        {/* <i class="fas fa-caret-down"></i> */}
      </ul>
    </div>
  );
};

export default usernameFormLeft;
