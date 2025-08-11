import request from 'supertest';

const baseURL = 'http://localhost:3000';

request(baseURL)
  .get('/')
  .expect(200)
  .end((err, res) => {
    if (err) {
      console.log('FAIL:', err.message);
      process.exit(1);
    } else {
      console.log('PASS');
    }
  });
