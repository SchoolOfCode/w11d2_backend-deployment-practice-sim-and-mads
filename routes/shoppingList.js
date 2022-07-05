import express from "express";
import ClearList from "../../w11d2_frontend-deployment-sim-and-mads/src/components/ClearList/index.js";
import { getShoppingList, postListItem } from "../models/shoppingList.js";

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
*/

router.delete("/items", async (req, res) => {
  const result = await ClearList();
  res.json({ success: true, payload: result });
});

export default router;
