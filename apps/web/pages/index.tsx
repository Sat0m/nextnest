import { useEffect, useState } from "react";
import { Button } from "ui";

export default function Web() {
  const [greeting, setGreeting] = useState("");
  const [picture, setPicture] = useState("");

  useEffect(() => {
    fetch("/api/")
      .then((res) => {
        return res.text();
      })
      .then(setGreeting);

    fetch("/api/picture")
      .then((res) => {
        return res.text();
      })
      .then(setPicture);
  }, []);

  return (
    <div>
      <h1>{greeting || "ahoj"}</h1>

      <h2>{picture || "there's no picture"}</h2>
      <Button />
    </div>
  );
}
