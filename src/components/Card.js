import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";
import Loader from "./Loader";
import "./Cards.css";
import Button from "./Button";

const Card = () => {
  const [dataBase, setDataBase] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  let url = "https://reqres.in/api/users?per_page=12";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, { timeout: 3000 })
      .then((res) => {
        let data = res.data;

        setDataBase(data.data);
        setLoading(false);
      })
      .catch((err) => {
        let msgError = {
          status: err.response.status || "0",
          statusText: err.response.statusText || "Ocurrio un error",
        };
        setError(msgError);
      });
  }, [url]);

  return (
    <section className="container-cards">
      {loading && <Loader />}
      {dataBase &&
        dataBase.map((el, i) => (
          <div key={i} className="card">
            <Photo src={el.avatar} />
            <h4>{`${el.first_name} ${el.last_name}`}</h4>
            <div className="text-card">{el.email}</div>
            <Button />
          </div>
        ))}
      {error && (
        <div className="msg-error">{`Error ${error.status}: ${error.statusText}`}</div>
      )}
    </section>
  );
};

export default Card;
