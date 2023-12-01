async function getProducts() {
    const products =  await fetch("./products.json")
    const json = await products.json();
    console.log(json);
}

getProducts()