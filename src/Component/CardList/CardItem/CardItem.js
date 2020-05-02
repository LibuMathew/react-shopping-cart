import React from "react";
import { Card } from 'antd';
import { HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

import './CardItem.css';

import { useDispatch } from "react-redux";

import * as CART_ACTIONS from '../../../Store/Actions/CartActions';
import * as FAVOURITE_ACTIONS from '../../../Store/Actions/FavouriteAction';
import HeartIcon from '../../Helper/CustomIcon/HeartIcon';

const { Meta } = Card;

export default function CardItem(props) {

    const dispatch = useDispatch();

    const getActionButton = (id) => {
        return !props.isAddedToCart ? (
            <div style={{ fontWeight: 700 }} onClick={() =>
                dispatch(CART_ACTIONS.addToCart(props.data.id))
            }>Add to cart</div>
        ) : (
                <div style={{ fontWeight: 700, color: '#F44336' }} onClick={() =>
                    dispatch(CART_ACTIONS.removeItem(props.data.id))
                }>Remove</div>
            );
    };

    const getFavouriteIcon = (id) => {
        return props.isFavourite ? (
            <HeartIcon style={{ color: 'hotpink' }} onClick={() => dispatch(FAVOURITE_ACTIONS.removeFavourite(id))} />
        ) : (<HeartTwoTone key="favourite" twoToneColor="#eb2f96" onClick={() => dispatch(FAVOURITE_ACTIONS.addToFavourite(id))} />);
    }

    return (
        <Card
            hoverable
            style={{ width: 240, margin: 10 }}
            cover={<img alt={props.data.title} src={props.data.imageUrl} />}
            actions={[
                getActionButton(props.data.id),
                getFavouriteIcon(props.data.id)
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