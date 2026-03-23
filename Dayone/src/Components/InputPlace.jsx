import React, { useEffect, useState } from "react";

const InputPlace = () => {
  const texts = ['search "Movies"', 'search "Shows"', 'search "Songs"'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <input type="text" placeholder={texts[index]} />
    </>
  );
};

export default InputPlace;
