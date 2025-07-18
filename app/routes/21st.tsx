import { useEffect, useState } from "react";


function MarqueeDemoVertical() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (isLoading) return <h1>loading</h1>;
  return <ScrollVelocityDemo/>
}
export default MarqueeDemoVertical;
