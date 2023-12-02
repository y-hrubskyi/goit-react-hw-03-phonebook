import { ModalBase } from 'components/ModalBase/ModalBase';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const ContactEditor = ({ contact, onUpdate, isOpen, onClose }) => {
  const handleSubmit = values => {
    onUpdate({ ...values, id: contact.id });
    onClose();
  };

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <ContactForm
        contact={contact}
        action="Update contact"
        onSubmit={handleSubmit}
      />
    </ModalBase>
  );
};
