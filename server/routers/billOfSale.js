import express from "express";
import {
  getAllBillOfSale,
  getBillOfSaleById,
  updateBillOfSale,
} from "../DAL/models/billOfSaleModel";

const billOfSaleRouter = express.Router();

billOfSaleRouter.get("/", (req, res) => {
  getAllBillOfSale().then((data) => {
    res.json({ count: data.length, bill: data });
  });
});

billOfSaleRouter.get("/billOfSaleById", (req, res) => {
  const { id } = req.params;
  if (id)
    getBillOfSaleById().then((data) => {
      res.json(data);
    });
  else res.status(404).send("không tìm thấy mã");
});

billOfSaleRouter.put("/:id", (req, res) => {
    const { id } = req.params;
    const bill = req.body;
    updateBillOfSale(id, bill).then((data) => {
      if (data) res.json(data);
      else res.status(404).send("không tìm thấy hóa đơn");
    });
  });
export default billOfSaleRouter;
