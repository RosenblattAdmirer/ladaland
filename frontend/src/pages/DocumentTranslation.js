import React, { useState } from "react";

const DocumentTranslation = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append("document", file);
    try {
      // Call backend endpoint (adjust the URL as needed, e.g. the Cloud Run URL)
      const response = await fetch("/api/translate", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        // For simplicity, assume the response returns a blob for the translated file.
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "translated_document.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
    } catch (error) {
      console.error("Error translating document:", error);
    }
  };

  return (
    <div>
      <h2>Document Translation</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf,.doc,.docx,.txt" onChange={handleFileChange} required /><br />
        <button type="submit">Translate Document</button>
      </form>
    </div>
  );
};

export default DocumentTranslation;
