import React, { useState } from "react";
import { Draggable, Droppable } from "react-drag-and-drop";

export default function Drag() {
  const [droppedData, setDroppedData] = useState("");

  const handleDrop = (data) => {
    setDroppedData(data.box);
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Drag and Drop Example</h3>

      {/* Draggable */}
      <Draggable type="box" data="Hello World">
        <div
          style={{
            padding: 10,
            background: "lightblue",
            width: 120,
            cursor: "grab",
          }}
        >
          Drag me
        </div>
      </Draggable>

      {/* Droppable */}
      <Droppable types={["box"]} onDrop={handleDrop}>
        <div
          style={{
            marginTop: 30,
            padding: 20,
            width: 200,
            height: 100,
            background: "#eee",
            border: "2px dashed #aaa",
          }}
        >
          Drop here
          <p>{droppedData}</p>
        </div>
      </Droppable>
    </div>
  );
}
