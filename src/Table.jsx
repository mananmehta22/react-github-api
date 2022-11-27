import React, { useEffect, useState } from "react";
import CheckOutsideClick from "./CheckOutsideClick";
import "./Table.css";
import { XSquare } from "react-feather";

const Table = () => {
  const [table, setTable] = useState(false);
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort(
        (a, b) => Date.parse(b[col]) - Date.parse(a[col])
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort(
        (a, b) => Date.parse(a[col]) - Date.parse(b[col])
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  const toggleTable = () => {
    setTable((prevTable) => !prevTable);
  };
  if (table) {
    document.body.classList.add("active-table");
  } else {
    document.body.classList.remove("active-table");
  }

  const fetchData = () => {
    fetch(`https://api.github.com/repos/octocat/hello-world/issues?`)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <button onClick={toggleTable} className="btn-table">
        Open Table
      </button>

      {table && (
        <div className="table">
          <div className="overlay">
            <CheckOutsideClick onClickOutside={toggleTable}>
              <div className="table-content">
                <table>
                  <tr>
                    <th>ID</th>
                    <th>State</th>
                    <th>Number</th>
                    <th onClick={() => sorting("created_at")}>Created At</th>
                  </tr>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.state}</td>
                      <td>{item.number}</td>
                      <td>{item.created_at.slice(0, 10)}</td>
                    </tr>
                  ))}
                </table>
                <XSquare className="close-table" onClick={toggleTable} />
              </div>
            </CheckOutsideClick>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
