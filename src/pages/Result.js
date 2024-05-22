import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";

export const Result = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const [showAlert, setShowAlert] = useState(false);
  const [outputValue, setOutputValue] = useState(data.output);
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(outputValue).then(() => {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    });
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([outputValue], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "output.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleTextareaChange = (event) => {
    setOutputValue(event.target.value);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="output-container">
      <h2>Processed Image Output</h2>
      <textarea
        value={outputValue}
        className="output-textbox"
        onChange={handleTextareaChange}
        contentEditable={true}
        style={{ resize: "none" }}
      />
      <div className="button-group">
        <button onClick={handleCopy} className="btn btn-primary">
          Copy to Clipboard
        </button>
        <button onClick={handleDownload} className="btn btn-secondary">
          Download
        </button>
        <button onClick={handleGoHome} className="btn btn-secondary">
          Go to Home
        </button>
      </div>
      {showAlert && (
        <div className="alert alert-primary" role="alert">
          Output copied to clipboard!
        </div>
      )}
    </div>
  );
};
