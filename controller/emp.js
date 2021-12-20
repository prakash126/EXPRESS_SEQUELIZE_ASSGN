const employeeTable = require("../model/emp");

exports.getallEmp = async (req, res) => {
  const data = await employeeTable.findAll({ row: true });
  if (!data) {
    res.status(400).json({ err: "Data not found" });
  }
  res.status(200).send(data);
};

exports.getEmpById = async (req, res) => {
  const data = await employeeTable.findByPk(req.params.id, { row: true });
  if (!data) {
    res.status(400).json({ err: "Data not found" });
  }
  res.status(200).send(data);
};

exports.addEmp = async (req, res) => {
  //console.log(req.body);
  let empObj = await employeeTable.build({
    emp_id: req.body.emp_id,
    name: req.body.name,
    dept: req.body.dept,
    designation: req.body.designation,
  });
  //console.log({ empObj });
  let emp = await empObj.save();
  if (!emp) {
    res.send({ err: "Data not inserted" });
  }
  res.send({ emp: emp, msg: "Data inserted successfully" });
};

exports.updateEmp = async (req, res) => {
  let emp_id = req.body.emp_id;
  const updatedData = await employeeTable.update(
    {
      name: req.body.name,
      dept: req.body.dept,
      designation: req.body.designation,
    },
    {
      where: { emp_id: emp_id },
    }
  );
  if (!updatedData) {
    return res.status(400).send({ msg: "Data of employeeTable not updated" });
  }
  res.status(200).send({ updatedData: updatedData });
};

exports.deleteEmp = async (req, res) => {
  let id = req.params.id;

  const deletedData = await employeeTable.destroy({ where: { emp_id: id } });

  if (!deletedData) {
    return res.status(400).send({ msg: "Data of employeeTable not deleted" });
  }
  res
    .status(200)
    .send({ dt: deletedData, msg: "Data of employeeTable deleted" });
};
