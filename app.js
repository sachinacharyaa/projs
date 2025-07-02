const url = "https://api.chucknorris.io/jokes/random";
const fpara = document.querySelector("#para");
const fbtn = document.querySelector("#btn");
const cpy = document.querySelector("#cybtn");

// Fetch Joke when clicking button
const fetching = async () => {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data.value);
  fpara.innerText = data.value;
  fbtn.innerText = "Didn't laugh? Hit me again!";
};

// Attach to correct button
fbtn.addEventListener("click", fetching);

// Copy joke when clicking copy button
cpy.addEventListener("click", () => {
  const joke = fpara.innerText;
  if (joke.trim() !== "") {
    navigator.clipboard
      .writeText(joke)
      .then(() => alert("Joke copied, now Ready to share!"));
  }
});

// "https://api.chucknorris.io/jokes/random";
// const fpara = document.querySelector("#para");
// const fbtn = document.querySelector("#btn");
// let cpy = document.querySelector("cybtn");

// const fetching = async () => {
//   let response = await fetch(url);
//   let data = await response.json(); // response.json convert into meaninful data '
//   //   console.log("button was clicked");
//   console.log(data.value);
//   fpara.innerText = data.value;
//   fbtn.innerText = "Didn't laugh? Hit me again!";
//   //to copy
//   navigator.clipboard.writeText(fpara.innerText);
//   alert("Joke copied to clipboard!");
// };

// fbtn.addEventListener("click", fetching);

// cpy.addEventListener("click", () => {
//   const joke = jokePara.innerText;
//   alert("Joke was copied ");
// });
