/* eslint-disable react/prop-types */
export default function ContactRow({ contact }) {
  if (!contact) {
    contact = {};
  }
  // responsible for rendering a single row (tr)
  // with three columns (td) name, email, phone number
  console.log(contact);
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

