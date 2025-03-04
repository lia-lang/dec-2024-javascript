let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://e3.edimdoma.ru/data/fat_tags/0000/1465/1465-ed4_wide.jpg?1515755576'
    },
];

for (const product of products) {
    const TITLE = product.title;
    const PRICE = product.price;
    const IMAGE = product.image;

    document.write(`
            <div class="product-card">
                 <h3 class="product-title">${TITLE}. Price - ${PRICE}</h3>
                 <img src=${IMAGE} alt="" class="product-image">
            </div>
   `)
}
