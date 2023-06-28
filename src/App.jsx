/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      <div>
        {selectedContactId ? (
          <SelectedContact
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
        ) : (
          <ContactList setSelectedContactId={setSelectedContactId} />
        )}
        <br />
        {selectedContactId ? (
          <button
            id="goBackBtn"
            onClick={() => {
              setSelectedContactId(null);
            }}
          >
            Go Back
          </button>
        ) : null}

        <footer>
          <div id="coder">By: Ben Baek</div>
        </footer>
      </div>
    </>
  );
}

export default App;
