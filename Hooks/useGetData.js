import { useState, useEffect } from "react";
import BASE_URL from "../Api/baseURL";

const useGetData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BASE_URL.get(endpoint);

        setData(response.data);
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
