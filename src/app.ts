import os from "os";
import config from "./config/config";
import express from "express";
import StockPrice from "./lib/StockPrice";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  const stock = new StockPrice(3, 5, 7, 8);
  res.send(stock);
});

const server: { address: Function; timeout: number } = app.listen(process.env.PORT || config.port, () => {
  const host = os.hostname();
  console.log("Listening at http://%s:%s in %s environment.", host, server.address().port, config.env);
});

server.timeout = 25000; // sets timeout to 25 seconds

export default app;
