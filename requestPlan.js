import fetch from "node-fetch";

const url = "http://localhost:4200/api/plan";

// change the request body to get differernt responses
const requestBody = {
  level: 0,
  interests: ["socializing"],
};

const response = await fetch(url, {
  method: "post",
  body: JSON.stringify(requestBody),
  headers: {
    "Content-Type": "application/json",
  },
});

const data = await response.json();

console.log(data);
