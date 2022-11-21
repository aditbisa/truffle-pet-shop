const TestAdoption = artifacts.require("Adoption");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("TestAdoption", function (accounts) {
  let adoption;

  before("get the contract", async function () {
    adoption = await TestAdoption.deployed();
  });

  it("accounts[0] can adopt a pet index 8", async () => {
    await adoption.adopt(8, { from: accounts[0] });
  });

  it("accounts[0] cannot adopt a pet index -2", async () => {
    let error;
    try {
      await adoption.adopt(-2, { from: accounts[0] });
    } catch (err) {
      error = err;
    }
    assert.instanceOf(error, Error);
  });

  it("accounts[0] cannot adopt a pet index 30", async () => {
    let error;
    try {
      await adoption.adopt(30, { from: accounts[0] });
    } catch (err) {
      error = err;
    }
    assert.instanceOf(error, Error);
  });

  describe("adopting a pet and retrieving account addresses", async () => {
    let expectedAdopter;

    before("adopt a pet using accounts[0]", async () => {
      await adoption.adopt(4, { from: accounts[0] });
      expectedAdopter = accounts[0];
    });

    it("can fetch the address of an owner by pet id", async () => {
      const adopter = await adoption.adopters(4);
      assert.equal(adopter, expectedAdopter);
    });

    it("can fetch the collection of all pet owners addresses", async () => {
      const adopters = await adoption.getAdopters();
      assert.include(adopters, expectedAdopter);
    });
  });
});
