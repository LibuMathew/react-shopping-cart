import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';
import { List, Avatar, Row, Col, Card } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";

import 'antd/dist/antd.css';
import './App.css';

import Header from './Component/Header/Header';
import CardList from './Component/CardList/CardList';
import * as ACTIONS from './Store/Actions/CartActions';

import Counter from './Component/Helper/Counter/Counter';

function App() {

  const currentState = useSelector(state => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("My Cart (0)");

  useEffect(() => {
    const tilte = `My Cart (${currentState.addedItems.length})`;
    setModalTitle(tilte);
  }, [currentState]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible(false);
      setLoading(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onIncrementHandler = (ev) => {
    dispatch(ACTIONS.addQuantity(ev.id));
  };
  
  const onDecrementHandler = (ev) => {
    dispatch(ACTIONS.subtractQuantity(ev.id));
  };


  return (
    <div className="App">
      <Header onClick={showModal} />
      <div className="container">
        <div className="card-list-container flex-container wrap">
          <CardList data={currentState.items} />
        </div>

        <Modal
          visible={visible}
          title={modalTitle}
          onOk={handleOk}
          onCancel={handleCancel}
          width="800px"
          footer={[
            <Button key="empty_cart" type="danger" onClick={handleCancel} style={{ float: 'left' }}>
              Empty Cart
            </Button>,
            <Button key="back" onClick={handleCancel}>
              Continue Shopping
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={handleOk} style={{ background: '#27b928' }}>
              Place Order
            </Button>,
          ]}
        >

          <Row>
            <Col span={16}>
              <List
                itemLayout="horizontal"
                dataSource={currentState.addedItems}
                style={{ borderRight: '1px solid #f0f0f0', marginRight: 5, paddingRight: 5 }}
                renderItem={item => (
                  <List.Item
                    actions={[
                      <Counter value={item.quantity} params={item} onIncrement={onIncrementHandler} onDecrement={onDecrementHandler} />,
                      <a key="list-remove" onClick={() => dispatch(ACTIONS.removeItem(item.id))}>remove</a>
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.imageUrl} />}
                      title={item.title}
                    />
                  </List.Item>
                )}
              />
            </Col>
            <Col span={8}>
              <Card size="small" title="Price Details" style={{ width: 265 }}>
                <Row style={{ marginBottom: 5 }}>
                  <Col span={18}>Price (4 items)</Col>
                  <Col span={6}>₹{currentState.total}</Col>
                </Row>
                <Row style={{ marginBottom: 5 }}>
                  <Col span={18}>Delivery Fee</Col>
                  <Col span={6}>₹50</Col>
                </Row>
                <Row style={{ borderTop: '1px dotted #ccc', borderBottom: '1px dotted #ccc', marginBottom: 5, padding: '10px 0px 10px 0px' }}>
                  <Col span={18} style={{ fontWeight: 700, fontSize: 16 }}>Total Amount</Col>
                  <Col span={6}>₹{currentState.total + 50}</Col>
                </Row>
                {
                  currentState.totalDiscount > 0 ? (
                    <Row>
                      <Col style={{ color: '#388e3c' }}>You will save ₹{currentState.totalDiscount} on this order</Col>
                    </Row>
                  ) : null
                }

              </Card>
            </Col>
          </Row>

        </Modal>

      </div>
      <div className="fixed-footer">
        <div className="container">Copyright &copy; 2020 Oasis Flower Castle</div>
      </div>
    </div>
  );
}

export default App;
