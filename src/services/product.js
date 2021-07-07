import firestore from "../firestore.js"
import 'firebase/firestore';


// const products = [
//     { name: "shoes", price: 100, variant: ["red", "green", "blue"] },
//     { name: "shirts", price: 50, variant: ["small", "medium", "large"] },
//     { name: "pants", price: 60, variant: ["small", "medium", "large"]}
// ]


// //  SEED DUMMY COLLECTION
// const seedProducts = async () => {
//     const col = firestore.collection("products");
//     const data = await col.get();
//     if (data.size > 0) {
//         return;
//     }
//     products.map(async (products) => {
//         return await col.add(products);
//     })
// }
const getProduct = async (id) => {
    const ref = firestore.collection("products").doc(id); // DocumentReference
    const snapshot = await ref.get(); // DocumentSnapshot
    return { id: snapshot.id, ...snapshot.data() };
};

export const getProducts = async () => {
    // await seedProducts();
    const col = firestore.collection("products");
    const queryData = await col.get();
    const documents = queryData.docs;
    return documents.map((doc) => ({id: doc.id, ...doc.data() }));
}

export const deleteProducts = async (id) => {
    const col = firestore.collection("products").doc(id);
    await col.delete();
}

export const createProducts = async (record) => {
    const col = firestore.collection("products");
    await col.add(record);
};

// export const increment = firebase.firestore.FieldValue.increment(1);
//     const storyRef = firestore.collection('cart').doc(id);
//     storyRef.update({ quantitiy: increment });

// export const addToCart = async (id, productId) => {
//     const product = await getProducts(productId);
//     const snapshot = await firestore.collection("cart").doc('5Xh5T5TUwcAmGCbW4Xya').get();
//     const cart = snapshot.data();
//     const partial = { products: [...cart.products, products] };
//     await firestore.collection("cart").doc('5Xh5T5TUwcAmGCbW4Xya').add(partial);
// };

export const addProduct = async (id) => {
    const col = firestore.collection("cart");
    const snapshot = await col.get()
    await col.add(id);
};

// export const addToCart = async (id, productId, item, quantity) => {
//     const doc = firestore.collection("products").doc(id);
//     const product = await doc.get();
//     const cart = firestore.collection("cart").doc("rkQj8ggtqDf0pyqQpG3a");
//     await cart.add(product.data());
// };

// export const addToCart = async (id) => {
//     const doc = firestore.collection("products").doc(id);
//     const product = await doc.get();
//     const cart = firestore.collection("cart").doc("rkQj8ggtqDf0pyqQpG3a");
//     await cart.products.push(product.data());
// };

