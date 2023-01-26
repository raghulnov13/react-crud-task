import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Server/URL";

function Read() {
  const [apiData, setAPIData] = useState([]);
  const navigate = useNavigate();

  const updateUser = ({ firstname, lastname, checked, id }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("checked", checked);
    navigate("/update");
  };

  const deleteUser = async (id) => {
    await axios.delete(API_URL + id);
    callGetAPI();
  };

  const callGetAPI = async () => {
    const resp = await axios.get(API_URL);
    setAPIData(resp.data);
  };

  useEffect(() => {
    callGetAPI();
  }, []);
  return (
    <div>
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            {/* <th scope="col">No</th> */}
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Checked</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((data) => (
            <tr key={data.id}>
              {/* <th scope="row">{data.id}</th> */}
              <td>{data.firstname}</td>
              <td>{data.lastname}</td>
              <td>{data.checked ? "Checked" : "Not Checked"}</td>
              <td>
                <button
                  className="btn-danger"
                  onClick={() => deleteUser(data.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn-success"
                  onClick={() => updateUser(data)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
