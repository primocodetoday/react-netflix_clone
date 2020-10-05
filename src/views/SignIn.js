import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from 'context/firebase';
import HeaderSection from 'Containers/HeaderSection';
import FooterSection from 'Containers/FooterSection';
import { Form } from 'components';
import routes from 'routes';

const SignIn = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // TODO Add advanced password validation

  const isInvalid = password === '' || emailAddress === '';
  const handleSignIn = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(routes.browse);
      })
      .catch(({ message }) => {
        setEmailAddress('');
        setPassword('');
        setError(message);
      });
  };

  return (
    <>
      <HeaderSection>
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
            New to Netflix? <Form.Link to="signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderSection>
      <FooterSection />
    </>
  );
};

export default SignIn;
