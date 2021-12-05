const app = require('express')();

app.get("/get-data-pn-and-b", (req, res) => {
    // ids of the components are differed for a reason, check frontend
    res.status(200).json({
        data: [
            {
                id: 1,
                item: "About",
                source: "Peanut Butter and Jelly Sandwich (Also Known as PN&J) is an American cuisine, which looks so easy to prepare but some of them still stuggle to make it perfectly. (btw, I tried it for first time turns out great)"
            },
            {
                id: 2,
                item: "Ingredients",
                source: [{
                    "Peanut Butter": [
                        "Chunky Unsalted Butter",
                        "Smooth Unsalted Butter"
                    ],
                    "Jelly": [
                        "Grape Jelly",
                        "Strawberry Jelly"
                    ],
                    "Bread": [
                        "Whole Wheat Bread",
                        "White Bread"
                    ]
                }]
            },
            {
                id: 3,
                item: "Directions",
                source: [
                    {
                        step: 1,
                        direction: "Firstly, Take a slice of bread and apply Peanut Butter on it gently without letting the bread shrink it's thickness."
                    },
                    {
                        step: 2,
                        direction: "Repeat the same process, but now for Jelly on the other bread slice."
                    },
                    {
                        step: 3,
                        direction: "Stack one on the other to create a nice sandwich structure and cut it into two halves, have a great plating and Enjoy the Sandwich."
                    }
                ]

            },
        ]
    })
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));