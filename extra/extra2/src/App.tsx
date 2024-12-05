import "./App.css";

import { useState } from "react";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";
import LongLoadingComponent from "./LongLoadingComponent";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)} style={{ margin: "0.5rem" }}>
        Open Modal
      </button>
      <Modal open={openModal} center onClose={() => setOpenModal(false)}>
        <h2>Modales Fenster</h2>
        <p>
          A modal window is a user interface element that appears on top of the
          main content and requires the user to interact with it before
          returning to the main interface. It is commonly used to display
          important information, request user input, or confirm an action. Modal
          windows typically include a close button and may restrict interactions
          with the underlying content until the user completes the action within
          the modal. This design pattern helps to focus the user's attention on
          specific tasks or messages, improving usability and guiding user
          interactions.
        </p>
      </Modal>
      <LongLoadingComponent />
    </>
  );
}

export default App;
