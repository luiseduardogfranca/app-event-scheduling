import React, { useState } from "react";
import axios from "axios";

export const SendEvents = (props) => {
  const { refreshEvents } = props;
  const [file, setFile] = useState(null);

  const handlerUpload = () => {
    const data = new FormData();
    data.append("file", file);
    axios
      .post("http://localhost:3000/api/v1/sendEvents", data, {})
      .then((res) =>
        res.data ? refreshEvents((el) => res.data) : console.log(res)
      );
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
    <div>
      <label>Submeta o arquivo</label>
      <input type="file" onChange={saveFile}></input>
      <button type="button" onClick={handlerUpload}>
        Enviar
      </button>
    </div>
  );
};
