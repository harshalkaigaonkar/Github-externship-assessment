fetch(
    "http://localhost:3001/get-data-pn-and-b",
    {
        method: "GET"
    }
)
    .then(
        (res) => res.json()
    )
    .then(
        (res) => {
            res.data.forEach(element => {
                console.log(element.id);
                console.log(element.item);
                console.log(element.source)
            });
        }
    )

    // Moreover is continued at Question 3 for React.js Example
