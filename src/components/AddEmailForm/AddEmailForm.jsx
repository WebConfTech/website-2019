import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { addEmail } from 'data/email/actions';
import { isAddingEmail } from 'data/email/selectors';
import { Input, Button } from 'lib';
import styles from './styles.module.scss';

const _AddEmailForm = ({ isAdding, add }) => {
  const [email, setEmail] = useState('');
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      add(email);
    },
    [add, email]
  );

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        type="email"
        placeholder="Tu e-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Button type="submit" color="secondary" className={styles.button}>
        Registrarme
      </Button>
    </form>
  );
};

_AddEmailForm.displayName = 'AddEmailForm';

const mapStateToProps = state => ({
  isAdding: isAddingEmail(state)
});

const mapDispatchToProps = dispatch => ({
  add: email => dispatch(addEmail(email))
});

export const AddEmailForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AddEmailForm);
