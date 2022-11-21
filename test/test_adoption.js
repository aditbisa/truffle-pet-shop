const TestAdoption = artifacts.require("Adoption");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("TestAdoption", function (/* accounts */) {
  let adoption;

  it("should assert true", async function () {
    adoption = await TestAdoption.deployed();
    return assert.isTrue(true);
  });
});
