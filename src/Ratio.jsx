import axios from "axios";
import React, { useEffect, useState, usestates } from "react";
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

const graphQLWeek1StartQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek2StartQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek3StartQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek4StartQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek5StartQueryOpen = {
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
      states: "OPEN",
    },
  },
};
const graphQLWeek6StartQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek7StartQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek8StartQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek9StartQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek10StartQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek1EndQueryOpen = {
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
      states: "OPEN",
    },
  },
};
const graphQLWeek2EndQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek3EndQueryOpen = {
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
      states: "OPEN",
    },
  },
};
const graphQLWeek4EndQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek5EndQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek6EndQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek7EndQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek8EndQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek9EndQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek10EndQueryOpen = {
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
      states: "OPEN",
    },
  },
};

const graphQLWeek1StartQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek2StartQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek3StartQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek4StartQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek5StartQueryClosed = {
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
      states: "CLOSED",
    },
  },
};
const graphQLWeek6StartQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek7StartQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek8StartQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek9StartQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek10StartQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek1EndQueryClosed = {
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
      states: "CLOSED",
    },
  },
};
const graphQLWeek2EndQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek3EndQueryClosed = {
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
      states: "CLOSED",
    },
  },
};
const graphQLWeek4EndQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek5EndQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek6EndQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek7EndQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek8EndQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek9EndQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const graphQLWeek10EndQueryClosed = {
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
      states: "CLOSED",
    },
  },
};

