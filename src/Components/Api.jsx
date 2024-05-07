import axios from "axios";
import React, { useEffect, useState } from "react";

const Api = () => {
  const [data, setdata] = useState([]); // [{},{},{}]

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // try {
    //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    //   const jsondata = await res.json();
    //   setdata(jsondata);
    // } catch (error) {
    //   console.log(error);
    // }
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setdata(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Api</h1>
      {data.map((element, index) => {
        return (
          <div key={element.id}>
            <h1>{element.userId}</h1>
            <h1>{element.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
