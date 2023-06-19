import * as z from "../index.ts";

const field = z.Field();
const meesage = z.Field().hi();

test.only("passing validation", () => {
  console.log(field, meesage);
});