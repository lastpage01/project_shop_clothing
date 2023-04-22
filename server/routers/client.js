import express from "express";
import {
  createClient,
  deleteClientById,
  getAllClients,
  getAllClientsSortById,
  getClientById,
  getClientByPhone,
  updateClient,
} from "../DAL/models/clientModel";

const clientRouter = express.Router();

clientRouter.get("/", (req, res) => {
  getAllClients().then((data) => {
    res.json({ count: data.length, clients: data });
  });
});
clientRouter.get("/getClientByPhone", (req, res) => {
  const { phone } = req.query;
  getClientByPhone(phone).then((data) => {
    res.json(data);
  });
});
clientRouter.get("/getClientById/:id", (req, res) => {
  const { id } = req.params;
  getClientById(id).then((data) => {
    res.json(data);
  });
});

clientRouter.post("/", (req, res) => {
  const client = req.body;
  client.NgaySinh = new Date(client.NgaySinh);
  client.DiaChi = client.DiaChi ? client.DiaChi : "";
  client.GioiTinh = client.GioiTinh ? client.GioiTinh : "";
  client.Email = client.Email ? client.Email : "";
  getAllClientsSortById().then((data) => {
    if (data.length > 0) client.Ma = data[0].Ma + 1;
    else client.Ma = 1;
    if (client.Ma)
      createClient(client).then((data) => {
        res.json(data);
      });
  });
});

clientRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const client = req.body;
  updateClient(id, client).then((data) => {
    if (data) res.json(data);
    else res.status(404).send("không tìm thấy khách hàng");
  });
});
// clientRouter.get("/clientById", (req, res) => {
//   const id = req.query.id;
//   getclientById(id)
//     .then((data) => {
//       if (data) res.json(data);
//       else res.status(404).send("id not found");
//     })
//     .catch((e) => {
//       res.status(403).send(e);
//     });
// });
clientRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (id)
    deleteClientById(id).then((data) => {
      res.json(data);
    });
  else res.status(404).send("không có id");
});

// clientRouter.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const client = req.body;
//   updateclientById(id, client).then((data) => {
//     if (data) res.json(data);
//     else res.status(404).send("không tìm thấy loại sản phẩm");
//   });
// });

// clientRouter.post("/", (req, res) => {
//   const client = req.body;
//   getAllCategoriesSortById().then((data) => {
//     if (data.length > 0) client.Ma = data[0].Ma + 1;
//     else client.Ma = 1;
//     if (client.Ma)
//       createclient(client).then((data) => {
//         res.json(data);
//       });
//   });
// });
export default clientRouter;
