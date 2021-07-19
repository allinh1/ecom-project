import firestore from "../firestore.js"
import 'firebase/firestore';

// CREATE
export const addCartItem = async (record) => {
    const col = firestore.collection("cart");
    await col.add(record);
  };

// READ
export const getProducts = async () => {

    const col = firestore.collection("products");
    const queryData = await col.get();
    const documents = queryData.docs;
    return documents.map((doc) => ({id: doc.id, ...doc.data() }));
}

export const getProductById = async (id) => {
    const col = firestore.collection("products").doc(id)
    const productData = await col.get()
    const productArr = [{id: productData.id, ...productData.data()}]
    return productArr;
}

// UPDATE
export const updateProducts = async (id, record) => {
    const col = firestore.collection("products").doc(id);
    await col.update(record);
};

export const updateTest = async (id, record) => {
    const col = firestore.collection("cart").doc;
    await col.update(record);
};

// DELETE
export const deleteProducts = async (id) => {
    const col = firestore.collection("products").doc(id);
    await col.delete();
}
export const deleteInCart = async(id) => {
    const col = firestore.collection("cart").doc(id);
    await col.delete();
}








// const getProduct = async (id) => {
//     const ref = firestore.collection("products").doc(id); // DocumentReference
//     const snapshot = await ref.get(); // DocumentSnapshot
//     return { id: snapshot.id, ...snapshot.data() };
// };
// const addToCard = async (cartId, productId) => {
//     const product = await getProduct(productId);
//     const snapshot = await firestore.collection("carts").doc(cartId).get();
//     const cart = snapshot.data();
//     const partial = { products: [...cart.products, product] };
//     await firestore.collection("carts").doc(cartId).update(partial);
// };

// export const addProduct = async (id, productId) => {
//     const col = firestore.collection("cart");
//     const snapshot = await col.get()
//     const product = firestore.collection("products").doc(id)
//     await col.add(productId);
// };

// export const addToCart = async (id, productId) => {
//     const product = await getProducts(productId);
//     const snapshot = await firestore.collection("cart").doc('5Xh5T5TUwcAmGCbW4Xya').get();
//     const cart = snapshot.data();
//     const partial = { products: [...cart.products, products] };
//     await firestore.collection("cart").doc('5Xh5T5TUwcAmGCbW4Xya').add(partial);
// };

