const { useState, useEffect } = require("react");

const useTimeout = (delay) => {
  const [Ready, setReady] = useState(false);

  useEffect(() => {
    let id = setTimeout(() => {
      setReady((prev) => !prev);
    }, [delay]);

    return () => {
      clearTimeout(id);
    };
  }, [delay]);

  return Ready;
};

export default useTimeout;
