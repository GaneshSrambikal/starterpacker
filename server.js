const express = require('express');
const app = express();



app.get('/api/customers',(req,res) =>{
    const customers =[
        {
            id:1, firstName:'John' , lastName:'Smith'
        },
        {
            id:2, firstName:'Will' , lastName:'whiteson'
        },
        {
            id:3, firstName:'Jerry' , lastName:'Simons'
        }
    ];
    res.json(customers);
});

const port = 5000;
app.listen(port, () => console.log(`Server started at ${port}`));