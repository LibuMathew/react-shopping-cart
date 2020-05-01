import React from "react";
import CardItem from './CardItem/CardItem';

export default function CardList(props) {
    return props.data.map(item => <CardItem key={item.id} data={item} />);
}