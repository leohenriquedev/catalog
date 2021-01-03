import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CarouselComponent from '../../components/CarouselComponent';
import Loading from '../../components/Loading';

export default function Catalog() {

    const isMounted = useRef(null);
    const [maxProducts, setmaxProducts] = useState(16);
    const [responseType, setresponseType] = useState('complete');
    const [mostPopularIds, setmostPopularIds] = useState([]);
    const [priceReductionIds, setpriceReductionIds] = useState([]);
    const [mostPopular, setmostPopular] = useState([]);
    const [priceReduction, setpriceReduction] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {

        isMounted.current = true;

        if(isMounted.current) {

            axios.all([
                axios.get('https://wishlist.neemu.com/onsite/impulse-core/ranking/mostpopular.json'),
                axios.get('https://wishlist.neemu.com/onsite/impulse-core/ranking/pricereduction.json')
    
            ]).then(axios.spread((mostpopular, pricereduction) => {
    
                mostpopular.data.map((obj) => {
                    mostPopularIds.push(obj.recommendedProduct.id);
                });
    
                pricereduction.data.map((obj) => {
                    priceReductionIds.push(obj.recommendedProduct.id);
                });
    
                axios.post('http://localhost:3001/api/products', {
                    maxProducts: maxProducts,
                    responseType: responseType,
                    mostPopularIds: mostPopularIds,
                    priceReductionIds: priceReductionIds
                }).then((response) => {
                    setmostPopular(response.data.mostPopularProducts);
                    setpriceReduction(response.data.priceReductionProducts);

                    setisLoading(false);
                });
            }));

        }

        return () => {
            isMounted.current = false;
        }

    }, []);

    return(
        <React.Fragment>
            <Loading visible={isLoading} />

            <CarouselComponent title="Mais Vendidos" products={mostPopular} />
            <CarouselComponent title="Produtos que baixaram de preço" products={priceReduction} />

        </React.Fragment>  
    );
}