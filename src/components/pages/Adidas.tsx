import React from 'react';
import adidasModel1 from './../../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp'
import adidasModel2 from './../../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp'
import adidasModel3
    from './../../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp'
import {Link} from "react-router-dom";

export type AdidasItem = {
    id:number;
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const adidasArr: AdidasItem[] = [
    {
        id:1,
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,
    },
    {
        id:2,
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {
        id:3,
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]
export const Adidas = () => {
    return (
        <div>
            <h2> ADIDAS</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {adidasArr.map((adidas, index) => (
                    <Link key={adidas.id} to={`/adidas/${adidas.id}`}>
                        <img
                            src={adidas.picture}
                            alt={adidas.model}
                            style={{width: '200px', height: 'auto', marginRight: '10px'}}
                        />
                    </Link>
                ))}
            </div>
            <p>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book.
            </p>
        </div>
    );
};

