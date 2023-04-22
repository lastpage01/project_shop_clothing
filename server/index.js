import express from "express";
import cors from "cors";

import db from "./DAL/database";
import userRouter from "./routers/users";
import productRouter from "./routers/products";
import detailCategoryRouter from "./routers/detailCategory";
import brandRouter from "./routers/brands";
import supplierRouter from "./routers/supplier";
import categoryRouter from "./routers/category";
import detailProRouter from "./routers/detailProduct";
import clientRouter from "./routers/client";
import billOfSaleRouter from "./routers/billOfSale";
import detailBillOfSaleRouter from "./routers/detailBillOfSale";
import adminRouter from "./routers/admin";
// import { authenticateToken } from "./common/authentication";

const app = express();
const post = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Sever Todo List fwU89cavVmHOklBr");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/detailCategory", detailCategoryRouter);
app.use("/api/brands", brandRouter);
app.use("/api/suppliers", supplierRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/detailProduct", detailProRouter);
app.use("/api/clients", clientRouter);
app.use("/api/billOfSale", billOfSaleRouter);
app.use("/api/detailBillOfSale", detailBillOfSaleRouter);
app.use("/api/admins", adminRouter);

app.listen(post, (res, req) => {
  db()
    .then(() => {
      console.log("database is connected !");
    })
    .catch((err) => {
      throw err;
    });
});
