require("dotenv").config();
const express = require("express");
const app = express();
let pg = require('pg');
app.use(express.json());
let pool = new pg.Pool({
    port: 5432,
    database: 'trevorhoffman',
    max: 100,
    host: 'localhost',
    user: 'trevorhoffman',
    password: '68849b348b4cece5915e60859dd652abcd35f813698ef0cd446a55779d667088',



})
pool.connect((err, db, done) => {
    if (err) {
        return console.log(err)
    } else {
        db.query('SELECT * from golfstats', (err, table) => {
            if (err) {
                return console.log(err)
            } else {
                console.log(table.rows)
            }
        })
    }
})
app.get('/api/stats', function (request, response) {
    pool.connect(function (err, db, done) {
        if (err) {
            return response.status(400).send(err)
        }
        else {
            db.query('SELECT * FROM golfstats', function (err, table) {
                if (err) {
                    return response.status(400).send(err)

                } else {
                    return response.status(200).send(table.rows)
                }
            })
        }
    })
})

app.post('/api/new-round', function (request, response) {
    var date = request.body.date;
    var course = request.body.course;
    var score = request.body.score;
    var relation = request.body.relation;
    var fairways = request.body.fairways;
    var greens = request.body.greens;
    var putts = request.body.putts;
    pool.connect((err, db, done) => {
        if (err) {
            return console.log(err)
        } else {
            db.query('INSERT INTO golfstats (date,course,score,relation,fairways,greens,putts) VALUES ($1,$2,$3,$4,$5,$6,$7)', [date, course, score, relation, fairways, greens, putts], (err, table) => {
                done();
                if (err) {
                    return console.log(err)
                } else {
                    return console.log('DATA INSERTED')
                }
            })
        }
    })
})

// ENDPOINTS
const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
