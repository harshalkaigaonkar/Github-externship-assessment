fetch(
    "https://www.example.com/get-data",
    {
        method: "GET"
    }
)
    .then(
        (res) => res.json()
    )
    .then(
        (res) => {
            res.data.sort((a, b) => a.id-b.id);
            console.log(res.data);
        }
    )
