import { useState } from 'react';

import {
  signInWithGooglePopup,
  createUserDocuementFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase.utils.js';

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

import Button, {
  BUTTON_TYPES_CLASSES,
} from '../../components/button/button.component.js';

import FormInput from '../../components/form-input/form-input.component.js';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  //Google ayth
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  //form state
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  //event handlers
  const handleChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        case 'auth/user-not-found':
          alert('User not found');
          break;
        default:
          'wrong credentials';
      }
      console.log('something went wrong', error);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
