const axios = require("axios");

async function getdata() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(res.data);
}

// getdata();

async function postdata() {
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "new post",
      body: "added new post",
      userId: 1,
    });
    console.log("POST", res.data);
  } catch (error) {
    console.log(error);
  }
}
// postdata();

async function putdata() {
  try {
    const res = await axios.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        id: 1,
        title: "new title",
        body: "new tile added",
        userId: 1,
      },
    );
    console.log("PUT", res.data);
  } catch (error) {
    console.log(error);
  }
}
// putdata();

async function deletedata() {
  try {
    const res = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    console.log("Deleted", res.data);
  } catch (error) {
    console.log(error);
  }
}
deletedata();
