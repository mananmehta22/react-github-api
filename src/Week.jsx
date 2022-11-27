import axios from "axios";
import React, { useEffect, useState } from "react";
import { headers, endpoint } from "./Status";
import { startOfWeek, endOfWeek, formatISO } from "date-fns";
import ReactLoading from "react-loading";

const curr = new Date();
const week1_start = formatISO(startOfWeek(curr));
const week1_end = formatISO(endOfWeek(curr));
const second_week_start = curr.setDate(curr.getDate() - 7);
const week2_start = formatISO(startOfWeek(second_week_start));
const week2_end = formatISO(endOfWeek(second_week_start));
const third_week_start = curr.setDate(curr.getDate() - 7);
const week3_start = formatISO(startOfWeek(third_week_start));
const week3_end = formatISO(endOfWeek(third_week_start));
const fourth_week_start = curr.setDate(curr.getDate() - 7);
const week4_start = formatISO(startOfWeek(fourth_week_start));
const week4_end = formatISO(endOfWeek(fourth_week_start));
const fifth_week_start = curr.setDate(curr.getDate() - 7);
const week5_start = formatISO(startOfWeek(fifth_week_start));
const week5_end = formatISO(endOfWeek(fifth_week_start));
const sixth_week_start = curr.setDate(curr.getDate() - 7);
const week6_start = formatISO(startOfWeek(sixth_week_start));
const week6_end = formatISO(endOfWeek(sixth_week_start));
const seventh_week_start = curr.setDate(curr.getDate() - 7);
const week7_start = formatISO(startOfWeek(seventh_week_start));
const week7_end = formatISO(endOfWeek(seventh_week_start));
const eighth_week_start = curr.setDate(curr.getDate() - 7);
const week8_start = formatISO(startOfWeek(eighth_week_start));
const week8_end = formatISO(endOfWeek(eighth_week_start));
const ninth_week_start = curr.setDate(curr.getDate() - 7);
const week9_start = formatISO(startOfWeek(ninth_week_start));
const week9_end = formatISO(endOfWeek(ninth_week_start));
const tenth_week_start = curr.setDate(curr.getDate() - 7);
const week10_start = formatISO(startOfWeek(tenth_week_start));
const week10_end = formatISO(endOfWeek(tenth_week_start));

const graphQLWeek1StartQuery = {
  operationName: "Week1",
  query: `query Week1($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week1_start}`,
    },
  },
};

const graphQLWeek2StartQuery = {
  operationName: "Week2",
  query: `query Week2($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week2_start}`,
    },
  },
};

const graphQLWeek3StartQuery = {
  operationName: "Week3",
  query: `query Week3($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week3_start}`,
    },
  },
};

const graphQLWeek4StartQuery = {
  operationName: "Week4",
  query: `query Week4($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week4_start}`,
    },
  },
};

const graphQLWeek5StartQuery = {
  operationName: "Week5",
  query: `query Week5($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week5_start}`,
    },
  },
};
const graphQLWeek6StartQuery = {
  operationName: "Week6",
  query: `query Week6($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week6_start}`,
    },
  },
};

const graphQLWeek7StartQuery = {
  operationName: "Week7",
  query: `query Week7($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week7_start}`,
    },
  },
};

const graphQLWeek8StartQuery = {
  operationName: "Week5",
  query: `query Week5($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week8_start}`,
    },
  },
};

const graphQLWeek9StartQuery = {
  operationName: "Week9",
  query: `query Week9($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week9_start}`,
    },
  },
};

const graphQLWeek10StartQuery = {
  operationName: "Week10",
  query: `query Week10($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week10_start}`,
    },
  },
};

const graphQLWeek1EndQuery = {
  operationName: "Week1",
  query: `query Week1($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week1_end}`,
    },
  },
};
const graphQLWeek2EndQuery = {
  operationName: "Week2",
  query: `query Week2($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week2_end}`,
    },
  },
};

const graphQLWeek3EndQuery = {
  operationName: "Week3",
  query: `query Week3($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week3_end}`,
    },
  },
};
const graphQLWeek4EndQuery = {
  operationName: "Week4",
  query: `query Week4($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week4_end}`,
    },
  },
};

const graphQLWeek5EndQuery = {
  operationName: "Week5",
  query: `query Week5($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week5_end}`,
    },
  },
};

const graphQLWeek6EndQuery = {
  operationName: "Week6",
  query: `query Week6($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week6_end}`,
    },
  },
};

