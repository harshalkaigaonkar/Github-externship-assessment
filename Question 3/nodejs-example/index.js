const app = require('express')();
app.use(require('cors')());

app.get('/get-data', (req, res) => {

    let arr = [1, 4, 5, 6, 7, 2, 3, 9, 8, 0];
    let n = arr.length;
    let arrObj = [];

    for(let i = 0 ; i < n ; i++) {
        let randomNumber = Math.floor(Math.random() * n);
        arrObj.push({
            id: arr[randomNumber],
            name: `item ${arr[randomNumber]}`
        })
    }

    res
        .status(200)
        .json({ data: arrObj });
});

const PORT = process.env.local || 3001;
app.listen(PORT, () => console.log(`Server on the Port ${PORT}`));