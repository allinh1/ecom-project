// import firestore from "../../firestore.js";

// // Read
// export const getProducts = async () => {
//     const collection = firestore.collection("products");
//     const queryData = await collection.get();
//     const docArray = queryData.docs;
//     const products = docArray.map((doc) => ({ id: doc.id, ...doc.data()}))
//     return products;
// };

// export const getProductById = async (id) => {
//     const collection = firestore.collection("products").doc(id)

//     const itemData = await collection.get()

//     const productArr = [{id: itemData.id, ...itemData.data()}]

//     return productArr;
// }
