import { API } from "../../backend";

// create category
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
};

// get all categories
export const getAllCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    }).then(res => {
        return res.json()
    })
    .catch(err => console.log(err));
}


// create product

export const createAProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: product
    }).then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}

// get all products
export const getAllProducts = () => {
    return fetch(`${API}/products`, {
        method: "GET"
    }).then(res => {
        return res.json()
    })
    .catch(err => console.log(err));
}


// get a single product
export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    }).then(res => {
        return res.json()
    })
    .catch(err => console.log(err));
    }

// update a product

export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

// delete product
export const deleteProduct = (productId, userId, token) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

// delete category

export const deleteCategory = (categoryId, userId, token) => {
  return fetch(`${API}/category/${categoryId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
    .then((res) => {
      console.log(res)
      return res.json();
    })
    .catch((err) => console.log(err));
};

// update a category

export const updateCategory = (categoryId, userId, token, product) => {
  return fetch(`${API}/category/${categoryId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};