import { Component } from 'react';

import { ModalBase } from 'components/ModalBase/ModalBase';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { FormWrapper } from './ContactAdd.styled';

export class ContactAdd extends Component {
  state = {
    modalIsOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }));
  };

  handleSubmit = values => {
    const isAlreadyAdded = this.props.onAdd(values);
    if (!isAlreadyAdded) {
      this.toggleModal();
    }
  };

  render() {
    const { modalIsOpen } = this.state;

    return (
      <FormWrapper>
        <Button type="button" onClick={this.toggleModal}>
          ➕ Add new contact
        </Button>
        <ModalBase isOpen={modalIsOpen} onClose={this.toggleModal}>
          <ContactForm
            contact={{ name: '', number: '' }}
            action="Add contact"
            onSubmit={this.handleSubmit}
          />
        </ModalBase>
      </FormWrapper>
    );
  }
}
