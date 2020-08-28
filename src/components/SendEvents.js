import React, { useState } from "react";
import axios from "axios";
import { NavbarForm, ContainerTitle } from "./style";

export const SendEvents = (props) => {
  const { refreshEvents } = props;
  const [file, setFile] = useState(null);

  const handlerUpload = () => {
    const data = new FormData();
    data.append("file", file);
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
      <h1>Scheduling Events</h1>
      <ContainerTitle>
        <h1>Submit the file</h1>
        <input name="eijdie" type="file" onChange={saveFile}></input>
      </ContainerTitle>
      <button type="button" onClick={handlerUpload}>
        Confirm
      </button>
    </NavbarForm>
  );
};
