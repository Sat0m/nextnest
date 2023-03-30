import { useEffect, useState, ChangeEvent } from "react";
import { Button } from "ui";

export default function Web() {
  const [greeting, setGreeting] = useState("");
  const [picture, setPicture] = useState("");

  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log("files: ", e.target.files);
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    // 👇 Uploading the file using the fetch API to the server
    fetch("/api/picture/upload/", {
      method: "POST",
      body: formData,
      // 👇 Set headers manually for single file upload
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

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

      <input type="file" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}
