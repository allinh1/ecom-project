import firestore from "../firestore.js"

export const getCart = async () => {
    const col = firestore.collection("cart");
    const queryData = await col.get();
    const documents = queryData.docs;
    return documents.map((doc) => ({id: doc.id, ...doc.data() }));
}

export const deleteCart = async (id) => {
    const col = firestore.collection("cart").doc(id);
    await col.delete();
}

export const updateCart= async (id, record) => {
    const col = firestore.collection("cart").doc(id);
    await col.update(record);
};

export const createCart= async (record) => {
    const col = firestore.collection("cart");
    await col.add(record);
};