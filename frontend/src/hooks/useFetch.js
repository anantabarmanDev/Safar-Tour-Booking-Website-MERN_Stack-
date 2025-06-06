import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          setError("failed to fetch");
          // alert("failed to fetch");
        }
        const result = await res.json();
        setData(result.data);
        setLoading(false);
        // setError(null);
      } catch (err) {
        setError(err.message);
        // setData([]);

        //}  finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
