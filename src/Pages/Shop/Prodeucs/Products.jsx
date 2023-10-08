import React from 'react';
import CardHeader from '../../../component/CardHeader/CardHeader';
import Product from '../Product/Product';


const Products = ({ products, subHeader, header }) => {
    console.log(products.length)
    return (
        <div >

            {/* <img src={imgBg} alt="" /> */}
            <CardHeader subHeader={subHeader} header={header}></CardHeader>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;