async function fetchDog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  
  const dogsContainer = document.getElementById("dogs");
  
  const div = document.createElement("div");
  div.classList.add("dog-card");
  div.innerHTML = `<img src="${data.message}" alt="Dog Image">`;
  
  dogsContainer.appendChild(div);
}
