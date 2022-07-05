import { pool } from "../db/index.js";

export async function getShoppingList() {
  const data = await pool.query(`SELECT * FROM shopping;`);
  console.log("The shopping list is", data.rows);
  return data.rows;
}

export async function postListItem(listItem) {
  const { item, completed } = listItem;
  const data = await pool.query(
    `INSERT INTO shopping (
      item,
      completed
    ) VALUES ($1,$2) RETURNING *;`,
    [item, completed]
  );
  return data.rows[0];
}

/* 
PLAN FOR CREATING DELETE ROUTE:
- we will need a router.delete path to send delete requests down
- these requests will need to arrive at a model of what to do to the database
- this model will need to clear all tasks from the database
*/
export async function clearList() {
  const data = await pool.query(`DELETE FROM shopping WHERE id > 0;`);
  console.log("The shopping list is now:", data.rows);
  return data.rows;
}
