
import React from "react";
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import './Header.css';
import { useSelector } from "react-redux";

export default function Header(props) {
    const currentState = useSelector(state => state);

    return (
        <header className="fixed-header">
            <div className="container">
                <nav>
                    <a className="logo-text" href="#">Oasis Flower Castle</a>
                    <div className="nav-right">
                        <Button className="cart-button-block" icon={<ShoppingCartOutlined style={{ fontSize: 20 }} />} size='large' onClick={props.onClick}>
                            Cart&nbsp;<span className="badge badge-danger" id="cart-count">{currentState.addedItems.length}</span>
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}