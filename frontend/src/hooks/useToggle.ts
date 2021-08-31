import { useState } from "react";

export const useToggle = <T>(initialValue:T, otherValue:T): [T, () => void] => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(value === initialValue ? otherValue : initialValue);
  return [value, toggleValue];
}