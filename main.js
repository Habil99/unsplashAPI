var imgTag;
const container = document.querySelector(".container");
// let index = 0;

const api = [
  { api_key: "GstKu_Z_Bu8Dil3F3RYgqF8OIBxIMq1pQDh_aWtB908" },
  { api_url: "https://api.unsplash.com/photos/" },
];

fetch(`${api[1].api_url}?client_id=${api[0].api_key}`)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    getPhotos(data);
  });

function getPhotos(data) {
  let cardTag;

  data.map((images) => {
    cardTag = `<div class="card">
   <header><h3>${images.user.portfolio_url}</h3></header>
   <img src=${images.urls.thumb}>
   <div class="info">
       <h4>${images.user.first_name} ${images.user.last_name}</h4>
       <h5>Total Likes: ${images.user.total_likes}</h6>
   </div>`;
    container.innerHTML += cardTag;
  });
}

fetch(
  "https://api.unsplash.com/photos/?client_id=GstKu_Z_Bu8Dil3F3RYgqF8OIBxIMq1pQDh_aWtB908"
)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);
  });

// fetch(
//   "https://api.unsplash.com/photos/?client_id=GstKu_Z_Bu8Dil3F3RYgqF8OIBxIMq1pQDh_aWtB908"
// )
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((data) => {
//     getPhotos(data);
//   });

// function getPhotos(data) {
//   data.map((images) => {
//     const div = document.querySelector(".container");
//     const imgTag = document.createElement("img");
//     imgTag.classList.add("images");
//     imgTag.setAttribute("src", `${images.urls.thumb}`);
//     div.appendChild(imgTag);
//     console.log(imgTag);
//   });
// }
