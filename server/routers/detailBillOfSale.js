import express from "express";
import {
  getAllDetailBillOfSale,
  getDetailBillOfSaleByIdBill,
} from "../DAL/models/detailBillOfSaleModel";

const detailBillOfSaleRouter = express.Router();

detailBillOfSaleRouter.get("/", (req, res) => {
  getAllDetailBillOfSale().then((data) => {
    res.json({ count: data.length, detailBill: data });
  });
});
detailBillOfSaleRouter.get("/getDetailBillOfSaleByIdBill/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    getDetailBillOfSaleByIdBill(id).then((data) => {
      res.json({ count: data.length, detailBill: data });
    });
  } else res.status(404).send("không tìm thấy mã hóa đơn");
});

export default detailBillOfSaleRouter;
