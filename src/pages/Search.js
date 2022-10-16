import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import fireDb from "../config";
import QRCode from "qrcode.react";
import { toast } from "react-toastify";
import "./Search.css";

const Search = () => {
  const [data, setData] = useState({});
  // const btn = document.getElementById("btn");
  const [show, setShow] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showReject, setReject] = useState(false);


  useEffect(() => {
    setTimeout(() => setShow(true), 7100);
  }, []); 

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const [showElement, setShowElement] = React.useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 7000);
  }, []);

  let query = useQuery();
  let search = query.get("Txh");
  console.log("search", search);

  useEffect(() => {
    const searchData = () => {
      fireDb
        .child("certissued")
        .orderByChild("Txh")
        .equalTo(search)
        .on("value", (snapshot) => {
          if (snapshot.val()) {
            const data = snapshot.val();
            setData(data);
          }
        });
    };
    searchData();
  }, [search]);

  const onclickprint = (event) => {
    window.print();
    event.preventDefault();
  };

  //  const handleSubmit = e => {
  // e.preventDefault();
  // setButtonText('New text');
  // window.open(`https://ropsten.etherscan.io/tx/${query.get("Txh")}`)
  // const handleSubmit =
  //   ("click",
  //   () => {
  //     // 👇️ hide button (still takes up space on page)
  //     btn.style.visibility = "hidden";

  //     // 👇️ show div
  //     const box = document.getElementById("box");
  //     box.style.visibility = "visible";
  //     setShowText(!showText)
  //     event.currentTarget.disabled = true;
  //   });
  // }
    const handleSubmit = event => {
      event.currentTarget.disabled = true;
        if(Object.keys(data).length === 1) {
      setTimeout(function () {
        setShowText(!showText);
        toast.success("Verified", {
          toastId: "success1",
        });
        toast.info(<a style={{color: "grey"}} href={(`https://ropsten.etherscan.io/tx/${query.get("Txh")}`)}>Click Here to View on Etherscan</a>, {
            toastId: "info1",
          });
      }, 2000);
        } else {
          setReject(!showReject);
        }
        
     
    };
  

  return (
    <>
      {show && <div>
            <div id="box" style={{ visibility: "hidden" }}>
              {/* <button>Verified</button>
              <br />
              <button onClick={handleSubmit}>View on Blockchain</button> */}
            </div>
            {/* <button id="btn" className="verify-btn" onClick={handleSubmit}>
              Click me
            </button> */}
      <button id="btn" className="button verify-btn hide" onClick={handleSubmit}></button>
      {showText && <span class="verified stamp is-approved hide">Verified</span>}
      {showReject && <span class="rejected stamp is-nope">Declined</span>}
          </div>}
          

      {showElement ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            // background: "black",
            color: "white",
            fontSize: "30px",
            display: "flex",
            overflow: "hidden",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "roboto",
            opacity: showElement ? 1 : 0,
          }}
        >
          <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        <div>
          <Link className="hide" to="/">
            <button
              style={{ position: "absolute", left: "4%", top: "5%" }}
              className="button-40 goback"
            >
              Go Back
            </button>
          </Link>
          {Object.keys(data).length === 0 ? (
            <h2 className="NotFound">Certificate not Found on Blockchain : <span>{query.get("Txh")}</span></h2>
          ) : (
            <table className="styled-table">
              <div id="printcertificate" class="outer-border">
                <div class="inner-dotted-border">
                  <tbody>
                    {Object.keys(data).map((id, index) => {
                      // toast.success("Verified", {
                      //   toastId: "success1",
                      // });
                      // toast.info("This Cert is Present on Blockchain : ", {
                      //   toastId: "info1",
                      // });
                      return (
                        <tr key={id}>
                          {/* <th scope="row">{index + 1}</th> */}
                          <br />
                          <span class="certification">
                            Certificate of Completion
                          </span>
                          <br />
                          <span class="certify">
                            <i>This is to certify that</i>
                          </span>
                          <br />
                          <br />
                          <span class="name">
                            <td>{data[id].Name}</td>
                          </span>
                          <br />
                          <br />
                          <span class="certify">
                            <i>has successfully completed the certification</i>
                          </span>{" "}
                          <br />
                          <br />
                          <span class="fs-30">
                            <td>{data[id].Course}</td>
                          </span>{" "}
                          <br />
                          <br />
                          <span class="fs-20">
                            <i>
                              with score of{" "}
                              <b>
                                <td>{data[id].Cgpa}</td>
                              </b>
                            </i>
                            <br />
                            <br />
                            <span class="certify">
                              <b>dated</b>
                            </span>
                            <br />
                            <span class="fs-30">
                              <td>{data[id].Date}</td>
                            </span>
                            <br />
                          </span>{" "}
                          <span class="fs-22">
                            <QRCode
                              //concat the link with transactional hash**
                              value={data[id].Txh}
                            />
                          </span>
                          <br />
                          <span class="fs-23">
                            Transaction id: <br />{" "}
                            <b>
                              <td>{data[id].Txh}</td>
                            </b>
                          </span>
                        </tr>
                      );
                    })}
                  </tbody>
                </div>
              </div>
            </table>
          )}
          <form className="hide">
            <button
              onClick={onclickprint}
              style={{ position: "absolute", top: "55%", right: "4%" }}
              className="button-40 hide print"
            >
              Print
            </button>
          </form>
          
        </div>
      )}{" "}
    </>
  );
};

export default Search;
