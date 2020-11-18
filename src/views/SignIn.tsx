/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from 'context/firebase';
import { HeaderContainer } from 'containers/HeaderContainer';
import { FooterContainer } from 'containers/FooterContainer';
import { Form } from 'components';
import { ROUTES } from 'routes';

export const SignIn: React.FC = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  console.log(firebase);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // TODO Add advanced password validation

  const isInvalid = password === '' || emailAddress === '';
  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    firebase!
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch(({ message }: { message: string }) => {
        setEmailAddress('');
        setPassword('');
        setError(message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
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
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to={ROUTES.SIGNUP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};
