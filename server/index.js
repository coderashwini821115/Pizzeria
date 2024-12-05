const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
// const { default: router } = require("./routes/order");
const app = express();
const { Order, Build } = require("./Schema.js");

app.use(cors());
app.use(express.json());

// const Order = mongoose.model('Order', {}, 'orders');
// app.use('/server/order', router)
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Pizzeria");
    console.log("Db connected");
  } catch (e) {
    throw e;
  }
};
app.get("/", (req, res) => {
  res.send("Welcome to backend");
});
app.get("/order", async (req, res) => {
  const Orders = await Order.find();
  // console.log(Orders)
  res.json(Orders);
  // res.send("Good")
});

app.get("/build", async (req, res) => {
  const Builds = await Build.find();
  console.log(Builds);
  res.json(Builds);
});
// app.get('/order', )
app.listen(8080, () => {
  connect();
  console.log("App started on 8080");
});
