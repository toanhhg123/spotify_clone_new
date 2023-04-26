import { useState } from "react";

const initState = {
  payload: null,
  error: "",
  loading: false,
};
const useFetch = () => {
  const [state, setState] = useState(initState);
  const callApi = async (callback) => {
    try {
      setState({ ...initState, loading: true });
      const data = await callback();
      setState({ ...initState, payload: data });
      return Promise.resolve(data);
    } catch (error) {
      setState({ ...initState, error: error.message });
    }
  };
  return [state, callApi, setState];
};
export default useFetch;
