const image = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;
export const categories = [
  { name: 'Air Purifying Plants', plants: [
    { id: 1, name: 'Snake Plant', price: 18, image: image('photo-1593482892290-f54927ae2b7b'), description: 'A hardy, sculptural plant that thrives with little attention.' },
    { id: 2, name: 'Peace Lily', price: 22, image: image('photo-1593691509543-c55fb32e5cee'), description: 'Elegant green leaves and graceful white blooms.' },
    { id: 3, name: 'Areca Palm', price: 28, image: image('photo-1597055181300-c6a7b2e9b3e4'), description: 'A lush tropical palm that brightens any corner.' },
    { id: 4, name: 'Spider Plant', price: 16, image: image('photo-1572688484438-3c7e4e2f6b1a'), description: 'An easy-care favorite with arching striped leaves.' },
    { id: 5, name: 'Rubber Plant', price: 25, image: image('photo-1501004318641-b39e6451bec6'), description: 'Glossy, deep green foliage with a bold presence.' },
    { id: 6, name: 'Boston Fern', price: 20, image: image('photo-1597055181300-c6a7b2e9b3e4'), description: 'Soft, feathery fronds for a fresh natural feel.' }
  ]},
  { name: 'Low Maintenance Plants', plants: [
    { id: 7, name: 'Golden Pothos', price: 15, image: image('photo-1614594975525-e45190c55d0b'), description: 'A trailing plant that adapts to many indoor spaces.' },
    { id: 8, name: 'ZZ Plant', price: 24, image: image('photo-1632207691143-643e2c3a4f7e'), description: 'Glossy leaves and excellent tolerance for neglect.' },
    { id: 9, name: 'Jade Plant', price: 19, image: image('photo-1509423350716-97f9360b4e09'), description: 'A charming succulent with plump, rounded leaves.' },
    { id: 10, name: 'Aloe Vera', price: 14, image: image('photo-1509423350716-97f9360b4e09'), description: 'A sun-loving succulent with distinctive upright leaves.' },
    { id: 11, name: 'Chinese Evergreen', price: 21, image: image('photo-1485955900006-10f4d324d411'), description: 'Beautiful patterned foliage for low-light rooms.' },
    { id: 12, name: 'Cast Iron Plant', price: 23, image: image('photo-1497250681960-ef046c08a56e'), description: 'A resilient plant with broad, rich green leaves.' }
  ]},
  { name: 'Decorative Foliage Plants', plants: [
    { id: 13, name: 'Monstera Deliciosa', price: 32, image: image('photo-1614594975525-e45190c55d0b'), description: 'Iconic split leaves that make a statement.' },
    { id: 14, name: 'Bird of Paradise', price: 38, image: image('photo-1597055181300-c6a7b2e9b3e4'), description: 'Large tropical leaves for a dramatic look.' },
    { id: 15, name: 'Calathea Orbifolia', price: 29, image: image('photo-1501004318641-b39e6451bec6'), description: 'Rounded leaves with beautiful silver-green stripes.' },
    { id: 16, name: 'Fiddle Leaf Fig', price: 35, image: image('photo-1509423350716-97f9360b4e09'), description: 'Sculptural violin-shaped leaves for bright rooms.' },
    { id: 17, name: 'Philodendron', price: 26, image: image('photo-1497250681960-ef046c08a56e'), description: 'A lush leafy plant with a relaxed tropical style.' },
    { id: 18, name: 'Peperomia', price: 17, image: image('photo-1485955900006-10f4d324d411'), description: 'Compact, textured foliage that fits small spaces.' }
  ]}
];
export const allPlants = categories.flatMap(category => category.plants);