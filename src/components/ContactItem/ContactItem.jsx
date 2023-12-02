import { Component } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { ContactWrapper, ContactData, Button } from './ContactItem.styled';

export class ContactItem extends Component {
  state = {
    modalIsOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }));
  };

  render() {
    const { contact, onUpdate, onDelete } = this.props;
    const { modalIsOpen } = this.state;

    return (
      <li>
        <ContactWrapper>
          <ContactData>
            {contact.name}: {contact.number}
          </ContactData>
          <div>
            <Button type="button" onClick={this.toggleModal}>
              <MdEdit size={22} />
            </Button>{' '}
            <Button type="button" onClick={() => onDelete(contact.id)}>
              <MdDelete size={22} />
            </Button>
          </div>
        </ContactWrapper>
        <ContactEditor
          contact={contact}
          onUpdate={onUpdate}
          isOpen={modalIsOpen}
          onClose={this.toggleModal}
        />
      </li>
    );
  }
}
