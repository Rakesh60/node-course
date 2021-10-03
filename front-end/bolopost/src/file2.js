import React, { useState } from "react";
import axios from "axios";
export default function File2() {
  const [body, setbody] = useState("");
  const [by, setby] = useState("");
  const handlePost = () => {
    axios
      .post("/blogs", { body, createdBy: by })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <label>Body</label>
      <input
        type="text"
        value={body}
        onChange={(e) => setbody(e.target.value)}
      />
      <label>Created By:</label>
      <input type="text" value={by} onChange={(e) => setby(e.target.value)} />
      <button onClick={handlePost}>Post</button>
    </div>
  );
}
