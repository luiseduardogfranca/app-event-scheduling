import React, { useState } from "react";
import axios from "axios";
import { NavbarForm, ContainerTitle, HeaderNavbar } from "./style";

export const SendEvents = (props) => {
  const { refreshEvents } = props;
  const [file, setFile] = useState(null);

  const handlerUpload = () => {
    const data = new FormData();
    data.append("file", file);

    document.getElementById("input-file").value = null;

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/sendEvents`, data, {})
      .then((res) =>
        res.data ? refreshEvents((el) => res.data) : console.log(res)
      )
      .catch((err) => alert("File not uploaded"));
  };

  const saveFile = (event) => {
    if (
      event &&
      event.target &&
      event.target.files &&
      event.target.files.length > 0
    ) {
      setFile((el) => event.target.files[0]);
    } else {
      alert("Erro ao adicionar arquivo");
    }
  };
  return (
    <NavbarForm>
      <HeaderNavbar>
        <h1>Events Scheduling</h1>
        <a
          target="_blank"
          href="https://github.com/luiseduardogfranca/event-scheduling"
        >
          GitHub repository
        </a>
      </HeaderNavbar>
      <ContainerTitle>
        <h1>Submit the file</h1>
        <input
          name="eijdie"
          id="input-file"
          type="file"
          onChange={saveFile}
        ></input>
      </ContainerTitle>
      <button type="button" onClick={handlerUpload}>
        Confirm
      </button>
    </NavbarForm>
  );
};
