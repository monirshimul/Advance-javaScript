const posts = [
  { title: "ES5", des: "This is old" },
  { title: "ES6", des: "This is new" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title + `,` + post.des}</li>`;
    });
    document.getElementById("msg").innerHTML = output;
  }, 2000);
  console.log(this.id);
}

//getPosts();

function addPosts(newPost) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newPost);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Somthing went wrong");
      }
    }, 2000);
  });
}

addPosts({ title: "ES7", des: "This is newer" })
  .then(getPosts)
  .catch(err => console.log(err));
