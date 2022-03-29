import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import "./components/Cards.css";
import Loader from "./components/Loader";

function App() {
  const [dataBase, setDataBase] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
    <div className="main-cards">
      {loading && <Loader />}
      <section className="container-cards">
        {dataBase && dataBase.map((el, i) => <Card el={el} i={i} />)}
      </section>
      {error && (
        <div className="msg-error">{`Error ${error.status}: ${error.statusText}`}</div>
      )}
    </div>
  );
}

export default App;
