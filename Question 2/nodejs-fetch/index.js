import fetch from 'node-fetch';

(() => {
    const response = await fetch('https://www.example.com/get-data');
    const res = await response.json();
    // sort the array based on id
    res.data.sort((a, b) => a.id-b.id);

    console.log(res.data);
})();