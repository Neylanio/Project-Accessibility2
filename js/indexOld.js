// var listElement = document.querySelector('#app ul');
// var inputElement = document.querySelector('#app input');
// var buttonElement = document.querySelector('#app button');

// var lista = JSON.parse(localStorage.getItem('lista')) || [];


// function render(){
    
//     listElement.innerHTML = '';

//     for(el of lista){
        
//         var li = document.createElement('li');
//         var text = document.createTextNode(el);

//         var a = document.createElement('a');
//         a.setAttribute('href','#');

//         a.setAttribute('onclick','remove('+lista.indexOf(el)+')');

//         var link = document.createTextNode('Excluir');
        
//         a.appendChild(link);

//         li.appendChild(text);
//         li.appendChild(a);

//         listElement.appendChild(li);

//     }

// }

// render();

// function addList(){
//     var input = inputElement.value;

//     lista.push(input);
//     saveToStorage();
//     inputElement.value = '';

//     render();
// }


// buttonElement.onclick = addList;


// function remove(pos){
//     lista.splice(pos,1);
//     saveToStorage();
//     render();
// }


// function saveToStorage(){
//    localStorage.setItem('lista', JSON.stringify(lista));
// }


// axios.get('https://api.github.com/users/SoaresNeylanio')
// .then(function(response){
//     console.log(response.data);
// })
// .catch(function(error){
//     console.log(error);
// });


var search = function(){
    var text = document.querySelector('#app input');
    var ul = document.querySelector('#app ul');

    if(text != ''){
        axios.get('https://api.github.com/users/'+text.value+'/repos')
        .then(function(response){
            
            console.log(response.data.length);

            for(repo of response.data){
                var li = document.createElement('li');
                var resposta = document.createTextNode(repo.name);

                li.appendChild(resposta);
                ul.appendChild(li);    
            }

        })
        .catch(function(error){
            
            var li = document.createElement('li');
            var resposta = document.createTextNode('Not Found');

            li.appendChild(resposta);
            ul.appendChild(li);

        });
    }

}