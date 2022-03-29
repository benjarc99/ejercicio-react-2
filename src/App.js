import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import "./components/Cards.css";
import Loader from "./components/Loader";

function App() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let url = "https://reqres.in/api/users?per_page=12";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, { timeout: 3000 })
      .then((res) => {
        let data = res.data;

        setUsers(data.data);
        setLoading(false);
        console.log(data.data);
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
        {users &&
          users.map((user, i) => (
            <Card
              name={`${user.first_name} ${user.last_name}`}
              img={user.avatar}
              email={user.email}
              key={i}
            />
          ))}
      </section>
      {error && (
        <div className="msg-error">{`Error ${error.status}: ${error.statusText}`}</div>
      )}
    </div>
  );
}

export default App;
