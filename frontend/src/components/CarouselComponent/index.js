import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles.css';

export default function CarouselComponent(props) {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

    return(
        <div className="container col-md-8 mt-3 mb-5">

            <h5 className="mb-4">{props.title}</h5>

            <Carousel
                responsive={responsive}
            >
                { props.products.map((obj) => {
                    return(
                        <div key={obj.id}>
                            <img
                                src={obj.image}
                                alt={obj.name}
                            />
                            <p><label className="productName mr-4">{obj.name}</label></p>
                            <p><label className="productOldPrice">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(obj.oldPrice)}</label></p>
                            <p>Por <label className="productPrice">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(obj.price)}</label></p>
                            <p>10x {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(obj.price / 10)}</p>
                        </div>           
                    );
                }) }
            </Carousel>

        </div>
    );
}