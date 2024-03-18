const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  const data = req.body.data;
  const userId = "anubhav_kumar_01082002";
  const email = "anubhav0224@chitkara.edu.in";
  const rollNumber = "2110990564";

  const oddNumbers = [];
  const evenNumbers = [];
  const alphabets = [];

  data.forEach((item) => {
    if (typeof item === "number") {
      if (item % 2 === 0) {
        evenNumbers.push(item);
      } else {
        oddNumbers.push(item);
      }
    } else if (typeof item === "string") {
      if (/^[A-Za-z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      }
    }
  });

  const response = {
    is_success: true,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets,
  };

  res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
