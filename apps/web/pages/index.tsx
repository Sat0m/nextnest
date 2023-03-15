import { useEffect, useState } from "react";
import { Button } from "ui";

export default function Web() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch("/api/")
      .then((res) => {
        console.log("res: ", res);
        return res.text();
      })
      .then(setGreeting);
  }, []);

  return (
    <div>
      <h1>{greeting || "ahoj"}</h1>
      <Button />
    </div>
  );
}
