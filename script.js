//     fetch('https://reqres.in/api/users?page=2', {
//         method: 'GET'
//     })
//     .then(function(response) {
//         if (response.status !== 200)
//         throw response.status;
//         return response.json();
//     })
//     .then(function(responseData) {
//         console.log(responseData);
//         let ul = document.createElement('ul');
//         let fragment = document.createDocumentFragment();

//         responseData.data.forEach(item => {
//             let li = document.createElement('li');
//             li.textContent = item.first_name;
//             fragment.appendChild(li)
//         });

//         ul.appendChild(fragment);
//         document.getElementById('api').appendChild(ul);
//     })
//     .catch(function(error) {
//         if (error == 404) {
//             let p = document.createElement('p');
//             p.textContent = 'Page Not Found';
//             p.classList.add('error');

//             document.getElementById('api').appendChild(p)
//         } else {
//             let p = document.createElement('p');
//             p.textContent = 'Server Error';
//             p.classList.add('error');

//             document.getElementById('api').appendChild(p)
//         }
// })









// load more
// let currentPage = 1;
// function getUsers(page) {
//     fetch('https://reqres.in/api/users?page=' + page,{
//         method:'GET'
//     })
//     .then(function(response){
//         if (response.status !==200)
//         throw response.status;
//         return response.json();

//     })
//     .then(function(responseData){
//         var fragment = document.createDocumentFragment();

//         responseData.data.forEach(item => {
//             let li = document.createElement('li');
//             li.textContent = item.first_name;

//             fragment.appendChild(li);
            
//         });
    
//         document.getElementById('list').appendChild(fragment);
// })

//     .catch(function(error){
//         if (error == 404) {
//             let p = document.createElement('p');
//             p.textContent = 'Page Not Found'
//             p.classList.add('error');

//             document.getElementById('api').appendChild(p);
//         }
//         else {
//             let p = document.createElement('p');
//             p.textContent = 'Server Error'
//             p.classList.add('error')

//             document.getElementById('api').appendChild(p);

//         }
// })

// }

// document.getElementById('loadmore').addEventListener('click',function(){
//     currentPage +=1;
//     getUsers( currentPage);

// });

// getUsers( currentPage);








//  next&previous


// let currentPage = 1;
// let totalPages;

// function getUser(page) {
//     fetch('https://reqres.in/api/users?page=' + page, {
//         method: 'GET'
//     })
//     .then(function(response) {
//         if (response.status !== 200) {
//             throw response.status;
//         }
//         return response.json();
//     })
//     .then(function(responseData) {
//         var fragment = document.createDocumentFragment();

//         responseData.data.forEach(item => {
//             let li = document.createElement('li');
//             li.textContent = item.first_name;
//             fragment.appendChild(li)
//         });
//         document.getElementById('list').innerHTML = '';
//         document.getElementById('list').appendChild(fragment);

//         totalPages = responseData.total_pages;
//     })
//     .catch(function(error) {
//         if (error == 404) {
//             let p = document.createElement('p');
//             p.textContent = 'Page Not Found!';
//             document.getElementById('api').appendChild(p)
//         } else {
//             let p = document.createElement('p');
//             p.textContent = 'Server Error!';
//             document.getElementById('api').appendChild(p)
//         }
//     })
// }

//     document.getElementById('previous').addEventListener('click', function() {
//         if (currentPage === 1) {
//             return
//         }
//         currentPage -= 1;
//         getUser(currentPage);
//     })
//     document.getElementById('next').addEventListener('click', function() {
//         if (currentPage === totalPages) {
//             return
//         }
//         currentPage += 1;
//         getUser(currentPage);
//     })

//     getUser(currentPage);





// ფოტოს წამოღება


// let currentPage = 1;
// let totalPages;

// function getUser(page) {
//     fetch('https://reqres.in/api/users?page=' + page, {
//         method: 'GET'
//     })
//     .then(function(response) {
//         if (response.status !== 200) {
//             throw response.status;
//         }
//         return response.json();
//     })
//     .then(function(responseData) {
//         var fragment = document.createDocumentFragment();

//         responseData.data.forEach(item => {
//             let li = document.createElement('li');
//             li.classList.add('users-li')

//             let span = document.createElement('span');
//             span.textContent = item.first_name;

//             let img = document.createElement('img');
//             img.src = item.avatar;
//             img.classList.add('image')
//             li.appendChild(img);
//             li.appendChild(span);
//             fragment.appendChild(li)
//         });
//         document.getElementById('list').innerHTML = '';
//         document.getElementById('list').appendChild(fragment);

//         totalPages = responseData.total_pages;
//     })
//     .catch(function(error) {
//         if (error == 404) {
//             let p = document.createElement('p');
//             p.textContent = 'Page Not Found!';
//             document.getElementById('api').appendChild(p)
//         } else {
//             let p = document.createElement('p');
//             p.textContent = 'Server Error!';
//             document.getElementById('api').appendChild(p)
//         }
//     })
// }

//     document.getElementById('previous').addEventListener('click', function() {
//         if (currentPage === 1) {
//             return
//         }
//         currentPage -= 1;
//         getUser(currentPage);
//     })
//     document.getElementById('next').addEventListener('click', function() {
//         if (currentPage === totalPages) {
//             return
//         }
//         currentPage += 1;
//         getUser(currentPage);
//     })

//     getUser(currentPage);






// xml http requist

let currentPage = 1;
let totalPages;

function getUser(page) {
    function render(){
        let response = this.responseText;
        let responseData = JSON.parse(response);
        

        //render logical
        var fragment = document.createDocumentFragment();

        responseData.data.forEach(item => {
            let li = document.createElement('li');
            li.classList.add('users-li')

            let span = document.createElement('span');
            span.textContent = item.first_name;

            let img = document.createElement('img');
            img.src = item.avatar;
            img.classList.add('image')
            li.appendChild(img);
            li.appendChild(span);
            fragment.appendChild(li)
        });
        document.getElementById('list').innerHTML = '';
        document.getElementById('list').appendChild(fragment);

        totalPages = responseData.total_pages;

    }
    let requist = new XMLHttpRequest();
    requist.addEventListener('load',render);
    // requist.addEventListener('error',errorfunction);
    requist.open('get','https://reqres.in/api/users?page=' + page);
    requist.send();

  
}

    document.getElementById('previous').addEventListener('click', function() {
        if (currentPage === 1) {
            return
        }
        currentPage -= 1;
        getUser(currentPage);
    })
    document.getElementById('next').addEventListener('click', function() {
        if (currentPage === totalPages) {
            return
        }
        currentPage += 1;
        getUser(currentPage);
    })

    getUser(currentPage);










