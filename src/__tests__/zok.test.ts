import * as z from "../index";

const field = z.Field();
const meesage = z.Field().hi();

test.only("passing validation", () => {
  console.log(field, meesage);
});