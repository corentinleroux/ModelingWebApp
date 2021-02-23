import assert from "assert";
import { expect } from 'chai';

describe("Aloo", function () {
  it("test 1", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "modelingwebapp");
  });

  if (Meteor.isClient) {
    it("test 2", function () {
        expect("ali").to.be.a(undefined);
      //assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("test 3", function () {
     // assert.strictEqual(Meteor.isClient, false);
     expect("ali").to.equal(undefined);
    });
  }
});