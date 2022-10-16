import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./AddEdit.css";
import fireDb from "../config";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const { name, email, contact } = state;
  const history = useHistory();
  
  const {id} = useParams();

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
  }, [id]); 

  useEffect(() => {
    if(id) {
      setState({...data[id]})
    } else {
      setState({...initialState})
    }

    return () => {
      setState({...initialState})
       
    }
  }, [id, data])

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !contact){
      toast.error("Please provide value in each input");
    } else {
      if(!id) {
        fireDb.child("certissued").push(state, (err) => {
          if(err) {
            toast.error(err);
          } else {
            toast.success("Cert Issued Successfully");
          }
        });
      } else {
        fireDb.child(`certissued/${id}`).set(state, (err) => {
          if(err) {
            toast.error(err);
          } else {
            toast.success("Cert Updated Successfully");
          }
        });
      }
     
      setTimeout(() => history.push("/"), 500);
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          value={name || ""}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={email || ""}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="contact">Contact</label>
        <br />
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your Contact No"
          value={contact || ""}
          onChange={handleInputChange}
        />
        <input type="submit" value={id ? "Update" : "Save"}  />
      </form>
    </div>
  );
};

export default AddEdit;
