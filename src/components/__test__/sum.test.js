import sum from "../sum";

test("testing sum function babyyy", () => {
  const result = sum(4, 5);

  //this is called assertion
  expect(result).toBe(9);
});
