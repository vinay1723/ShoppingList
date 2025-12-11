export async function signup(user) {
  try {
    const res = await fetch(
      "https://shopping-list-serv.vercel.app/api/v1/users/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user),
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}
export async function login(user) {
  try {
    const res = await fetch(
      "https://shopping-list-serv.vercel.app/api/v1/users/login",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}
export async function logout() {
  try {
    const res = await fetch(
      "https://shopping-list-serv.vercel.app/api/v1/users/logout",
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function addToList(product) {
  try {
    const res = await fetch(
      "https://shopping-list-serv.vercel.app/api/v1/listproducts/addtolist",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );

    if (!res.ok) {
      throw new Error("datanot found");
    }
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err.message);
  }
}
export async function updateProdList(product) {
  try {
    const res = await fetch(
      "https://shopping-list-serv.vercel.app/api/v1/listproducts/updateProduct",
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );

    if (!res.ok) {
      throw new Error("datanot found");
    }
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err.message);
  }
}
export async function deleteProduct(id) {
  try {
    const res = await fetch(
      `https://shopping-list-serv.vercel.app/api/v1/listproducts/deleteProduct/${id}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    if (!res.ok) {
      throw new Error("datanot found");
    }
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err.message);
  }
}
