const NASA_API_BASE_URL = "https://api.nasa.gov/planetary";


async function showPicture() {
  fetch(`${NASA_API_BASE_URL}/apod?api_key=${API_KEY}`)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      const container = document.querySelector("#apod");
      const link = document.createElement("a");
      link.href = data.hdurl;
      const image = document.createElement("img");
      image.src = data.url;
      link.append(image)

      const metadata = document.createElement("div");
      metadata.innerText = 
      `Title: ${data.title} 
      Date: ${data.date}
      Photographer: ${data.copyright}
      Explanation: ${data.explanation}`
      container.append(link);
      container.append(metadata);
    })
    .catch(err => console.error("❌" + err + "❌"));

}



window.addEventListener('load', () => {
  showPicture();
});
