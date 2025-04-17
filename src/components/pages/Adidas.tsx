import React from 'react';
import adidasModel1 from '../../assets/adidas/AdiFOM.webp'
import adidasModel2 from '../../assets/adidas/Superstar.webp'
import adidasModel3 from '../../assets/adidas/PostMove.webp'
import {Link} from "react-router-dom";

export type AdidasItem = {
    id: number;
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const adidasArr: AdidasItem[] = [
    {
        id: 1,
        model: 'ADIDAS ADIFOAM TRXN',
        collection: 'new collection 24',
        price: '200$',
        picture: adidasModel1,
    },
    {
        id: 2,
        model: 'ADIDAS ADIFOAM SUPER',
        collection: 'new collection 22',
        price: '300$',
        picture: adidasModel2
    },
    {
        id: 3,
        model: 'ADIDAS SUPER SKY',
        collection: 'new collection 23',
        price: '400$',
        picture: adidasModel3
    }
]
export const Adidas = () => {
    return (
        <div>
            <h2> ADIDAS</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {adidasArr.map((el) => (
                    <Link key={el.id} to={`/adidas/${el.id}`}>
                        <img
                            src={el.picture}
                            alt={el.model}
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

