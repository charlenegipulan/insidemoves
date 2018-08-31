import tokenService from "./tokenService";

const BASE_URL = "/api/products/";

function index() {
  return fetch(BASE_URL)
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

function removeProduct(productId) {
  var options = getAuthRequestOptions("DELETE");
  return fetch(`${BASE_URL}checkout/${productId}`, options)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error("Error adding Product to Cart");
    })
    .then(cart => cart);
}

function favoriteItem(productId) {
  var options = getAuthRequestOptions("POST");
  return fetch(`${BASE_URL}${productId}/favorite`, options)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error("Error adding a favorite item");
    })
    .then((updatedToken) => updatedToken);
}

function getFavorites() {
  var options = getAuthRequestOptions("GET");
  return fetch(`${BASE_URL}favorites`, options)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error("Error adding a favorite item");
    })
    .then(favorites => favorites);
}

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
  addProduct,
  removeProduct,
  favoriteItem,
  getFavorites
};
