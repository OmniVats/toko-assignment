import { data } from "./data.js";

const splitIntoLevels = (levelString) => levelString.split("|");

// studentLevel: number
// studentInterests: string[] minLength=1, maxLength=2
const createPlan = (studentLevel, studentInterests) => {
  const [primary, secondary = ""] = studentInterests;

  const allTopics = data.filter((topic) => {
    const isTopicOfInterest =
      topic.associated_interest === primary ||
      topic.associated_interest === secondary;

    if (typeof topic.allowed_levels === "number") {
      return topic.allowed_levels === studentLevel && isTopicOfInterest;
    } else {
      const levels = splitIntoLevels(topic.allowed_levels);
      return levels.includes(String(studentLevel)) && isTopicOfInterest;
    }
  });

  const fiveDayPlan = allTopics.slice(0, 6);

  return fiveDayPlan;
};

export default createPlan;
