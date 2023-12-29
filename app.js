fetch(
  `https://api.nasa.gov/planetary/apod?api_key=2cPCAfLytowA93moW49fmFtSVVjIGPNZ34PZXhdx`,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
)
  .then((response) => {
    if (!response.ok) {
      console.log(`ERROR: ${response.status}`);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    document.querySelector(".apod-image").src = `${data.url}`;
    document.querySelector(".apod-title").innerHTML = `Title: ${data.title}`;
    document.querySelector(
      ".apod-date"
    ).innerHTML = `Picture Taken: ${data.date}`;
    document.querySelector(".apod-explanation").innerHTML = data.explanation;
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
