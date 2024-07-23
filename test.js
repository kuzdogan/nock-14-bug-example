const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const nock = require("nock");

describe("Test GET request", () => {
  it("should return status 200", (done) => {
    chai
      .request("http://example.com")
      .get("/")
      .then((res) => {
        console.log(res.status);
        return res.body;
      })
      .then((body) => {
        console.log(body);
        done();
      })
      .catch((err) => done(err));
  });
});
