const router = require("express").Router();
let Student = require("../models/student");

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  const newStudent = new Student({
    name,
    age,
    gender,
  });

  newStudent
    .save()
    .then(() => {
      res.json("Student added!");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  // Method 1-----
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  // Method 2 with status code -----
  let userId = req.params.id;
  const { name, age, gender } = req.body; // destructure  insert frontend request body date to the object
  const updateStudent = {
    name,
    age: Number(req.body.age), // convert string to number
    gender,
  };

  const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(() => {
      res.status(200).send({ status: "User updated" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Student.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(400)
        .send({ status: "Failed to delete User", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const user = await Student.findById(userId)
    .then((student) => {
      res.status(200).send({ status: "User fetched", student });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get User", error: err.message });
    });
});

module.exports = router;
