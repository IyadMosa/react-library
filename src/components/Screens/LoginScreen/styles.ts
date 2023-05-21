import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  background-color: #f2f2f2;
`;
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 50%;
  padding: 20px;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  // max-width: 400px;
  height: auto;
`;

export const Card = styled.div`
  width: 350px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 0;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const RegisterLink = styled.div`
  margin-top: 10px;
  color: #333;
  text-decoration: underline;
  text-align: center;
`;
