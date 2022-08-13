# Toko Code Challenge
Take home assignment solution for Toko Tutor.

### Basic Info
**Language** - JavaScript / Node (ES6+)

**Libraries** - Express, Nodemon, Node-Fetch

**Total Time** - 85 mins
- Understanding requirements and writing the method - 25 mins
- Implementing and testing the endpoint - 45 mins
- Writing the README - 15 mins

### How to Run
Start the server: `yarn && yarn start`
> Server running on port 4200

Make the request: `node requestPlan.js`
> Feel free to modify the request body in `requestPlan.js` to see different responses

### Approach
My primary focus was to get something working within 1.5 hrs with the secondary focus of making the code simple and readable.

### Assumptions & Tradeoffs
1. The POST request will always have the type `{ level: number, interests: string[] }`
    - PRO - no need to validate the request body server side
    - CON - not representative of a real world scenario
2. Student Interests are unranked i.e. `["socializing", "work"] == ["work", "socializing"]`
    - PRO - simplified filtering of data
    - CON - lower accuracy than ranked interests
3. There will be enough topics in the dataset to create a 5 day plan as per the request parameters

### User-Plan Data Model
```typescript
type Topic = {
    name: string,
    emoji: string,
    allowed_levels: number | string,
    associated_interest: string
}

type FiveDayPlan = Array<Topic, 5>

type UserPlan = {
    currentLevel: number,           // the student's proficiency can go up or down
    currentInterests: string[],     // the student's interests can change over time
    currentDay: 1 | 2 | 3 | 4 | 5   // assuming there are only 5 day plans
    currentProgress: number,        // % of progress calculated satisfactory / totalDays * 100
}
```

### Endpoint
The POST request endpoint is `/api/plan`. The `/api/` part is pretty standard. The `/plan` becuase of brevity.
