const express = require("express");
const {
  getallEmp,
  getEmpById,
  addEmp,
  updateEmp,
  deleteEmp,
} = require("../controller/emp");
//const app = express();

const router = express.Router();

router.get("/getallemp", getallEmp);
router.get("/getallemp/:id", getEmpById);
router.post("/addemp", addEmp);
router.put("/updateemp", updateEmp);
router.delete("/delete/:id", deleteEmp);

module.exports = router;
