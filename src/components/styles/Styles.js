import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export const Header = styled.header`
  background-image: linear-gradient(to bottom right, #d45ba1, #a784e0);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 20px 40px;

  h1 {
    margin-bottom: 10px;
    font-family: verdana;
    font-size: 24px;
    font-weight: 700;
    color: #f5f5f5;
    text-shadow: 1px 1px 1px #919191, 1px 4px 1px #919191,
      1px 18px 6px rgba(8, 8, 8, 0), 1px 30px 60px rgba(2, 2, 2, 0);
  }

  p {
    color: #f5f5f5;
    text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191,
      1px 30px 60px rgba(16, 16, 16, 0.4);
    font-weight: 600;
  }
`;
export const SpanHeader = styled.span`
  background-color: rgba(0, 0, 0, 0.44);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  color: white;
  font-size: 15px;
  padding: 3px 5px;
  border-radius: 5px;
`;

export const Product = styled.div`
  border: 0.5px solid pink;
  padding: 20px;
  width: 33%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  h5 {
    text-align: center;
  }

  img {
    width: 220px;
    margin-left: 24%;
  }
`;

export const SpanProduct = styled.span`
  background-color: rgb(255, 178, 178);
  padding: 3px;
  font-weight: lighter;
  color: rgb(155, 0, 0);
  border-radius: 3px;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  color: black;
  border-radius: 5px;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  position: relative;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  background: #b621fe;
  border: none;

  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  }

  &:hover {
    color: #fff;
  }

  &:hover:after {
    left: 0;
    width: 100%;
  }
`;

export const ButtonS = styled(Button)`
  background-color: rgba(80, 200, 50, 0.5);
`;

export const Container = styled.div`
  padding: 20px 40px;
  display: flex;
  gap: 30px;
`;
