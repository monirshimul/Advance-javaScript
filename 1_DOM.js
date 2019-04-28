const posts = [
  { title: "ES5", des: "This is old" },
  { title: "ES6", des: "This is new" },
  { title: "ES7", des: "This is newer" }
];

function getPosts() {
  //   setTimeout(() => {
  //     let output = "";
  //     posts.forEach((post, index) => {
  //       output += `<li>${post.title + `,` + post.des}</li>`;
  //     });
  //     document.getElementById("msg").innerHTML = output;
  //   }, 2000);
  //   console.log(this.id);
  //   let output = "";
  //   posts.forEach((post, index) => {
  //     output += `<li>${post.title + `,` + post.des}</li>`;
  //   });

  switch (this.id) {
    case "btn1":
      return posts[0].des;
    case "btn2":
      return posts[1].des;
    case "btn3":
      return posts[2].des;
  }
}

//getPosts();

// function addPosts(newPost, callback) {
//   setTimeout(() => {
//     posts.push(newPost);
//     callback();
//   }, 2000);
// }

//addPosts({ title: "ES7", des: "This is Newer" }, getPosts);
