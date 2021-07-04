import firestore from "../firestore.js"

const products = [
    { name: "shoes", price: 100, variant: ["red", "green", "blue"] },
    { name: "shirts", price: 50, variant: ["small", "medium", "large"] },
    { name: "pants", price: 60, variant: ["small", "medium", "large"]}
]


const seedProducts = async () => {
    const col = firestore.collection("products");
    const data = await col.get();
    if (data.size > 0) {
        return;
    }
    const promises = products.map(async (products) => {
        return await col.add(products);
    })
    
    const resolvedReferences = await Promise.all(promises)
}

export const getProducts = async () => {
    await seedProducts();
    const col = firestore.collection("products");
    const queryData = await col.get();
    const documents = queryData.docs;
    return documents.map((doc) => ({id: doc.id, ...doc.data}));
}

export const deleteProducts = async (id) => {
    const col = firestore.collection("products").doc(id);
    await col.delete();
}

export const updateProducts= async (id, record) => {
    const col = firestore.collection("products").doc(id);
    await col.update(record);
};

export const createProducts = async (record) => {
    const col = firestore.collection("products");
    await col.add(record);
};