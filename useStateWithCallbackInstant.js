import { useState, useEffect, useLayoutEffect } from "react";

const useStateWithCallbackInstant = (initialState, callback) => {
  const [state, setState] = useState(initialState);

  useLayoutEffect(() => callback(state), [state, callback]);

  return [state, setState];
};

export default useStateWithCallbackInstant;
