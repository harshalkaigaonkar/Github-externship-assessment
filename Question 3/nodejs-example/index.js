const app = require('express')();
app.use(require('cors')());

app.get('/get-data', (req, res) => {
    let arrObj = [];

    for(let i = 0 ; i < 10 ; i++) {
        let randomNumber = Math.floor((Math.random() * 100) + 1);
        arrObj.push({
            id: randomNumber,
            name: `item ${randomNumber}`
        })
    }

    res
        .status(200)
        .json({ data: arrObj });
});

const PORT = process.env.local || 3001;
app.listen(PORT, () => console.log(`Server on the Port ${PORT}`));