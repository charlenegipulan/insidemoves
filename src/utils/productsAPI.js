import tokenService from "./tokenService";

const BASE_URL = "/api/products/";

function index() {
  return fetch(BASE_URL, getAuthRequestOptions("GET"))
    .then(res => {
      if (res.ok) return res.json();
      throw new Error("Bad Credentials");
    })
    .then(products => products);
}

function addProduct(productId) {
  var options = getAuthRequestOptions("POST");
  options.body = JSON.stringify({ productId });
  return fetch(BASE_URL + "/checkout", options)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error("Error adding Product to Cart");
    })
    .then(cart => cart);
}

// function search() {
//   return fetch(BASE_URL, getAuthRequestOptions("GET"))
//   .then(res => {
//     if (res.ok) return res.json();
//   })
//   .then(responseData => {
//     this.setState({
//       results: responseData.results,
//       loading: false
//     });
//     throw new Error("Bad Credentials");
//   });
// }

/*--- Helper Functions ----*/
function getAuthRequestOptions(method) {
  return {
    method: method,
    headers: new Headers({
      Authorization: "Bearer " + tokenService.getToken(),
      'Content-type': 'application/json'
    })
  };
}

export default {
  index,
  addProduct
  // search
};
