import React from 'react';
import pumaModel1 from '../../assets/puma/kedy-puma.jpg'
import pumaModel2 from '../../assets/puma/krossovki-puma.jpg'
import pumaModel3 from '../../assets/puma/krossovki-puma-trinity.jpg'
import {Link} from "react-router-dom";

export type PumaItem = {
    id: number;
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const pumaArr: PumaItem[] = [
    {
        id: 1,
        model: 'Puma kaddy',
        collection: 'new collection 24',
        price: '190$',
        picture: pumaModel1,
    },
    {
        id: 2,
        model: 'Puma krossovki',
        collection: 'new collection 22',
        price: '250$',
        picture: pumaModel2
    },
    {
        id: 3,
        model: 'Puma trinity',
        collection: 'new collection 23',
        price: '299$',
        picture: pumaModel3
    }
]
export const Puma = () => {
    return (
        <div>
            <h2> PUMA</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {pumaArr.map((el) => (
                    <Link key={el.id} to={`/puma/${el.id}`}>
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
                industry's standard.
            </p>
        </div>
    );
};

