import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(url);
  useEffect(() => {
    const apiKey = "7df77b16bd844ecdb831ccaec8c37b19";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );
  }, [url]);

  return { data, loading };
};

export default useFetch;
