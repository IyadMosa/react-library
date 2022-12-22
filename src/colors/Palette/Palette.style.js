import styled from 'styled-components';

export const ColorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Color = styled.ul`
  box-sizing: border-box;
  padding-inline-start: 40px;
  display: flex;
  flex-direction: column;
  width: 245px;
  margin-top: 20px;
  li:first-of-type {
    height: 75px;
  }
  h4 {
    font-weight: 600;
  }
`;

export const Shade = styled.li`
  display: flex;
  justify-content: space-between;
  /* height: 40px; */
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  color: ${({ invertColor }) => (invertColor ? 'white' : 'black')};
`;
