import mongoose from 'mongoose';

import { ProductSchema } from '../schemas/productSchema';

const model = mongoose.model("sanphams", ProductSchema);

export const getAllProduct = () => {
  return model.find().exec();
};

export const getProductById = (id) => {
  return model.findById(id).exec();
};

export const getProductByIdOfDetailCate = (id) => {
  return model.find({ MaLoai: id }).exec();
};
export const getProductByIdOfSupplier = (id) => {
  return model.find({ MaNCC: id }).exec();
};
export const getProductByIdOfBrand = (id) => {
  return model.find({ MaThuongHieu: id }).exec();
};


export const deleteProductById = (id) => {
  return model.findByIdAndDelete(id);
};

export const getAllProductsSortById = () => {
  return model.find().sort({ Ma: -1 }).exec();
};
export const createProduct = (product) => {
  return model.create(product);
};

export const updateProduct = (id, product) => {
  return model.findByIdAndUpdate(id, {
    $set: {
      Ten: product.Ten,
      GiaBan: product.GiaBan,
      GiaNhap: product.GiaNhap,
      SoLuong: product.SoLuong,
      MaLoai: product.MaLoai,
      MoTa: product.MoTa,
      GioiTinh: product.GioiTinh,
      MaThuongHieu: product.MaThuongHieu,
      Anh: product.Anh,
      KichThuoc_Mau: product.KichThuoc_Mau,
      MaNCC: product.MaNCC,
      KhuyenMai: product.KhuyenMai,
    },
  });
};
