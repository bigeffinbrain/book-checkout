var app = require('../api')
var request = require('supertest')(app);

describe('App', () => {
    it('calling root directory comes back Succesful', (done) => {
        request.get('/')
            .expect(200)
            .end((req, res) => {
                expect(res.text).toEqual('Success')
                done()
            })
    })

    it('Books endpoint returns all info for a book(s)', (done) => {
        request.get('/books')
            .expect(200)
            .end((req, res) => {
                expect(res.body[0].Book_Title.length > 0).toEqual(true)
                expect(res.body[0].Author.length > 0).toEqual(true)
                expect(res.body[0].ISBN_Number.length > 0).toEqual(true)
                expect(typeof res.body[0].isCheckedOut).toEqual('boolean')
                expect(typeof res.body[0].Date_Due).toEqual('number')
                done()
            })
    })

})