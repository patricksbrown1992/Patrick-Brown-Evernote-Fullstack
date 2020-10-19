import React from "react";

const LogoutForm = (props) => {
  function handleSubmitLogOut(e) {
    e.preventDefault();
    props.logout();
    props.closeModal();
  }

  return (
    <div className="logout-modal">
      <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      <br />
      <br />
      <button onClick={handleSubmitLogOut} type="submit">
        Sign Out {props.user.email}
      </button>
    </div>
  );
};

export default LogoutForm;
