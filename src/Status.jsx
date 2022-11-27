import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "./Table";
import ReactLoading from "react-loading";

export const endpoint = "https://api.github.com/graphql";
export const headers = {
  "content-type": "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_GITHUB_API_KEY}`,
};
const graphqlQuerytotalCount = {
  operationName: "Issues",
  query: `query Issues($name: String!, $owner: String!, $filterBy: IssueFilters) {
    repository(name: $name, owner: $owner) {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: { name: "react", owner: "facebook" },
};

const graphqlQueryOpen = {
  operationName: "OpenState",
  query: `query OpenState($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }
  `,
  variables: {
    filterBy: {
      states: "OPEN",
    },
  },
};

const graphqlQueryClosed = {
  operationName: "ClosedState",
  query: `query ClosedState($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }
  `,
  variables: {
    filterBy: {
      states: "CLOSED",
    },
  },
};

const Status = () => {
  const [total, setTotal] = useState(null);
  const [open, setOpen] = useState(null);
  const [closed, setClosed] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchStatus = () => {
      try {
        const response = axios({
          url: endpoint,
          method: "post",
          headers: headers,
          data: graphqlQuerytotalCount,
        });
        const res = axios({
          url: endpoint,
          method: "post",
          headers: headers,
          data: graphqlQueryOpen,
        });
        const resp = axios({
          url: endpoint,
          method: "post",
          headers: headers,
          data: graphqlQueryClosed,
        });
        axios.all([response, res, resp]).then(
          axios.spread((...allData) => {
            const num = allData[0].data.data.repository.issues.totalCount;
            const num1 = allData[1].data.data.repository.issues.totalCount;
            const num2 = allData[2].data.data.repository.issues.totalCount;
            setTotal(num);
            setOpen(num1);
            setClosed(num2);
            setIsLoading(true);
          })
        );
      } catch (error) {
        if (error.response) {
          // Request made but the server responded with an error
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // Request made but no response is received from the server.
          console.log(error.request);
        } else {
          // Error occured while setting up the request
          console.log("Error", error.message);
        }
      }
    };

    return () => {
      fetchStatus();
    };
  }, [total, open, closed]);

  return (
    <>
      <div>
        <ul className="app-header">
          <li>
            <Link to="/">Status</Link>
          </li>
          <li>
            <Link to="/week">Week</Link>
          </li>
          <li>
            <Link to="/ratio">Ratio</Link>
          </li>
          <li>
            <Link to="/closure">Closure</Link>
          </li>
          <li>
            <Link to="/average">Average</Link>
          </li>
        </ul>
        <div>
          {!isLoading && (
            <ReactLoading
              type="cylon"
              color="#0000FF"
              height={100}
              width={50}
            />
          )}
          <h2>
            Total Count <p>{total}</p>
          </h2>
          <h2>
            Open State Count <p>{open}</p>
          </h2>
          <h2>
            Closed State Count <p>{closed}</p>
          </h2>
        </div>
        <div>
          <Table />
        </div>
      </div>
    </>
  );
};

export default Status;
