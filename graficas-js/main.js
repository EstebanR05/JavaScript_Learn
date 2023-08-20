const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'colors',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// let url = 'https://pokeapi.co/api/v2/pokemon/ditto';
// let url = 'http://localhost:49496/api/Order';

//with fetch
// fetch(url)
// .then(resp => resp)
// .then(data =>  console.log(data))
// .then(err => console.log(err));

//with xmlhttp
// let api = new XMLHttpRequest();
// api.open('GET', url, true);
// api.send();

// api.onreadystatechange = function(){
  
//   if(this.status == 200 && this.readyState == 4){
    
//     let datos = JSON.parse(this.responseText);
//     console.log(datos)
    
//   }
  
// }