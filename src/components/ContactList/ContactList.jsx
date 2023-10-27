import { Button, ContactData, ContactsList } from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => {
  const contactList = contacts.map(contact => (
    <li key={contact.id}>
      <ContactData>
        {contact.name}: {contact.number}
      </ContactData>
      <Button type="button" onClick={() => onClick(contact.id)}>
        Delete
      </Button>
    </li>
  ));

  return (
    <>
      <ContactsList>{contactList}</ContactsList>
    </>
  );
};
