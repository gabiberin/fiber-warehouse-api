const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);
const LidlWarehouse = require()

describe('POST /allocateCell', () => {
  it('allocates bread in cell 0,0', async () => {
    const res = await requestWithSupertest.post(
      '/allocateCell?productId=bread&quantity=2'
    );
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toEqual({
      foundCell: true,
      cell: "0,0"
    });
  });

  it('allocates bread in cell 0,1 when cell 0,0 can\'t handle all the quantity', async () => {
    const res = await requestWithSupertest.post(
      '/allocateCell?productId=bread&quantity=9'
    );
    expect(res.body).toEqual({
      foundCell: true,
      cell: "0,1"
    });
  });

  it('fails to allocate a cell when the quantity is larger than 10', async () => {
    const res = await requestWithSupertest.post(
      '/allocateCell?productId=apple&quantity=11'
    );
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toEqual({
      foundCell: false,
    });
  })
});
