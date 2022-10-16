import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import fireDb from "../config";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import qrScan from "../icons/qr-code-scan.png";
import Footer from "./Footer";

const Home = () => {
  // eslint-disable-next-line
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.get("Txh") === null) {
      history.push(`/search?Txh=${search}`);
    } else {
      history.push(`/search?Txh=${search}${params.get("Txh")}`);
    }

    setSearch("");
  };

  useEffect(() => {
    fireDb.child("certissued").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);
  // eslint-disable-next-line
  const onDelete = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {
      fireDb.child(`certissued/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Contact Deleted Successfully");
        }
      });
    }
  };
  return (
    <div className="Home">
      <div class="data">
        <h1>Academic Credential Verification using Blockchain</h1>
        <h3>Verification Portal</h3>
      </div>
      <div style={{ marginTop: "280px" }}>
        <form onSubmit={handleSubmit} style={{ display: "inline" }}>
          <input
            type="text"
            className="inputField"
            placeholder="Search Certificate ..."
            onChange={(e) => setSearch(e.target.value)}
            value={search || params.get("Txh")}
          />
          <div class="icons8-search"></div>
        </form>
        <Link to="/qrscan">
          <img src={qrScan} className="qrScan" alt="qrScanicon" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
