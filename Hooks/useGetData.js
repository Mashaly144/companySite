import { useState, useEffect } from "react";
import BASE_URL from "../Api/baseURLbaseURL";

const useGetData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {}; // CLEANUP 🧹🧹
  }, [endpoint]);

  return { data, loading };
};

export default useGetData;
