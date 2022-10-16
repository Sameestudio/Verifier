import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./QrScan.css";
import { QrReader } from "react-qr-reader";


const QrScan = () => {
  const [data, setData] = useState(''); 

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="container">
        <QrReader className="QrReader"
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            window.location.replace(result.text, '_blank', 'noopener,noreferrer');
            // window.open(data, '_blank', 'noopener,noreferrer');
            // window.open(url, '_blank').focus();
          }

          if (!!error) {
            console.info(error);
          }
        }}
        constraints={{ facingMode: 'environment',legacyMode: "boolean", focusMode: "continuous", zoom: 4.0 }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
          <Link to="/" >
            <button className=" btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QrScan;
