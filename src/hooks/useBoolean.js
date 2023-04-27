import { useCallback, useState } from "react";

const useBoolean = (defaultValue = false) => {
  const [visible, setVisible] = useState(defaultValue);

  const open = useCallback((defaultValue) => {
    setVisible(defaultValue || true);
  }, []);
  const close = useCallback((defaultValue) => {
    setVisible(defaultValue || false);
  }, []);

  return [visible, open, close];
};

export default useBoolean;
