const express = require("express");
const Program = require("../models/program");

const programRouter = express.Router();

//add program
programRouter.post("/add", async (req, res) => {
    try {
        let newprogram = new Program(req.body);
        let result = await newprogram.save();
        res.send({ program: result, msg: "program is added" });
    } catch (error) {
        console.log(error);
    }
});
//get all program
programRouter.get("/", async (req, res) => {
    try {
        let result = await Program.find();
        res.send({ program: result, msg: "all program" });
    } catch (error) {
        console.log(error);
    }
});



//delete program
programRouter.delete("/:id", async (req, res) => {
    try {
        let result = await Program.findByIdAndDelete(req.params.id);
        res.send({ msg: "program is deleted" });
    } catch (error) {
        console.log(error);
    }
});

//update program
programRouter.put("/:id", async (req, res) => {
    try {
        let result = await Program.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: { ...req.body } }
        );
        res.send({ program: "result", msg: "program is updated" });
    } catch (error) {
        console.log(error);
    }
});

module.exports = programRouter;