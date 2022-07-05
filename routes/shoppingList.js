import express from "express";
import {
  getShoppingList,
  postListItem,
  clearList,
} from "../models/shoppingList.js";

const router = express.Router();

/* GET shopping list. */
router.get("/", async (req, res) => {
  const data = await getShoppingList();
  res.json({ success: true, payload: data });
});

router.post("/", async (req, res) => {
  const { listItem } = req.body;
  const result = await postListItem(listItem);
  res.status(201).json({ success: true, payload: result });
});

/* 
PLAN FOR CREATING DELETE ROUTE:
- we will need a router.delete path to send delete requests down
- these requests will need to arrive at a model of what to do to the database
- this model will need to clear all tasks from the database
- CURRENTLY: WON'T LET ME DELETE TO /ITEMS, NOT SURE WHY.
*/

router.delete("/items", async (req, res) => {
  const result = await clearList();
  res.json({ success: true, payload: result });
});

export default router;
