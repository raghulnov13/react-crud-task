import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Server/URL";

function Update() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [id, setId] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const updateUsers = async (e) => {
    e.preventDefault();
    await axios.put(API_URL + id, {
      firstname,
      lastname,
      checked,
    });
    navigate('/read');
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstname"));
    setLastName(localStorage.getItem("lastname"));
    setChecked(localStorage.getItem("checked"));
  }, []);
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>{" "}
        <br />
        <div>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label class="form-check-label" for="flexCheck">
            <input
              type="checkbox"
              id="flexCheck"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            Agree The Terms & Conditions
          </label>
        </div>
        <div>
          <button className="btn-primary" onClick={updateUsers}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
