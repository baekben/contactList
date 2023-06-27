/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      <div>
        {selectedContactId ? (
          <div>Contact Selected</div>
        ) : (
          <ContactList setSelectedContactId={setSelectedContactId} />
        )}
      </div>
    </>
  );
}

export default App;
