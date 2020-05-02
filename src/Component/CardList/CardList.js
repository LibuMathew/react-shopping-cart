import React from "react";
import CardItem from './CardItem/CardItem';

export default function CardList(props) {
    return props.data.items.map(item => {
        let isFavourite = false;
        if (props.params.favourites.indexOf(item.id) > -1) {
            isFavourite = true;
        }
        const idx = props.data.addedItems.findIndex(i => i.id === item.id);
        const isAddedToCart = idx !== -1 ? true : false;
        return <CardItem key={item.id} data={item} isAddedToCart={isAddedToCart} isFavourite={isFavourite} />
    });
}