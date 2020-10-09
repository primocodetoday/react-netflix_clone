import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Avatar = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
`;

export const Title = styled.h1`
  width: 100%;
  color: white;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`;

export const Item = styled.li`
  list-style-type: none;
  max-width: 100%;
  max-height: 200px;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Name} {
    font-weight: bold;
    color: white;
  }

  &:hover > ${Avatar} {
    border: 3px solid white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
