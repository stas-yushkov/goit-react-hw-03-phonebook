import { PureComponent } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { StyledButton, StyledInput } from 'components/StyledComponents';

import { InputWrapper, StyledForm } from './StyledComponents';

export class ContactForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: '', number: '' };
    this.onSubmit = this.props.onSubmit;
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contactList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ).isRequired,
  };

  isDulpicate = name => {
    return this.props.contactList.find(contact => contact.name === name);
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (this.isDulpicate(name)) {
      return alert(`${name} is is already in contacts.`);
    }

    this.onSubmit({
      id: nanoid(),
      name,
      number,
    });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <InputWrapper>
          <label htmlFor="name">Name</label>
          <StyledInput
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="number">Number</label>
          <StyledInput
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </InputWrapper>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    );
  }
}
