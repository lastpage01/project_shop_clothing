import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProduct,
  getAllProductsSortById,
  getProductById,
  updateProduct,
} from "../DAL/models/productModel";

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  getAllProduct().then((data) => {
    res.json({ count: data.length, products: data });
  });
});

productRouter.get("/getProductById/:id", (req, res) => {
  const { id } = req.params;
  if (id)
    getProductById(id)
      .then((data) => {
        if (data) res.json(data);
        else res.status(404).send("not found id");
      })
      .catch((e) => {
        res.status(404).send("not found id");
      });
  else res.status(404).send("not found id");
});

productRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  deleteProductById(id)
    .then((data) => {
      if (data) res.json(data);
      // else res.status(404).send("not found id");
    })
    .catch((e) => {
      res.status(403).send("delete fail");
    });
});
productRouter.post("/", (req, res) => {
  const product = req.body;
  getAllProductsSortById().then((data) => {
    if (data.length > 0) product.Ma = data[0].Ma + 1;
    else product.Ma = 1;
    if (product.Ma)
      createProduct(product).then((data) => {
        res.json(data);
      });
  });
});

productRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const product = req.body;
  updateProduct(id, product).then((data) => {
    if (data) res.json(data);
    else res.status(404).send("không tìm thấy sản phẩm");
  });
});
export default productRouter;
