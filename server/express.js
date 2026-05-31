
const express = require('express');
const app = express();
const port = 9999;
const { query } = require('./query');

app.use(express.json());

app.post('/students', async (req, res) => {
    try {
        const { sid, sname, email, tutorId } = req.body;

        const sql = `
            INSERT INTO STUDENT(SID, SNAME, EMAIL, Tutor_Id)
            VALUES('${sid}', '${sname}', '${email}', '${tutorId}')
        `;

        await query(sql);

        res.json({
            message: 'Student added successfully'
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
app.get('/students', async (req, res) => {
    try {
        const sql = `
            SELECT *
            FROM STUDENT
        `;

        const students = await query(sql);
        
        res.json(students);
    } catch (err) {
        res.status(500).json(err);
    }
});
app.get('/students/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const sql = `
            SELECT *
            FROM STUDENT
            WHERE SID='${id}'
        `;

        const student = await query(sql);

        res.json(student);
    } catch (err) {
        res.status(500).json(err);
    }
});
app.put('/students/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const { sname, email, tutorId } = req.body;

        const sql = `
            UPDATE STUDENT
            SET
                SNAME='${sname}',
                EMAIL='${email}',
                Tutor_Id='${tutorId}'
            WHERE SID='${id}'
        `;

        await query(sql);

        res.json({
            message: 'Student updated successfully'
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
app.delete('/students/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const sql = `
            DELETE FROM STUDENT
            WHERE SID='${id}'
        `;

        await query(sql);

        res.json({
            message: 'Student deleted successfully'
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
app.listen(port, ()=> {
    console.log("server is running on port ", port);
});