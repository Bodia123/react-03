import styled from '@emotion/styled';

export const SearchbarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;

  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 0 0 25px 25px;
`;
export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
`;
export const Button = styled.button`
  width: 120px;
  height: 48px;

  line-height: 100%;
  text-align: center;
  color: #03e9f4;
  font-size: 18px;

  border-radius: 12px;

  box-shadow: 0px 2px 4px rgba(15, 218, 137, 0.3);

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 400px) {
    margin-bottom: 25px;
  }

  :hover,
  :focus {
    background: #03e9f4;
    color: #fff;
    border-radius: 12px;
    // box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    //   0 0 100px #03e9f4;
  }
`;
export const Input = styled.input`
  margin: 12px;

  width: 226px;
  height: 48px;

  border-radius: 12px;

  background: transpared;
`;
