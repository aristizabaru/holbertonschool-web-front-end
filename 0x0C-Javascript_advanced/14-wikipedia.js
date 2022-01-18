function createElement(error, data) {
  if (error) {
    console.error(error);
  } else {
    const paragraph = document.createElement("p");
    const content = document.createTextNode(data);
    paragraph.appendChild(content);
    document.body.appendChild(paragraph);
  }
}

function queryWikipedia(callback) {
  const url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      // analyze HTTP status of the response
      callback(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      const data = JSON.parse(xhr.response).query.pages[21721040].extract;
      callback(null, data);
    }
  };
}

queryWikipedia(createElement);
