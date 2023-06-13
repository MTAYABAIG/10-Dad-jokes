const jokeEl = document.getElementById("jokes");
const jokebtn = document.getElementById("jokesbtn");


jokebtn.addEventListener('click',genertejokes)

genertejokes()


// Using Asysn/Await
async function genertejokes() {
  const configue = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", configue)

  const data = await res.json();

  jokeEl.innerHTML = data.joke

}


// using .then
// function genertejokes() {
//   const configue = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", configue)
//     .then((responce) => responce.json())
//     .then((data) => jokeEl.innerHTML = data.joke);
// }
