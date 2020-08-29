const { default: styled } = require("styled-components");

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: block;
`;

export const ContainerTrack = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Track = styled.div`
  width: 60%;
  background: #f0fafa;
  border-radius: 10px;
  margin-bottom: 30px;
  padding-left: 10px;
  text-align: justify;
  .title {
    font-family: Montserrat-Bold;
  }
`;

export const NavbarForm = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  background: #edf5f5;
  justify-content: space-evenly;
  align-items: center;

  button {
    width: 150px;
    height: 50px;
    background: #81cccc;
    border-color: transparent;
    border-radius: 5px;
    font-family: Montserrat-Regular;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: Montserrat-Bold;
    font-size: ${(props) => (props.largeFont ? "1.3rem" : "1rem")};
    color: #444444;
    font-weight: normal;
    margin-bottom: 5px;
    margin-top: 0px;
  }

  p {
    font-family: Montserrat-Regular;
    font-size: 0.8rem;
    color: ${(props) => (props.blue ? "#0497a7" : "#4a4a4a")};
  }
`;

export const HeaderNavbar = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: Montserrat-Bold;
    font-size: 1.4rem;
    color: #444444;
    font-weight: normal;
    margin-bottom: 5px;
    margin-top: 0px;
  }

  a {
    font-family: Montserrat-Regular;
    font-size: 0.8rem;
    color: ${(props) => (props.blue ? "#0497a7" : "#4a4a4a")};
  }
`;
