import React from 'react';

import ShopHeader from './ShopHeader/ShopHeader';
import { useLoaderData } from 'react-router-dom';

import Products from './Prodeucs/Products';
import imgBg from '../../assets/Images/Header/header5.jpg'

const Shop = () => {
    const products = useLoaderData();
    const weddingDress = products.filter(dress => (dress.category).toLowerCase() === 'Wedding Dresses'.toLowerCase())
    const weddingRings = products.filter(ring => (ring.category).toLowerCase() === 'Wedding Rings'.toLowerCase())
    const weddingInvitations = products.filter(invitation => (invitation.category).toLowerCase() === 'Wedding Invitations'.toLowerCase())
    const weddingDecorations = products.filter(decoration => (decoration.category).toLowerCase() === 'Wedding Decorations'.toLowerCase())
    console.log(weddingDress)
    return (
        <div className='mt-24'>
            <ShopHeader></ShopHeader>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),url(${imgBg})`, backgroundSize: "cover" }} className='bg-fixed py-24'>
                {/* <div> */}
                {/* <img className='' src={imgBg} alt="" /> */}
                <Products products={weddingDecorations}
                    subHeader='Our New Collection Of Dress'
                    header="Wedding Dress"
                ></Products>
                <Products products={weddingRings}
                    subHeader='Our New Collection Of Rings'
                    header="Wedding Rings"
                ></Products>
                <Products products={weddingInvitations}
                    subHeader='Our New Collection Of Invitation card'
                    header="Wedding Invitation Card"
                ></Products>
            </div>


        </div>
    );
};

export default Shop;