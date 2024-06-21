// useHTTP.ts
import { useState } from "react";
import axios, { AxiosRequestConfig, Method } from "axios";
import { SERVER_URL } from "../constants/config";

/**
 * Custom hook for handling HTTP requests (GET, POST, PUT, DELETE).
 * @param url The URL for the request.
 * @param method The HTTP method ('get', 'post', 'put', 'delete').
 * @param requestData Optional data for POST, PUT requests.
 */
const useHTTP = <T,>(url: string, method: Method, requestData?: T) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const sendRequest = async (customData?: T) => {
    setLoading(true);
    const path = SERVER_URL + url;
    const config: AxiosRequestConfig = {
      method,
      url: path,
      data: customData || requestData,
    };

    try {
      const response = await axios(config);
      setData(response.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return { sendRequest, data, loading, error };
};

export default useHTTP;
