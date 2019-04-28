async function fetchUser() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");

  const userData = await result.json();

  console.log(userData);
}

fetchUser();
