import React from "react";
import { Card } from 'antd';

import CardItem from './CardItem/CardItem';

const { Meta } = Card;

export default function CardList(props) {
    return props.data.map(item => <CardItem key={item.id} data={item} />);
}