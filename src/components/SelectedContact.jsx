/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";
export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function getContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        //console.log(result);
        setContact({
          id: result.id,
          name: result.name,
          phone: result.phone,
          email: result.email,
        });
      } catch (error) {
        console.error(error);
      }
    }
    getContact();
  }, [selectedContactId]);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Selected Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr className="tableHeadings">
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contact ? (
          <ContactRow
            key={contact.id}
            setSelectedContactId={setSelectedContactId}
            contact={contact}
          />
        ) : (
          <tr>
            <td>No name</td>
            <td>No Email</td>
            <td>No Phone</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
