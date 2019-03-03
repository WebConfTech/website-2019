import React from 'react';
import PropTypes from 'prop-types';

export const TicketForm = ({ name, dni, email, onNameChange, onDniChange, onEmailChange }) => (
  <form>
    <label for="name">A nombre de</label>
    <input type="text" value={name} name="name" onChange={e => onNameChange(e.value)} />
    <label for="dni">Nº de documento</label>
    <input type="text" value={name} name="dni" onChange={e => onDniChange(e.value)} />
    <label for="email">Dirección de correo electrónico</label>
    <input type="email" value={name} name="email" onChange={e => onEmailChange(e.value)} />
  </form>
);

TicketForm.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onDniChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired
};