const graphQLWeek7EndQuery = {
  operationName: "Week7",
  query: `query Week7($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week7_end}`,
    },
  },
};

const graphQLWeek8EndQuery = {
  operationName: "Week8",
  query: `query Week8($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week8_end}`,
    },
  },
};

const graphQLWeek9EndQuery = {
  operationName: "Week9",
  query: `query Week9($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week9_end}`,
    },
  },
};

const graphQLWeek10EndQuery = {
  operationName: "Week10",
  query: `query Week10($filterBy: IssueFilters) { 
    repository(owner:"facebook", name:"react") {
      issues(filterBy: $filterBy) {
        totalCount
      }
    }
  }`,
  variables: {
    filterBy: {
      since: `${week10_end}`,
    },
  },
};

const Week = () => {
  const [firstWeek, setFirstWeek] = useState([]);
  const [secondWeek, setSecondWeek] = useState([]);
  const [thirdWeek, setThirdWeek] = useState([]);
  const [fourthWeek, setFourthWeek] = useState([]);
  const [fifthWeek, setFifthWeek] = useState([]);
  const [sixthWeek, setSixthWeek] = useState([]);
  const [seventhWeek, setSeventhWeek] = useState([]);
  const [eighthWeek, setEighthWeek] = useState([]);
  const [ninthWeek, setNinthWeek] = useState([]);
  const [tenthWeek, setTenthWeek] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchStatus = () => {
    try {
      const response_first_week_start = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek1StartQuery,
      });
      const response_first_week_end = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek1EndQuery,
      });
      const response_second_week_start = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek2StartQuery,
      });
      const response_second_week_end = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek2EndQuery,
      });
      const response_third_week_start = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek3StartQuery,
      });
      const response_third_week_end = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek3EndQuery,
      });
      const response_fourth_week_start = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek4StartQuery,
      });
      const response_fourth_week_end = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek4EndQuery,
      });
      const response_fifth_week_start = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek5StartQuery,
      });
      const response_fifth_week_end = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek5EndQuery,
      });
      const response_sixth_week_start = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek6StartQuery,
      });
      const response_sixth_week_end = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek6EndQuery,
      });
      const response_seventh_week_start = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek7StartQuery,
      });
      const response_seventh_week_end = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek7EndQuery,
      });
      const response_eighth_week_start = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek8StartQuery,
      });
      const response_eighth_week_end = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek8EndQuery,
      });
      const response_ninth_week_start = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek9StartQuery,
      });
      const response_ninth_week_end = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek9EndQuery,
      });
      const response_tenth_week_start = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek10StartQuery,
      });
      const response_tenth_week_end = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek10EndQuery,
      });
      axios
        .all([
          response_first_week_start,
          response_first_week_end,
          response_second_week_start,
          response_second_week_end,
          response_third_week_start,
          response_third_week_end,
          response_fourth_week_start,
          response_fourth_week_end,
          response_fifth_week_start,
          response_fifth_week_end,
          response_sixth_week_start,
          response_sixth_week_end,
          response_seventh_week_start,
          response_seventh_week_end,
          response_eighth_week_start,
          response_eighth_week_end,
          response_ninth_week_start,
          response_ninth_week_end,
          response_tenth_week_start,
          response_tenth_week_end,
        ])
        .then(
          axios.spread((...allData) => {
            const num_first_week_start =
              allData[0].data.data.repository.issues.totalCount;
            const num_first_week_end =
              allData[1].data.data.repository.issues.totalCount;
            const num_second_week_start =
              allData[2].data.data.repository.issues.totalCount;
            const num_second_week_end =
              allData[3].data.data.repository.issues.totalCount;
            const num_third_week_start =
              allData[4].data.data.repository.issues.totalCount;
            const num_third_week_end =
              allData[5].data.data.repository.issues.totalCount;
            const num_fourth_week_start =
              allData[6].data.data.repository.issues.totalCount;
            const num_fourth_week_end =
              allData[7].data.data.repository.issues.totalCount;
            const num_fifth_week_start =
              allData[8].data.data.repository.issues.totalCount;
            const num_fifth_week_end =
              allData[9].data.data.repository.issues.totalCount;
            const num_sixth_week_start =
              allData[10].data.data.repository.issues.totalCount;
            const num_sixth_week_end =
              allData[11].data.data.repository.issues.totalCount;
            const num_seventh_week_start =
              allData[12].data.data.repository.issues.totalCount;
            const num_seventh_week_end =
              allData[13].data.data.repository.issues.totalCount;
            const num_eighth_week_start =
              allData[14].data.data.repository.issues.totalCount;
            const num_eighth_week_end =
              allData[15].data.data.repository.issues.totalCount;
            const num_ninth_week_start =
              allData[16].data.data.repository.issues.totalCount;
            const num_ninth_week_end =
              allData[17].data.data.repository.issues.totalCount;
            const num_tenth_week_start =
              allData[18].data.data.repository.issues.totalCount;
            const num_tenth_week_end =
              allData[19].data.data.repository.issues.totalCount;
            setFirstWeek((prevWeek) => [...prevWeek, num_first_week_start]);
            setSecondWeek((prevWeek) => [...prevWeek, num_second_week_start]);
            setThirdWeek((prevWeek) => [...prevWeek, num_third_week_start]);
            setFourthWeek((prevWeek) => [...prevWeek, num_fourth_week_start]);
            setFifthWeek((prevWeek) => [...prevWeek, num_fifth_week_start]);
            setSixthWeek((prevWeek) => [...prevWeek, num_sixth_week_start]);
            setSeventhWeek((prevWeek) => [...prevWeek, num_seventh_week_start]);
            setEighthWeek((prevWeek) => [...prevWeek, num_eighth_week_start]);
            setNinthWeek((prevWeek) => [...prevWeek, num_ninth_week_start]);
            setTenthWeek((prevWeek) => [...prevWeek, num_tenth_week_start]);
            setFirstWeek((prevWeek) => [...prevWeek, num_first_week_end]);
            setSecondWeek((prevWeek) => [...prevWeek, num_second_week_end]);
            setThirdWeek((prevWeek) => [...prevWeek, num_third_week_end]);
            setFourthWeek((prevWeek) => [...prevWeek, num_fourth_week_end]);
            setFifthWeek((prevWeek) => [...prevWeek, num_fifth_week_end]);
            setSixthWeek((prevWeek) => [...prevWeek, num_sixth_week_end]);
            setSeventhWeek((prevWeek) => [...prevWeek, num_seventh_week_end]);
            setEighthWeek((prevWeek) => [...prevWeek, num_eighth_week_end]);
            setNinthWeek((prevWeek) => [...prevWeek, num_ninth_week_end]);
            setTenthWeek((prevWeek) => [...prevWeek, num_tenth_week_end]);
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

  useEffect(() => {
    fetchStatus();
  }, []);

  const Subtraction = (arr) => {
    return arr[0] > arr[1] ? arr[0] - arr[1] : arr[1] - arr[0];
  };

  return (
    <>
      <div>
        {isLoading ? (
          <>
            <h2>
              Week One Stats: <div>{Number(Subtraction(firstWeek))} Issues</div>
            </h2>
            <h2>
              Week Two Stats:{" "}
              <div>{Number(Subtraction(secondWeek))} Issues</div>
            </h2>
            <h2>
              Week Three Stats:{" "}
              <div>{Number(Subtraction(thirdWeek))} Issues</div>
            </h2>
            <h2>
              Week Fourth Stats:{" "}
              <div>{Number(Subtraction(fourthWeek))} Issues</div>
            </h2>
            <h2>
              Week Five Stats:{" "}
              <div>{Number(Subtraction(fifthWeek))} Issues</div>
            </h2>
            <h2>
              Week Sixth Stats:{" "}
              <div>{Number(Subtraction(sixthWeek))} Issues</div>
            </h2>
            <h2>
              Week Seventh Stats:{" "}
              <div>{Number(Subtraction(seventhWeek))} Issues</div>
            </h2>
            <h2>
              Week Eighth Stats:{" "}
              <div>{Number(Subtraction(eighthWeek))} Issues</div>
            </h2>
            <h2>
              Week Ninth Stats:{" "}
              <div>{Number(Subtraction(ninthWeek))} Issues</div>
            </h2>
            <h2>
              Week Tenth Stats:{" "}
              <div>{Number(Subtraction(tenthWeek))} Issues</div>
            </h2>
          </>
        ) : (
          <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
        )}
        <a href="/">
          <button>Back</button>
        </a>
      </div>
    </>
  );
};

export default Week;
