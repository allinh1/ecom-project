import firestore from "../firestore.js"

const cartProducts = [
    { productId: "", name: "cart", products: "" },
    { productId: "", name: "cart", products: "" },
    { productId: "", name: "cart", products: "" },

]

const seedCart = async () => {
    const col = firestore.collection("cart");
    const data = await col.get();
    if (data.size > 0) {
        return;
    };
    const promises = cartProducts.map(async (cartProducts) => {
        return await col.add(cartProducts);
    });
    const resolvedReferences = await Promise.all(promises)
;}

export const getCart = async () => {
    await seedCart();
    const col = firestore.collection("cart");
    const queryData = await col.get();
    const documents = queryData.docs;
    return documents.map((doc) => ({id: doc.id, ...doc.data() }));
}

export const deleteCartItem = async (id) => {
    const col = firestore.collection("cart").doc(id);
    await col.delete();
}

export const updateCart= async (id, record) => {
    const col = firestore.collection("cart").doc(id);
    await col.update(record);
};

export const createCart = async (record) => {
    const col = firestore.collection("cart");
    await col.add(record);
};

export const deleteProducts = async (id) => {
    const col = firestore.collection("products").doc(id);
    await col.delete();
}

// D in CRUD
export const deleteItem = async (id) => {
    const col = firestore.collection("cart").doc(id);
    await col.delete();
};

// U in CRUD
export const updateColleagues = async (id, record) => {
    const ref = firestore.collection("colleagues").doc(id);
    await ref.update(record);
};

// const handleDelete = (event) => {
//     onDelete(colleague.id);
// };