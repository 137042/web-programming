// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done"), 1000);
// });

let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});


// promise.then((value) => console.log(value))
promise
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

const promiseChain = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

promiseChain
.then((result) => {
    console.log(result);
    return result * 2;
})
.then((result) => {
    console.log(result);
    return result * 2;
})
.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(result * 2);
    }, 2000);
    });
})
.then((result) => {
    console.log(result);
});


// // fetch의 return이 promise이므로 .then 사용할 수 있다
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json()) // 하나의 값만 반환하니까 return{} 생략됨
//   .then((post) =>
//     fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//   )
//   .then((response) => response.json())
//   .then(
//     (user) =>
//         new Promise(function (resolve, reject) {
//             // (*)
//             let p = document.createElement("p");
//             p.setAttribute("id", "myP");
//             let text = document.createTextNode(user.username);
//             p.appendChild(text);
//             document.body.append(p);

//             setTimeout(
//                 () => document.body.removeChild(document.getElementById("myP")),
//                 3000
//             );
//         })
//     )


// function loadJson(url) {
//     return fetch(url).then((response) => response.json());
// }
  
// function loadUser(userId) {
//     console.log(userId);
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
//         (response) => response.json()
//     );
// }
  
// function showAvatar(userName) {
//     return new Promise(function (resolve, reject) {
//         let p = document.createElement("p");
//         p.setAttribute("id", "myP");
//         let text = document.createTextNode(userName);
//         p.appendChild(text);
//         document.body.append(p);

//         setTimeout(() => {
//             document.body.removeChild(document.getElementById("myP"));
//             resolve(userName);
//         }, 3000);
//     });
// }
  
// // 함수를 이용하여 다시 동일 작업 수행
// loadJson("https://jsonplaceholder.typicode.com/posts/1")
//     .then((post) => loadUser(post.userId))
//     .then((user) => showAvatar(user.username))
//     .then((userName) => alert(`Finished showing ${userName}`));


// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) =>
//         setTimeout(() => reject(new Error("Whoops!")), 2000)
//     ),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).catch(console.log);


// async function fetchAuthorName(postId) {
//     const postResponse = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${postId}`
//     );
//     const post = await postResponse.json();
//     console.log("post", post);
//     const userId = post.userId;
  
//     try {
//         const userResponse = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${userId}`
//         );
//         const user = await userResponse.json();
//         return user.name;
//     } catch (err) {
//         console.log("Faile to fetch user:", err);
//         return "Unknown";
//     }
// }
// fetchAuthorName(1).then((name) => console.log("name:", name));


