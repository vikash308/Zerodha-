const express = require("express")
const router = express.Router();
const { HoldingModel } = require("../model/holdingModel")
const { positionModel } = require("../model/positionModel")
const { OrderModel } = require("../model/orderModel")
const {verifyToken} = require("../middleware")



router.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingModel.find();
    res.json(allHoldings);
});

router.get("/allPositions", verifyToken, async (req, res) => {
    let allPositions = await positionModel.find();
    res.json(allPositions);
});

router.post("/newOrder", async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body;
        if (!name || !qty || !price || !mode)
            return res.status(400).json({ message: "Missing required fields" });

        const newOrder = new OrderModel({ name, qty, price, mode });
        await newOrder.save();
        res.json({ success: true, order: newOrder });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/orders",  async (req, res) => {
    let orders = await OrderModel.find();
    res.json(orders);
});


module.exports = router