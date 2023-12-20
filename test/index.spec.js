const sinon =  require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { app , stop} = require('../src/index.js');

chai.should()
chai.use(chaiHttp);
const chaiAppServer = chai.request(app).keepOpen();
const sandbox = sinon.createSandbox();
describe('Routers', ()=>{
  let connection;
  let verifyStub;
  let createUserInDatabaseStub;
  beforeEach(()=>{
    connection = chai.request(app);
  });

  afterEach(async ()=>{
    sandbox.restore()
    await stop()
  });
  describe('Healthcheck', ()=>{
    it('should return ok and satus 200', (done)=>{
      connection.get('/healthcheck')
        .end((err, res)=>{
          res.should.have.status(200)
          done();
        })
    })
  });
})
