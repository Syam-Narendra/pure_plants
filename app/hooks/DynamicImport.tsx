import { useEffect, useState } from "react";

export function useDynamicImport<T>(importer: () => Promise<{ default: T }>): T | null {
  const [mod, setMod] = useState<T | null>(null);

  useEffect(() => {
    let isMounted = true;
    importer().then((m) => {
      if (isMounted) {
        setMod(m.default);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [importer]);

  return mod;
}
