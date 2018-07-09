const apiKey = "AIzaSyDmsLLcbtxaXxtRt10ajKo_W45vCMUi8gI"

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  export const search = (searchText) =>
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=${apiKey}`, {
    method: 'GET',
    headers: {
      ...headers
    }
  }).then(res => res.json())
    .then(data => data.items)