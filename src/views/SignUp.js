import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from 'context/firebase';
import { HeaderContainer } from 'containers/HeaderContainer';
import { FooterContainer } from 'containers/FooterContainer';
import { Form } from 'components';
import { ROUTES } from 'routes';

export const SignUp = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // TODO Add advanced password validation

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignUp = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => result.user.updateProfile({ displayName: firstName }))
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch(({ message }) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};
