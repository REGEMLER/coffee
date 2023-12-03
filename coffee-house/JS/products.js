const products = {
  coffee : [
    {
      "id": "1",
      "name": "Irish coffee",
      "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      "price": "7.00",
      "src" : "IMG/coffee-1.jpg",
      "sizes": {
        "s": "200 ml",
        "m": "300 ml",
        "l": "400 ml",
      },
      "additives": {
        "one": "Sugar",
        "two": "Cinnamon",
        "three": "Syrup",
      },
    },
    {
      "id": "2",
      "name": "Kahlua coffee",
      "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      "price": "7.00",
      "src" : "IMG/coffee-2.jpg",
      "sizes": {
        "s": "200 ml",
        "m": "300 ml",
        "l": "400 ml",
      },
      "additives": {
        "one": "Sugar",
        "two": "Cinnamon",
        "three": "Syrup",
      },
    },
    {
      "id": "3",
      "name": "Honey raf",
      "description": "Espresso with frothed milk, cream and aromatic honey",
      "price": "5.50",
      "src" : "IMG/coffee-3.jpg",
      "sizes": {
        "s": "200 ml",
        "m": "300 ml",
        "l": "400 ml",
      },
      "additives": {
        "one": "Sugar",
        "two": "Cinnamon",
        "three": "Syrup",
      },
    },
    {
      "id": "4",
      "name": "Ice cappuccino",
      "description": "Cappuccino with soft thick foam in summer version with ice",
      "price": "5.00",
      "src" : "IMG/coffee-4.jpg",
      "sizes": {
        "s": "200 ml",
        "m": "300 ml",
        "l": "400 ml",
      },
      "additives": {
        "one": "Sugar",
        "two": "Cinnamon",
        "three": "Syrup",
      },
    },
    {
      "id": "5",
      "name": "Espresso",
      "description": "Classic black coffee",
      "price": "4.50",
      "src" : "IMG/coffee-5.jpg",
      "sizes": {
        "s": "200 ml",
        "m": "300 ml",
        "l": "400 ml",
      },
      "additives": {
        "one": "Sugar",
        "two": "Cinnamon",
        "three": "Syrup",
      },
    },
    {
      "id": "6",
      "name": "Latte",
      "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
      "price": "5.50",
      "src" : "IMG/coffee-6.jpg",
      "sizes": {
        "s": "200 ml",
        "m": "300 ml",
        "l": "400 ml",
      },
      "additives": {
        "one": "Sugar",
        "two": "Cinnamon",
        "three": "Syrup",
      },
    },
    {
      "id": "7",
      "name": "Latte macchiato",
      "description": "Espresso with frothed milk and chocolate",
      "price": "5.50",
      "src" : "IMG/coffee-7.jpg",
      "sizes": {
        "s": "200 ml",
        "m": "300 ml",
        "l": "400 ml",
      },
      "additives": {
        "one": "Sugar",
        "two": "Cinnamon",
        "three": "Syrup",
      },
    },
    {
      "id": "8",
      "name": "Coffee with cognac",
      "description": "Fragrant black coffee with cognac and whipped cream",
      "price": "6.50",
      "src" : "IMG/coffee-8.jpg",
      "sizes": {
        "s": "200 ml",
        "m": "300 ml",
        "l": "400 ml",
      },
      "additives": {
        "one": "Sugar",
        "two": "Cinnamon",
        "three": "Syrup",
      },
    }
  ],
  tea : [
    {
      "id": "9",
      "name": "Moroccan",
      "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      "price": "4.50",
      "src" : "IMG/tea-1.png",
      "sizes": {
        "s": "200 ml",
        "m": "300 ml",
        "l": "400 ml",
      },
      "additives": {
        "one": "Sugar",
        "two": "Lemon",
        "three": "Syrup",
      },
    },
    {
      "id": "10",
      "name": "Ginger",
      "description": "Original black tea with fresh ginger, lemon and honey",
      "price": "5.00",
      "src" : "IMG/tea-2.png",
      "sizes": {
        "s": "200 ml",
        "m": "300 ml",
        "l": "400 ml",
      },
      "additives": {
        "one": "Sugar",
        "two": "Lemon",
        "three": "Syrup",
      },
    },
    {
      "id": "11",
      "name": "Cranberry",
      "description": "Invigorating black tea with cranberry and honey",
      "price": "5.00",
      "src" : "IMG/tea-3.png",
      "sizes": {
        "s": "200 ml",
        "m": "300 ml",
        "l": "400 ml",
      },
      "additives": {
        "one": "Sugar",
        "two": "Lemon",
        "three": "Syrup",
      },
    },
    {
      "id": "12",
      "name": "Sea buckthorn",
      "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      "price": "5.50",
      "src" : "IMG/tea-4.png",
      "sizes": {
        "s": "200 ml",
        "m": "300 ml",
        "l": "400 ml",
      },
      "additives": {
        "one": "Sugar",
        "two": "Lemon",
        "three": "Syrup",
      },
    }
  ],
  dessert : [
    {
      "id": "13",
      "name": "Marble cheesecake",
      "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      "price": "3.50",
      "src" : "IMG/dessert-1.png",
      "sizes": {
        "s": "50 g",
        "m": "100 g",
        "l": "200 g",
      },
      "additives": {
        "one": "Berries",
        "two": "Nuts",
        "three": "Jam",
      },
    },
    {
      "id": "14",
      "name": "Red velvet",
      "description": "Layer cake with cream cheese frosting",
      "price": "4.00",
      "src" : "IMG/dessert-2.png",
      "sizes": {
        "s": "50 g",
        "m": "100 g",
        "l": "200 g",
      },
      "additives": {
        "one": "Berries",
        "two": "Nuts",
        "three": "Jam",
      },
    },
    {
      "id": "15",
      "name": "Cheesecakes",
      "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      "price": "4.50",
      "src" : "IMG/dessert-3.png",
      "sizes": {
        "s": "50 g",
        "m": "100 g",
        "l": "200 g",
      },
      "additives": {
        "one": "Berries",
        "two": "Nuts",
        "three": "Jam",
      },
    },
    {
      "id": "16",
      "name": "Creme brulee",
      "description": "Delicate creamy dessert in a caramel basket with wild berries",
      "price": "4.00",
      "src" : "IMG/dessert-4.png",
      "sizes": {
        "s": "50 g",
        "m": "100 g",
        "l": "200 g",
      },
      "additives": {
        "one": "Berries",
        "two": "Nuts",
        "three": "Jam",
      },
    },
    {
      "id": "17",
      "name": "Pancakes",
      "description": "Tender pancakes with strawberry jam and fresh strawberries",
      "price": "4.50",
      "src" : "IMG/dessert-5.png",
      "sizes": {
        "s": "50 g",
        "m": "100 g",
        "l": "200 g",
      },
      "additives": {
        "one": "Berries",
        "two": "Nuts",
        "three": "Jam",
      },
    },
    {
      "id": "18",
      "name": "Honey cake",
      "description": "Classic honey cake with delicate custard",
      "price": "4.50",
      "src" : "IMG/dessert-6.png",
      "sizes": {
        "s": "50 g",
        "m": "100 g",
        "l": "200 g",
      },
      "additives": {
        "one": "Berries",
        "two": "Nuts",
        "three": "Jam",
      },
    },
    {
      "id": "19",
      "name": "Chocolate cake",
      "description": "Cake with hot chocolate filling and nuts with dried apricots",
      "price": "5.50",
      "src" : "IMG/dessert-7.png",
      "sizes": {
        "s": "50 g",
        "m": "100 g",
        "l": "200 g",
      },
      "additives": {
        "one": "Berries",
        "two": "Nuts",
        "three": "Jam",
      },
    },
    {
      "id": "20",
      "name": "Black forest",
      "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      "price": "6.50",
      "src" : "IMG/dessert-8.png",
      "sizes": {
        "s": "50 g",
        "m": "100 g",
        "l": "200 g",
      },
      "additives": {
        "one": "Berries",
        "two": "Nuts",
        "three": "Jam",
      },
    }
  ],
}

export default products;