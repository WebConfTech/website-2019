import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { addEmail } from 'data/email/actions';
import { isAddingEmail, wasTheEmailSaved, emailError } from 'data/email/selectors';
import { addEmailSchema } from 'data/email/schemas';
import { trackEvent } from 'common/ga';
import { Input, ValidationError, Button } from 'lib';
import styles from './styles.module.scss';

const _AddEmailForm = ({ emailError, isAdding, wasSaved, className, add }) => {
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

  const formErrors = [...(emailError || errors || [])];

  if (formErrors.length) {
    const [firstError] = formErrors;
    trackEvent('emailForm', 'send', 'error', firstError);
  }

  let render;

  if (wasSaved) {
    trackEvent('emailForm', 'send', 'success');
    render = (
      <div className={`${styles.container} ${className ? className : ''}`}>
        <div className={styles.success}>
          <h3 className={styles.title}>¡Todo listo!</h3>
          <p className={styles.text}>Pronto te estaremos escribiendo.</p>
        </div>
      </div>
    );
  } else {
    render = (
      <div className={`${styles.container} ${className ? className : ''}`}>
        <p className={styles.title}>
          Subscribite a
          <br />
          nuestro newsletter
        </p>
        <form className={styles.form} onSubmit={onSubmit}>
          <Input
            placeholder="Tu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            hasError={!!formErrors.length}
            disabled={isAdding}
            autoFocus
          />
          {formErrors.map(error => (
            <ValidationError key={error}>{error}</ValidationError>
          ))}
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
      </div>
    );
  }

  return render;
};

_AddEmailForm.displayName = 'AddEmailForm';

const mapStateToProps = state => ({
  isAdding: isAddingEmail(state),
  wasSaved: wasTheEmailSaved(state),
  emailError: emailError(state)
});

const mapDispatchToProps = dispatch => ({
  add: email => dispatch(addEmail(email))
});

export const AddEmailForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AddEmailForm);
