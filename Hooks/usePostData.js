import { useState } from "react";
import BASE_URL from "../Api/baseURLbaseURL";

const usePostData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (endpoint, payload) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return await response.json();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
};

export default usePostData;
