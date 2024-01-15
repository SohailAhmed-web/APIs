import express from 'express';

const app = express();



app.get('api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'table-wooden',
            price: 200,
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2Fwooden-office-table-title-name-plate-for-desk-in-peshawar-pakistan-i204370568.html&psig=AOvVaw2St0zel_3Nrb3EZGEkAGuM&ust=1705433324040000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCIDv0-aP4IMDFQAAAAAdAAAAABAE'
        },
        {
            id: 2,
            name: 'table-wooden2',
            price: 300,
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2Fwooden-office-table-title-name-plate-for-desk-in-peshawar-pakistan-i204370568.html&psig=AOvVaw2St0zel_3Nrb3EZGEkAGuM&ust=1705433324040000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCIDv0-aP4IMDFQAAAAAdAAAAABAE'
        
        },
        {
            id: 3,
            name: 'table-wooden3',
            price: 400,
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2Fwooden-office-table-title-name-plate-for-desk-in-peshawar-pakistan-i204370568.html&psig=AOvVaw2St0zel_3Nrb3EZGEkAGuM&ust=1705433324040000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCIDv0-aP4IMDFQAAAAAdAAAAABAE'
        
        },
        {
            id: 4,
            name: 'table-wooden5',
            price: 500,
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2Fwooden-office-table-title-name-plate-for-desk-in-peshawar-pakistan-i204370568.html&psig=AOvVaw2St0zel_3Nrb3EZGEkAGuM&ust=1705433324040000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCIDv0-aP4IMDFQAAAAAdAAAAABAE'
        
        }
    ]

    if(req.query.search){
        const filterProducts = products.filter(product =>
            product.name.includes(req.query.search))
            res.send(filterProducts);
            return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
