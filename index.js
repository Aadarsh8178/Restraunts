const express = require("express");
var cors = require("cors");
const faker = require("faker");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/", async (req, res) => {
  const restraunts = [];

  for (i = 0; i < 12; i++) {
    const restraunt = {};
    restraunt.image = faker.image.food();
    restraunt.name = faker.commerce.productName();
    restraunt.price = `₹${faker.commerce.price()}💸`;
    restraunt.description = faker.commerce.productDescription();
    restraunt.reviews = [];

    for (j = 0; j < Math.max(3, Math.random() * 5); j++) {
      restraunt.reviews.push({
        image: faker.image.food(),
        description: faker.lorem.sentence(),
      });
    }
    restraunts.push(restraunt);
  }

  res.status(200).send(restraunts);
});
app.listen(PORT, () => {
  console.log("Server is up on port " + PORT);
});
