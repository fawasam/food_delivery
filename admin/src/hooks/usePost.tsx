// usePost.ts
import { useState } from "react";
import axios from "axios";

/**
 * Custom hook for sending POST requests using Axios.
 * @param url The URL to send the POST request to.
 * @param data The data to be sent in the POST request.
 */
const usePost = <T,>(url: string, data: T) => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const postData = async () => {
    setLoading(true);
    try {
      const result = await axios.post(url, data);
      setResponse(result.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return { postData, response, loading, error };
};

export default usePost;
