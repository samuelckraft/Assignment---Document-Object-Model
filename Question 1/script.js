// Task 1

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2

function displayProducts () {
    const container = document.getElementById('container');
    for (let product of products) {
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = `Product: ${product.name} - Price: $${product.price} - Description: ${product.description}`;
        container.appendChild(newParagraph)
    }

};


// Task 3

document.addEventListener('load', displayProducts());