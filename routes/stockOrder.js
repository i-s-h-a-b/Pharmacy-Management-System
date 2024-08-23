const router = require('express').Router();
const Order = require('../models/order.js')

router.post('/', async (req, res) => {
    const { supplierName, dateOfOrder, items, orderQuantity, totalAmount } = req.body;

    try {
        // Create a new stock order for each item in the items array
        for (let i = 0; i < items.length; i++) {
            const { item_name, quantity, price} = items[i];

            const newOrder = new Order({
                supplierName,
                dateOfOrder,
                items : {
                    item_name,
                    quantity,
                    price,
                },
                orderQuantity,
                totalAmount
            });
            await newOrder.save();
        }
        console.log(req.body);
        res.send('Stock Orders Saved Successfully');
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});

  module.exports = router;