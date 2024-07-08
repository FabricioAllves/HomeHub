import { useState } from 'react';

export function useHome() {
  const [data, setData] = useState(null);
  // regra de negocio

  return {
    data,
  };
}
