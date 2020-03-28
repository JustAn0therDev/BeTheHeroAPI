const generateUniqueIdFromCrypto = require("../../src/utils/generateUniqueIdUsingCrypto");

describe("Generate Unique ID using Crypto module", () => {
  it("should generate an unique ID", () => {
    const generatedId = generateUniqueIdFromCrypto();

    expect(generatedId).toBeDefined()
    expect(generatedId).toHaveLength(8)
  });
});
