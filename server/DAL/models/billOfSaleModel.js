import mongoose from "mongoose";
import { BillOfSaleSchema } from "../schemas/billOfSaleSchema";

const model = mongoose.model("hoadonbans", BillOfSaleSchema);

export const getAllBillOfSale = () => {
  return model.find().exec();
};
export const getBillOfSaleById = (id) => {
  return model.findById(id).exec();
};

export const updateBillOfSale = (id, bill) => {
  return model.findByIdAndUpdate(id, {
    $set: {
      Ngay: bill.Ngay,
      PhuongThucTT: bill.PhuongThucTT,
      SDTNhan: bill.SDTNhan,
      TenNguoiNhan: bill.TenNguoiNhan,
      TrangThai: bill.TrangThai,
      ThanhToan: bill.ThanhToan,
      Huy: bill.Huy,
      DiaChi: bill.DiaChi,
      GhiChu: bill.GhiChu,
    },
  });
};