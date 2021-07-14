import firestore from "../firestore.js"

export const getCart = async () => {
    const col = firestore.collection("cart");
    const queryData = await col.get();
    const documents = queryData.docs;
    return documents.map((doc) => ({CartId: doc.id, ...doc.data() }));
}

export const deleteCartItem = async (id) => {
    const col = firestore.collection("cart").doc(id);
    await col.delete();
}

export const updateCartItem= async (id, record) => {
    const col = firestore.collection("cart").doc(id);
    await col.update(record);
};

export const addToCart = async (product) => {
    const col = firestore.collection("cart");
    await col.add(product);
}

// collection 'cart' docid = ('1') , record = {products}
// remove field from document.
// For AddToCart Function 
// - Add to cart
// - remove ID field using update method in cart collection
// -> Destructure product to remove id field
// const newProd = {product.id, ...product }
// -> use newProduct (without id field) as record param for update method


// // Update
// export const updateCart = async(id, record) => {
//     const ref = firestore.collection("Cart").doc('43ty326cGjecu3EJvSOX').collection('cart-instance-01').doc(id);
//     await ref.update(record);
// }

// // Delete
// export const removeFromCart = async(id) => {
//     const collection = firestore.collection("Cart").doc('43ty326cGjecu3EJvSOX').collection('cart-instance-01').doc(id);
//     await collection.delete()