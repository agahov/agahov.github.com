// Information to reach API
// TODO: enter your API key here:
const apiKey = "4a0a2a5a00cc4ea38030419798d1f683";
const url = "https://api.rebrandly.com/v1/links";

// Some page elements
const inputField = document.querySelector("#input");
const shortenButton = document.querySelector("#shorten");
const responseField = document.querySelector("#responseField");

// AJAX functions
// const shortenUrl = () => {
//   const urlToShorten = inputField.value;
//   const data = JSON.stringify({ destination: urlToShorten });
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = "json";
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       renderResponse(xhr.response);
//     }
//   };
//   xhr.open("POST", url);
//   xhr.setRequestHeader("Content-type", "application/json");
//   xhr.setRequestHeader("apikey", apiKey);
//   xhr.send(data);
// };

// shortenUrl function written using Async wait request
const shortenUrl_old = async (link) => {
  const urlToShorten = link;
  const data = JSON.stringify({
    destination: urlToShorten,
    //domain: { fullName: "cryptosafe.prazdnik-v-korobke.ru" },
    domain: { fullName: "prazdnik-v-korobke.ru/cryptosafe/lock.html" },
    //    domain: { fullName: "cryptosafe.prazdnik-v-korobke.ru" },
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json",
        apikey: apiKey,
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      //renderResponse(jsonResponse);
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

const shortenUrl = async (link) => {
  const urlToShorten = link;
  const data = JSON.stringify({
    destination: urlToShorten,
    //domain: { fullName: "cryptosafe.prazdnik-v-korobke.ru" },
    domain: { fullName: "prazdnik-v-korobke.ru/cryptosafe/lock.html" },
    //    domain: { fullName: "cryptosafe.prazdnik-v-korobke.ru" },
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json",
        apikey: apiKey,
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      //renderResponse(jsonResponse);
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};

//shortenButton.addEventListener("click", displayShortUrl);
