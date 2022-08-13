import express from "express";
import createPlan from "./createPlan.js";

const app = express();
const PORT = 4200;
app.use(express.json());

// call the createPlan function with request params
// and return the function output as response
app.post("/api/plan", (request, response) => {
  const { level, interests } = request.body;
  const fiveDayPlan = createPlan(level, interests);
  response.status(200).json(fiveDayPlan);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
