
import React from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import './Counter.css';

export default function Counter(props) {
    return (
        <div className="cart-addons">
            <div className="addon-values">
                <a className="decrease-addon" onClick={() => props.onDecrement(props.params)}>
                    <MinusOutlined style={{ position: 'relative', top: 2 }} />
                </a>
                <a className="addon-quantity">{props.value}</a>
                <a className="increase-addon" onClick={() => props.onIncrement(props.params)}>
                    <PlusOutlined style={{ position: 'relative', top: 2 }} />
                </a>
            </div>
        </div>
    )
}