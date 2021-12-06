const app = require('express')();
app.use(require('cors')());

app.get("/get-data-pb-and-j", (req, res) => {
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
                source: {
                    "Peanut Butter": [
                        {
                            id: 1,
                            source: "Chunky Unsalted Butter"
                        },
                        {
                            id: 2,
                            source: "Smooth Unsalted Butter"
                        }
                    ],
                    "Jelly": [
                        {
                            id: 1,
                            source: "Grape Jelly"
                        },
                        {
                            id: 2,
                            source: "Strawberry Jelly"
                        }
                    ],
                    "Bread": [
                        {
                            id: 1,
                            source: "Whole Wheat Bread"
                        },
                        {
                            id: 2,
                            source: "White Bread"
                        }
                    ]
                }
            },
            {
                id: 3,
                item: "Directions",
                source: [
                    {
                        step: 1,
                        source: "Firstly, Take a slice of bread and apply Peanut Butter on it gently without letting the bread shrink it's thickness."
                    },
                    {
                        step: 2,
                        source: "Repeat the same process, but now for Jelly on the other bread slice."
                    },
                    {
                        step: 3,
                        source: "Stack one on the other to create a nice sandwich structure and cut it into two halves, have a great plating and Enjoy the Sandwich."
                    }
                ]

            },
            {
                id: 4,
                item: "Plating Suggestions",
                source: [
                    "https://camo.githubusercontent.com/b87554cd46dc0a50bc55bba82fe053b479dfca58e61ee58e3fd1bef78a9b022d/68747470733a2f2f74682e62696e672e636f6d2f74682f69642f4f49502e6667574f754b72316c77793147304959756641743477486145373f773d32383426683d31383926633d3726723d30266f3d35266470723d312e3332267069643d312e37",
                    "https://camo.githubusercontent.com/774be8fc6c3b38956af8c50cae4c86d7fa677009ecb4f547080ebd564e3629b0/68747470733a2f2f74682e62696e672e636f6d2f74682f69642f4f49502e776550704e3079464f70375879536b42312d374b4151486148613f773d31383926683d31383926633d3726723d30266f3d35266470723d312e3332267069643d312e37",
                    "https://camo.githubusercontent.com/2e89174919f26f516a353da7f4ea05bb4f4144d78ec0752184cb4788de33ef04/68747470733a2f2f74682e62696e672e636f6d2f74682f69642f4f49502e716c422d565839773337707a4d6a4766324a4270584148614c483f773d31333526683d32303326633d3726723d30266f3d35266470723d312e3332267069643d312e37",
                    "https://camo.githubusercontent.com/0d35b11f2b28d8156631a47f9d491013b1741050f0616281622172f920062d8c/68747470733a2f2f74682e62696e672e636f6d2f74682f69642f4f49502e5364352d36666c4a72752d7a6f4d563069424653517748614a583f773d31343926683d31383926633d3726723d30266f3d35266470723d312e3332267069643d312e37"
                ]
            }
        ]
    })
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));