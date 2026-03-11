import React, { useState } from "react";
const Like = () => {
  const [Like, setLike] = useState(false);
  return (
    <>
      <button onClick={() => setLike(!Like)}>
        {Like ? "🩷 liked" : "🤍 unliked"}
      </button>
    </>
  );
};
export default Like;