const Ratio = () => {
  const [firstWeekOpen, setFirstWeekOpen] = useState([]);
  const [secondWeekOpen, setSecondWeekOpen] = useState([]);
  const [thirdWeekOpen, setThirdWeekOpen] = useState([]);
  const [fourthWeekOpen, setFourthWeekOpen] = useState([]);
  const [fifthWeekOpen, setFifthWeekOpen] = useState([]);
  const [sixthWeekOpen, setSixthWeekOpen] = useState([]);
  const [seventhWeekOpen, setSeventhWeekOpen] = useState([]);
  const [eighthWeekOpen, setEighthWeekOpen] = useState([]);
  const [ninthWeekOpen, setNinthWeekOpen] = useState([]);
  const [tenthWeekOpen, setTenthWeekOpen] = useState([]);
  const [firstWeekClosed, setFirstWeekClosed] = useState([]);
  const [secondWeekClosed, setSecondWeekClosed] = useState([]);
  const [thirdWeekClosed, setThirdWeekClosed] = useState([]);
  const [fourthWeekClosed, setFourthWeekClosed] = useState([]);
  const [fifthWeekClosed, setFifthWeekClosed] = useState([]);
  const [sixthWeekClosed, setSixthWeekClosed] = useState([]);
  const [seventhWeekClosed, setSeventhWeekClosed] = useState([]);
  const [eighthWeekClosed, setEighthWeekClosed] = useState([]);
  const [ninthWeekClosed, setNinthWeekClosed] = useState([]);
  const [tenthWeekClosed, setTenthWeekClosed] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchStatus = () => {
    try {
      const response_first_week_start_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek1StartQueryOpen,
      });
      const response_first_week_end_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek1EndQueryOpen,
      });
      const response_second_week_start_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek2StartQueryOpen,
      });
      const response_second_week_end_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek2EndQueryOpen,
      });
      const response_third_week_start_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek3StartQueryOpen,
      });
      const response_third_week_end_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek3EndQueryOpen,
      });
      const response_fourth_week_start_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek4StartQueryOpen,
      });
      const response_fourth_week_end_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek4EndQueryOpen,
      });
      const response_fifth_week_start_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek5StartQueryOpen,
      });
      const response_fifth_week_end_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek5EndQueryOpen,
      });
      const response_sixth_week_start_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek6StartQueryOpen,
      });
      const response_sixth_week_end_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek6EndQueryOpen,
      });
      const response_seventh_week_start_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek7StartQueryOpen,
      });
      const response_seventh_week_end_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek7EndQueryOpen,
      });
      const response_eighth_week_start_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek8StartQueryOpen,
      });
      const response_eighth_week_end_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek8EndQueryOpen,
      });
      const response_ninth_week_start_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek9StartQueryOpen,
      });
      const response_ninth_week_end_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek9EndQueryOpen,
      });
      const response_tenth_week_start_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek10StartQueryOpen,
      });
      const response_tenth_week_end_open = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek10EndQueryOpen,
      });
      const response_first_week_start_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek1StartQueryClosed,
      });
      const response_first_week_end_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek1EndQueryClosed,
      });
      const response_second_week_start_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek2StartQueryClosed,
      });
      const response_second_week_end_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek2EndQueryClosed,
      });
      const response_third_week_start_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek3StartQueryClosed,
      });
      const response_third_week_end_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek3EndQueryClosed,
      });
      const response_fourth_week_start_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek4StartQueryClosed,
      });
      const response_fourth_week_end_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek4EndQueryClosed,
      });
      const response_fifth_week_start_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek5StartQueryClosed,
      });
      const response_fifth_week_end_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek5EndQueryClosed,
      });
      const response_sixth_week_start_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek6StartQueryClosed,
      });
      const response_sixth_week_end_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek6EndQueryClosed,
      });
      const response_seventh_week_start_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek7StartQueryClosed,
      });
      const response_seventh_week_end_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek7EndQueryClosed,
      });
      const response_eighth_week_start_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek8StartQueryClosed,
      });
      const response_eighth_week_end_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek8EndQueryClosed,
      });
      const response_ninth_week_start_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek9StartQueryClosed,
      });
      const response_ninth_week_end_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek9EndQueryClosed,
      });
      const response_tenth_week_start_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek10StartQueryClosed,
      });
      const response_tenth_week_end_closed = axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphQLWeek10EndQueryClosed,
      });
      axios
        .all([
          response_first_week_start_open,
          response_first_week_end_open,
          response_second_week_start_open,
          response_second_week_end_open,
          response_third_week_start_open,
          response_third_week_end_open,
          response_fourth_week_start_open,
          response_fourth_week_end_open,
          response_fifth_week_start_open,
          response_fifth_week_end_open,
          response_sixth_week_start_open,
          response_sixth_week_end_open,
          response_seventh_week_start_open,
          response_seventh_week_end_open,
          response_eighth_week_start_open,
          response_eighth_week_end_open,
          response_ninth_week_start_open,
          response_ninth_week_end_open,
          response_tenth_week_start_open,
          response_tenth_week_end_open,
          response_first_week_start_closed,
          response_first_week_end_closed,
          response_second_week_start_closed,
          response_second_week_end_closed,
          response_third_week_start_closed,
          response_third_week_end_closed,
          response_fourth_week_start_closed,
          response_fourth_week_end_closed,
          response_fifth_week_start_closed,
          response_fifth_week_end_closed,
          response_sixth_week_start_closed,
          response_sixth_week_end_closed,
          response_seventh_week_start_closed,
          response_seventh_week_end_closed,
          response_eighth_week_start_closed,
          response_eighth_week_end_closed,
          response_ninth_week_start_closed,
          response_ninth_week_end_closed,
          response_tenth_week_start_closed,
          response_tenth_week_end_closed,
        ])
        .then(
          axios.spread((...allData) => {
            const num_first_week_start_open =
              allData[0].data.data.repository.issues.totalCount;
            const num_first_week_end_open =
              allData[1].data.data.repository.issues.totalCount;
            const num_second_week_start_open =
              allData[2].data.data.repository.issues.totalCount;
            const num_second_week_end_open =
              allData[3].data.data.repository.issues.totalCount;
            const num_third_week_start_open =
              allData[4].data.data.repository.issues.totalCount;
            const num_third_week_end_open =
              allData[5].data.data.repository.issues.totalCount;
            const num_fourth_week_start_open =
              allData[6].data.data.repository.issues.totalCount;
            const num_fourth_week_end_open =
              allData[7].data.data.repository.issues.totalCount;
            const num_fifth_week_start_open =
              allData[8].data.data.repository.issues.totalCount;
            const num_fifth_week_end_open =
              allData[9].data.data.repository.issues.totalCount;
            const num_sixth_week_start_open =
              allData[10].data.data.repository.issues.totalCount;
            const num_sixth_week_end_open =
              allData[11].data.data.repository.issues.totalCount;
            const num_seventh_week_start_open =
              allData[12].data.data.repository.issues.totalCount;
            const num_seventh_week_end_open =
              allData[13].data.data.repository.issues.totalCount;
            const num_eighth_week_start_open =
              allData[14].data.data.repository.issues.totalCount;
            const num_eighth_week_end_open =
              allData[15].data.data.repository.issues.totalCount;
            const num_ninth_week_start_open =
              allData[16].data.data.repository.issues.totalCount;
            const num_ninth_week_end_open =
              allData[17].data.data.repository.issues.totalCount;
            const num_tenth_week_start_open =
              allData[18].data.data.repository.issues.totalCount;
            const num_tenth_week_end_open =
              allData[19].data.data.repository.issues.totalCount;
            const num_first_week_start_closed =
              allData[20].data.data.repository.issues.totalCount;
            const num_first_week_end_closed =
              allData[21].data.data.repository.issues.totalCount;
            const num_second_week_start_closed =
              allData[22].data.data.repository.issues.totalCount;
            const num_second_week_end_closed =
              allData[23].data.data.repository.issues.totalCount;
            const num_third_week_start_closed =
              allData[24].data.data.repository.issues.totalCount;
            const num_third_week_end_closed =
              allData[25].data.data.repository.issues.totalCount;
            const num_fourth_week_start_closed =
              allData[26].data.data.repository.issues.totalCount;
            const num_fourth_week_end_closed =
              allData[27].data.data.repository.issues.totalCount;
            const num_fifth_week_start_closed =
              allData[28].data.data.repository.issues.totalCount;
            const num_fifth_week_end_closed =
              allData[29].data.data.repository.issues.totalCount;
            const num_sixth_week_start_closed =
              allData[30].data.data.repository.issues.totalCount;
            const num_sixth_week_end_closed =
              allData[31].data.data.repository.issues.totalCount;
            const num_seventh_week_start_closed =
              allData[32].data.data.repository.issues.totalCount;
            const num_seventh_week_end_closed =
              allData[33].data.data.repository.issues.totalCount;
            const num_eighth_week_start_closed =
              allData[34].data.data.repository.issues.totalCount;
            const num_eighth_week_end_closed =
              allData[35].data.data.repository.issues.totalCount;
            const num_ninth_week_start_closed =
              allData[36].data.data.repository.issues.totalCount;
            const num_ninth_week_end_closed =
              allData[37].data.data.repository.issues.totalCount;
            const num_tenth_week_start_closed =
              allData[38].data.data.repository.issues.totalCount;
            const num_tenth_week_end_closed =
              allData[39].data.data.repository.issues.totalCount;
            setFirstWeekOpen((prevWeek) => [
              ...prevWeek,
              num_first_week_start_open,
            ]);
            setSecondWeekOpen((prevWeek) => [
              ...prevWeek,
              num_second_week_start_open,
            ]);
            setThirdWeekOpen((prevWeek) => [
              ...prevWeek,
              num_third_week_start_open,
            ]);
            setFourthWeekOpen((prevWeek) => [
              ...prevWeek,
              num_fourth_week_start_open,
            ]);
            setFifthWeekOpen((prevWeek) => [
              ...prevWeek,
              num_fifth_week_start_open,
            ]);
            setSixthWeekOpen((prevWeek) => [
              ...prevWeek,
              num_sixth_week_start_open,
            ]);
            setSeventhWeekOpen((prevWeek) => [
              ...prevWeek,
              num_seventh_week_start_open,
            ]);
            setEighthWeekOpen((prevWeek) => [
              ...prevWeek,
              num_eighth_week_start_open,
            ]);
            setNinthWeekOpen((prevWeek) => [
              ...prevWeek,
              num_ninth_week_start_open,
            ]);
            setTenthWeekOpen((prevWeek) => [
              ...prevWeek,
              num_tenth_week_start_open,
            ]);
            setFirstWeekOpen((prevWeek) => [
              ...prevWeek,
              num_first_week_end_open,
            ]);
            setSecondWeekOpen((prevWeek) => [
              ...prevWeek,
              num_second_week_end_open,
            ]);
            setThirdWeekOpen((prevWeek) => [
              ...prevWeek,
              num_third_week_end_open,
            ]);
            setFourthWeekOpen((prevWeek) => [
              ...prevWeek,
              num_fourth_week_end_open,
            ]);
            setFifthWeekOpen((prevWeek) => [
              ...prevWeek,
              num_fifth_week_end_open,
            ]);
            setSixthWeekOpen((prevWeek) => [
              ...prevWeek,
              num_sixth_week_end_open,
            ]);
            setSeventhWeekOpen((prevWeek) => [
              ...prevWeek,
              num_seventh_week_end_open,
            ]);
            setEighthWeekOpen((prevWeek) => [
              ...prevWeek,
              num_eighth_week_end_open,
            ]);
            setNinthWeekOpen((prevWeek) => [
              ...prevWeek,
              num_ninth_week_end_open,
            ]);
            setTenthWeekOpen((prevWeek) => [
              ...prevWeek,
              num_tenth_week_end_open,
            ]);
            setFirstWeekClosed((prevWeek) => [
              ...prevWeek,
              num_first_week_start_closed,
            ]);
            setSecondWeekClosed((prevWeek) => [
              ...prevWeek,
              num_second_week_start_closed,
            ]);
            setThirdWeekClosed((prevWeek) => [
              ...prevWeek,
              num_third_week_start_closed,
            ]);
            setFourthWeekClosed((prevWeek) => [
              ...prevWeek,
              num_fourth_week_start_closed,
            ]);
            setFifthWeekClosed((prevWeek) => [
              ...prevWeek,
              num_fifth_week_start_closed,
            ]);
            setSixthWeekClosed((prevWeek) => [
              ...prevWeek,
              num_sixth_week_start_closed,
            ]);
            setSeventhWeekClosed((prevWeek) => [
              ...prevWeek,
              num_seventh_week_start_closed,
            ]);
            setEighthWeekClosed((prevWeek) => [
              ...prevWeek,
              num_eighth_week_start_closed,
            ]);
            setNinthWeekClosed((prevWeek) => [
              ...prevWeek,
              num_ninth_week_start_closed,
            ]);
            setTenthWeekClosed((prevWeek) => [
              ...prevWeek,
              num_tenth_week_start_closed,
            ]);
            setFirstWeekClosed((prevWeek) => [
              ...prevWeek,
              num_first_week_end_closed,
            ]);
            setSecondWeekClosed((prevWeek) => [
              ...prevWeek,
              num_second_week_end_closed,
            ]);
            setThirdWeekClosed((prevWeek) => [
              ...prevWeek,
              num_third_week_end_closed,
            ]);
            setFourthWeekClosed((prevWeek) => [
              ...prevWeek,
              num_fourth_week_end_closed,
            ]);
            setFifthWeekClosed((prevWeek) => [
              ...prevWeek,
              num_fifth_week_end_closed,
            ]);
            setSixthWeekClosed((prevWeek) => [
              ...prevWeek,
              num_sixth_week_end_closed,
            ]);
            setSeventhWeekClosed((prevWeek) => [
              ...prevWeek,
              num_seventh_week_end_closed,
            ]);
            setEighthWeekClosed((prevWeek) => [
              ...prevWeek,
              num_eighth_week_end_closed,
            ]);
            setNinthWeekClosed((prevWeek) => [
              ...prevWeek,
              num_ninth_week_end_closed,
            ]);
            setTenthWeekClosed((prevWeek) => [
              ...prevWeek,
              num_tenth_week_end_closed,
            ]);
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
      {isLoading ? (
        <>
          <h2>
            Week One Stats:{" "}
            <div>
              {Number(
                Subtraction(firstWeekOpen) / Subtraction(firstWeekClosed)
              ).toFixed(2)}{" "}
            </div>
          </h2>
          <h2>
            Week Two Stats:{" "}
            <div>
              {Number(
                Subtraction(secondWeekOpen) / Subtraction(secondWeekClosed)
              ).toFixed(2)}{" "}
            </div>
          </h2>
          <h2>
            Week Three Stats:{" "}
            <div>
              {Number(
                Subtraction(thirdWeekOpen) / Subtraction(thirdWeekClosed)
              ).toFixed(2)}{" "}
            </div>
          </h2>
          <h2>
            Week Fourth Stats:{" "}
            <div>
              {Number(
                Subtraction(fourthWeekOpen) / Subtraction(fourthWeekClosed)
              ).toFixed(2)}{" "}
            </div>
          </h2>
          <h2>
            Week Five Stats:{" "}
            <div>
              {Number(
                Subtraction(fifthWeekOpen) / Subtraction(fifthWeekClosed)
              ).toFixed(2)}{" "}
            </div>
          </h2>
          <h2>
            Week Sixth Stats:{" "}
            <div>
              {Number(
                Subtraction(sixthWeekOpen) / Subtraction(sixthWeekClosed)
              ).toFixed(2)}{" "}
            </div>
          </h2>
          <h2>
            Week Seventh Stats:{" "}
            <div>
              {Number(
                Subtraction(seventhWeekOpen) / Subtraction(seventhWeekClosed)
              ).toFixed(2)}{" "}
            </div>
          </h2>
          <h2>
            Week Eighth Stats:{" "}
            <div>
              {Number(
                Subtraction(eighthWeekOpen) / Subtraction(eighthWeekClosed)
              ).toFixed(2)}{" "}
            </div>
          </h2>
          <h2>
            Week Ninth Stats:{" "}
            <div>
              {Number(
                Subtraction(ninthWeekOpen) / Subtraction(ninthWeekClosed)
              ).toFixed(2)}{" "}
            </div>
          </h2>
          <h2>
            Week Tenth Stats:{" "}
            <div>
              {Number(
                Subtraction(tenthWeekOpen) / Subtraction(tenthWeekClosed)
              ).toFixed(2)}{" "}
            </div>
          </h2>
        </>
      ) : (
        <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
      )}
      <a href="/">
        <button>Back</button>
      </a>
    </>
  );
};

export default Ratio;
