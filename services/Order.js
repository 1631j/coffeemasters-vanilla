import { getProuctById } from "./Menu";

export async function addToCart(id) {
  const product = await getProuctById(id);
  const result = app.Store.filter((prodInCart) => prodInCart.product.id == id);
  if (result.length == 1) {
    // The product is already in the cart
    // Update the current item
    app.Store.cart = app.Store.cart.map((p) =>
      product.id == id ? { ...p, quantity: p.quantity + 1 } : p
    );
  } else {
    app.Store.cart = [...app.Store.cart, { product, quantity: 1 }];
  }
}

export function removeFromCart(id) {
  app.Store.cart = app.Store.cart.filter((p) => p.product.id != id);
}
