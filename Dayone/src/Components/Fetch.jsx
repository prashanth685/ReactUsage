import React, { useState } from "react";

const Fetch = () => {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      // Handle non-JSON / server errors
      if (!res.ok) {
        const text = await res.text();
        console.error("Server error:", text);
        setError("Server error or rate limit hit (429)");
        setLoading(false);
        return;
      }

      const data = await res.json();

      setReply((prev) => [
        ...prev,
        { role: "user", content: input },
        { role: "assistant", content: data.content },
      ]);

      setInput("");
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Something went wrong");
    }

    setLoading(false);
  };

  // Send on Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Chat App</h2>

      <div
        className="shadow-md"
        style={{
          minHeight: "300px",
          padding: "10px",
          border: "1px solid #ccc",
          marginBottom: "10px",
          overflowY: "auto",
        }}
      >
        {reply.map((item, index) => (
          <p key={index}>
            <strong>{item.role}:</strong> {item.content}
          </p>
        ))}

        {loading && <p>Typing...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <input
        type="text"
        placeholder="Enter a prompt"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ width: "80%", padding: "10px" }}
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        style={{ padding: "10px", marginLeft: "10px" }}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
};

export default Fetch;
