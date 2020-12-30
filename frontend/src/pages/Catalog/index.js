import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Carolsel from '../../components/Carolsel';

export default function Catalog() {

    const isMounted = useRef(null);
    const [maxProducts, setmaxProducts] = useState(16);
    const [mostPopular, setmostPopular] = useState([]);
    const [priceReduction, setpriceReduction] = useState([]);

    useEffect(() => {
        
        axios.all([
            axios.get('https://wishlist.neemu.com/onsite/impulse-core/ranking/mostpopular.json'),
            axios.get('https://wishlist.neemu.com/onsite/impulse-core/ranking/mostpopular.json')

        ]).then(axios.spread((mostpopular, pricereduction) => {

            axios.post('http://localhost:3333/api/data', {
                maxProducts: maxProducts,
                mostPopular: mostpopular.data,
                priceReduction: pricereduction.data
            }).then((response) => {
                console.log(response.data);
            });
        }));

        isMounted.current = true;

        return () => {
            isMounted.current = false;
        }
    }, []);

    return(
        <React.Fragment>

            <Carolsel title="Vitrine de mais populares"/>
            <Carolsel title="Vitrine de ofertas"/>

        </React.Fragment>
        
    );
}