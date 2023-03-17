const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

btnEl.addEventListener("click", getJoke);
const apiKey = "asYvUP0a+N403ci21ZYypg==wj0Ff6C7mGfJnRAI";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function getJoke() {
  try {
    jokeEl.innerText = "Updating!";
    btnEl.disable = true;
    btnEl.innerText = "Loading!";
    const response = await fetch(
      "https://api.api-ninjas.com/v1/dadjokes?limit=1",
      options
    );
    const data = await response.json();
    console.log(data[0].joke);
    jokeEl.innerText = data[0].joke;
    btnEl.disable = false;
    btnEl.innerText = "Tell me a joke";
  } catch (error) {
    jokeEl.innerText = "An error occurred! Try again in some time.";
    btnEl.innerText = "Tell me a joke";
  }
}
