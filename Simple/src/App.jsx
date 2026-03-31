import React from "react";
import { motion } from "motion/react";

const App = () => {
  return (
    <div style={{ overflow: "hidden", padding: "50px" }}>
      <motion.div
        animate={{ rotate: 170 }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "skyblue",
        }}
      />
    </div>
  );
};

export default App;
