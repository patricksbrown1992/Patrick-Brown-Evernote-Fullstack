import React, { useState, useEffect } from "react";
import UsernameFormLeft from "../username/usernameLeftContainer";
import { merge } from "lodash";
import { Link, Redirect } from "react-router-dom";
import styleDate from "../../util/styleDate";

const NotebooksIndexForm = (props) => {
  const [selected, updateSelected] = useState(() => {
    return false;
  });

  const [body, updateBody] = useState(() => {
    return "";
  });

  const [title, updateTitle] = useState(() => {
    return false;
  });

  useEffect(() => {
    props.getNotebooks(props.user);
  }, []);

  function handleClickAdd(e) {
    e.preventDefault();
    props.addModal();
  }

  function handleTitleClick(e) {
    e.preventDefault();
    updateTitle(!title);
    handleSort(props.notebooks);
  }

  function comparison(a, b) {
    const aUpperName = a.name.toUpperCase();
    const bUpperName = b.name.toUpperCase();
    let comparison = 0;
    if (aUpperName > bUpperName) {
      comparison = title ? -1 : 1;
    } else if (aUpperName < bUpperName) {
      comparison = title ? 1 : -1;
    }
    return comparison;
  }

  function handleClickDropDown(entity) {
    return (e) => {
      e.preventDefault();
      props.notebookDropDown(entity);
    };
  }

  function changeSelected(id) {
    if ((selected === 0 || selected) && selected === id) {
      return (e) => {
        e.preventDefault();
        updateSelected(false);
      };
    } else {
      return (e) => {
        e.preventDefault();
        updateSelected(id);
      };
    }
  }

  if (props.search.length > 0) return <Redirect to="/allnotes" />;

  let notebooks = props.notebooks.filter((notebook) =>
    notebook.name.toUpperCase().includes(body.toUpperCase())
  );

  notebooks = notebooks.sort(comparison);

  notebooks = notebooks.map((notebook) => {
    return (
      <tr key={notebook.id}>
        <td>
          <Link to={`/username/${notebook.id}`}>{notebook.name}</Link>
        </td>
        <td>{props.user.email}</td>
        <td>{styleDate(notebook.updated_at)}</td>
        <td>
          <i
            onClick={handleClickDropDown(notebook)}
            className="fas fa-ellipsis-h"
          ></i>
        </td>
      </tr>
    );
  });

  return (
    <div className="notebooks-index">
      <UsernameFormLeft />

      <div className="notebooks-index-right">
        <div className="notebook-index-top-div">
          <div className="notebook-index-top">
            <h1>Notebooks</h1>
            <input
              placeholder="Find Notebooks..."
              value={body}
              type="text"
              onChange={(e) => updateBody(e.target.value)}
            />
          </div>
          <div className="notebook-index-header">
            <h3>My notebook list</h3>

            <button className="new-notebook-button" onClick={handleClickAdd}>
              <i className="fas fa-book-medical"></i>New Notebook
            </button>
          </div>
        </div>
        <table>
          <tr style={{ marginBottom: "15px" }}>
            <th style={{ cursor: "pointer" }} onClick={handleTitleClick}>
              Title{" "}
              <i
                className={title ? "fas fa-arrow-up" : "fas fa-arrow-down"}
              ></i>
            </th>
            <th>Create By</th>
            <th>Updated</th>
            <th>Actions</th>
          </tr>

          {notebooks}
        </table>
      </div>
    </div>
  );
};

export default NotebooksIndexForm;
