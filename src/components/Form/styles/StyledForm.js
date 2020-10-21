import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  z-index: 1;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  min-height: 660px;
  padding: 60px 68px 40px;
  border-radius: 5px;
  margin: 30px auto;
  margin-bottom: 100px;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Error = styled.div`
  border-radius: 4px;
  font-size: 14px;
  padding: 15px 20px;
  margin: 0 0 16px;
  background: #e87c03;
  color: white;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;
export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;
export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(RouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  padding: 5px 20px;
  border: 0;
  border-radius: 4px;
  background: #333;
  line-height: 40px;
  color: white;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  padding: 16px;
  border: 0;
  margin: 24px 0 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  background: #e50914;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: #f40612;
  }
`;
