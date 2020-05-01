import React, { useEffect, useState } from "react";
import { Card } from 'antd';
import { HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

import './CardItem.css';

import { useDispatch, useSelector } from "react-redux";

import * as ACTIONS from '../../../Store/Actions/CartActions';

const { Meta } = Card;

export default function CardItem(props) {

    const currentState = useSelector(state => state);
    const dispatch = useDispatch();

    const getActionButton = (id) => {
        const itemObject = currentState.addedItems.findIndex(item => item.id === id);
        return itemObject == -1 ? (
            <div style={{ fontWeight: 700 }} onClick={() =>
                dispatch(ACTIONS.addToCart(props.data.id))
            }>Add to cart</div>
        ) : (
                <div style={{ fontWeight: 700, color: '#F44336' }} onClick={() =>
                    dispatch(ACTIONS.removeItem(props.data.id))
                }>Remove</div>
            );
    }

    return (
        <Card
            hoverable
            style={{ width: 240, margin: 10 }}
            cover={<img alt={props.data.title} src={props.data.imageUrl} />}
            actions={[
                getActionButton(props.data.id),
                <HeartTwoTone key="favourite" twoToneColor="#eb2f96" />
            ]}
        >
            {props.data.isBestSeller ? (<span className="all-tags best-seller"></span>) : null}
            <Meta title={props.data.title} />
            <div className="price-description">
                {props.data.isAddedToCart ? (<CheckCircleTwoTone twoToneColor="#52c41a" />) : null}&nbsp;
                {props.data.price.currency === 'INR' ? (<span style={{ fontSize: 20 }}>&#8377;</span>) : null}{props.data.price.amount}
                {
                    props.data.discount ? (
                        <React.Fragment>
                            &nbsp;&nbsp;
                            <span style={{ fontSize: 14, textDecoration: 'line-through' }}>
                                &#8377;{props.data.actualPrice.amount}
                            </span>&nbsp;
                            <span style={{
                                color: '#2ec735',
                                fontSize: 12,
                                fontWeight: 600,
                                textAlign: "center"
                            }}>{`${props.data.discount} OFF`}</span>
                        </React.Fragment>
                    ) : null
                }
            </div>
        </Card >
    );
}