let reactionSummary = document.querySelector('.grid__summary__item--red');
let memorySummary = document.querySelector('.grid__summary__item--yellow');
let verbalSummary = document.querySelector('.grid__summary__item--teal');
let visualSummary = document.querySelector('.grid__summary__item--blue');

fetch('../data.json')
    .then(function(response){
        return response.json();
    })
    .then(function(item){
        reactionSummary.innerHTML = 
        `<img src="${item[0].icon}" alt="reactionIcon">
        <h3>${item[0].category}</h3>
        <p><span>${item[0].score}</span> / 100</p>`;
        memorySummary.innerHTML = 
        `<img src="${item[1].icon}" alt="memoryIcon">
        <h3>${item[1].category}</h3>
        <p><span>${item[1].score}</span> / 100</p>`;
        verbalSummary.innerHTML = 
        `<img src="${item[2].icon}" alt="verbalIcon">
        <h3>${item[2].category}</h3>
        <p><span>${item[2].score}</span> / 100</p>`;
        visualSummary.innerHTML = 
        `<img src="${item[3].icon}" alt="visualIcon">
        <h3>${item[3].category}</h3>
        <p><span>${item[3].score}</span> / 100</p>`;
    })
    .catch(err => {
        console.log('errors:' + err.message);
    })