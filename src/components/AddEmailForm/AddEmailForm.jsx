import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { addEmail } from 'data/email/actions';
import { isAddingEmail } from 'data/email/selectors';
import { addEmailSchema } from 'data/email/schemas';
import { Input, ValidationError, Button } from 'lib';
import styles from './styles.module.scss';

const _AddEmailForm = ({ isAdding, add }) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState(null);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();

      try {
        // check if email is valid and clear errors if it's
        addEmailSchema.validateSync(email);
        setErrors(null);

        // call the add action
        add(addEmailSchema.cast(email));
      } catch (validationError) {
        // set validation errors
        setErrors(validationError.errors);
      }
    },
    [email, setErrors, add]
  );

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        placeholder="Tu e-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        hasError={!!errors}
        disabled={isAdding}
        autoFocus
      />
      {!!errors
        ? errors.map(error => <ValidationError key={error}>{error}</ValidationError>)
        : null}
      <Button
        type="submit"
        color="secondary"
        isLoading={isAdding}
        disabled={isAdding}
        className={styles.button}
      >
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
