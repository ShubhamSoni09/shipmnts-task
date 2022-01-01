const express = require("express")
const router = express.Router();
const bodyParser = require("body-parser")
const allTransactions = require("../models/trmodels")

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/gettr', (req, res) => {
    try {
        allTransactions.find().then(foundtr => res.json(foundtr))
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post("/createtr", async(req, res) => {
    try {
        console.log(req.body.type)
        console.log(req.body)
        if (!req.body.type || !req.body.name || !req.body.amount) {
            return res.status(400).json({ error: "type/amount Missing..!!" })
        }
        const newtr = new allTransactions({
            type: req.body.type,
            name: req.body.name,
            amount: req.body.amount,
        })
        console.log(req.body.name)
        newtr.save().then(data => {
            res.status(200).json({
                message: "Transaction saved successfully",
                data
            });
            
        }).catch(error => { res.status(500).json(error) })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete("/deltr/:id", async(req, res) => {
    try {
        const temp = req.params.id;
        if (temp !== null) {
            console.log("atleaast inside")
            console.log(temp)
            const result = await allTransactions.findByIdAndDelete(temp);
            console.log(result);
            res.status(200).json({ message: "Recording Deleted..!!" });
        } else {
            res.status(404).json({ message: "No Such Recording Exist..!!" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

router.patch("/edittr/:id", async(req, res) => {
    try {
        const temp = req.params.id;
        if (temp !== null) {
            console.log(temp)
            const result = await allTransactions.findByIdAndUpdate(temp, req.body, { new: true });
            console.log(result);
            res.status(200).json({ message: "NewName Updated..!!" });
        } else {
            res.status(404).json({ message: "No Such Recording Exist..!!" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;