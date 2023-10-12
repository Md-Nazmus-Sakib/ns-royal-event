import React from 'react';

const Product = ({ product }) => {
    const { id, category, name, img, price, detail } = product;
    return (
        <div>
            {
                (id % 2 === 0) ? <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="3000" style={{ boxShadow: '  5px 5px 15px 5px  pink' }} className="card  bg-black bg-opacity-60 text-white shadow-xl h-[500px] border-2 border-rose-500 ">
                    <figure><img src={img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                            <div className="badge badge-secondary">${price}</div>
                        </h2>

                        <p>{detail}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div> :
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" style={{ boxShadow: '  5px 5px 15px 5px  pink' }} className="card  bg-black bg-opacity-60 text-white shadow-xl h-[500px] border-2 border-rose-500 ">
                        <figure><img src={img} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {name}
                                <div className="badge badge-secondary">${price}</div>
                            </h2>

                            <p>{detail}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Product;