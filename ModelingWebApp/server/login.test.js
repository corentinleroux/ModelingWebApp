import assert from "assert";
import { expect } from 'chai';

describe("Login", function () {
    const login = "user";
  it("#Login type is string", async function () {
    expect(login).to.be.a('string');
  });

    it("#Login equal user", function () {
     // assert.strictEqual(Meteor.isClient, false);
     expect(login).to.equal("user");
    });
  
});