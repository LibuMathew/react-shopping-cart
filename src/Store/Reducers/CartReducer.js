


import * as ACTION_TYPES from '../Actions/Action_Types/CartActionTypes';

import Image1 from '../../Assets/images/beautiful-pink-carnations-bouquet_1.webp';
import Image2 from '../../Assets/images/sweet-pink-roses-bunch_1.webp';
import Image3 from '../../Assets/images/good-luck-two-layer-bamboo-plant_1.webp';
import Image4 from '../../Assets/images/12-purple-orchids-vase-arrangement_1.webp';
import Image5 from '../../Assets/images/roses-and-orchids-basket-arrangement_1.webp';
import Image6 from '../../Assets/images/pink-roses-with-cake_1.webp';
import Image7 from '../../Assets/images/endearing-pink-roses-bouquet_1.webp';
import Image8 from '../../Assets/images/good-luck-three-layer-bamboo-plant_1.webp';
import Image9 from '../../Assets/images/adorable-pink-carnations-flowers-bouquet_1.webp';
import Image10 from '../../Assets/images/12-splendid-pink-roses-bouquet_1.webp';
import Image11 from '../../Assets/images/elegance-pink-roses-bouquet_1.webp';
import Image12 from '../../Assets/images/truffle-cake-n-two-layer-bamboo-plant_1.webp';


const initalState = {
    items: [
        {
            "id": 1,
            "title": "Beautiful Pink Carnations Bouquet",
            "imageUrl": Image1,
            "price": {
                "currency": "INR",
                "amount": 449
            },
            "discount": "10%",
            "actualPrice": {
                "amount": 499
            },
            "isBestSeller": true
        },
        {
            "id": 2,
            "title": "Sweet Pink Roses Bunch",
            "imageUrl": Image2,
            "price": {
                "currency": "INR",
                "amount": 899
            },
            "discount": null,
            "actualPrice": {},
            "isBestSeller": true
        },
        {
            "id": 3,
            "title": "Good Luck Two Layer Bamboo Plant",
            "imageUrl": Image3,
            "price": {
                "currency": "INR",
                "amount": 549
            },
            "discount": null,
            "actualPrice": {},
            "isBestSeller": true
        },
        {
            "id": 4,
            "title": "12 Purple Orchids Vase Arrangement",
            "imageUrl": Image4,
            "price": {
                "currency": "INR",
                "amount": 1449
            },
            "discount": null,
            "actualPrice": {},
            "isBestSeller": false
        },
        {
            "id": 5,
            "title": "Roses And Orchids Basket Arrangement",
            "imageUrl": Image5,
            "price": {
                "currency": "INR",
                "amount": 1449
            },
            "discount": null,
            "actualPrice": {},
            "isBestSeller": true
        },
        {
            "id": 6,
            "title": "Pink Roses with Cake",
            "imageUrl": Image6,
            "price": {
                "currency": "INR",
                "amount": 1149
            },
            "discount": "12%",
            "actualPrice": {
                "amount": 1299
            },
            "isBestSeller": true
        },
        {
            "id": 7,
            "title": "Endearing Pink Roses Bouquet",
            "imageUrl": Image7,
            "price": {
                "currency": "INR",
                "amount": 449
            },
            "discount": "10%",
            "actualPrice": {
                "amount": 499
            },
            "isBestSeller": true
        },
        {
            "id": 8,
            "title": "Good Luck Three Layer Bamboo Plant",
            "imageUrl": Image8,
            "price": {
                "currency": "INR",
                "amount": 799
            },
            "discount": null,
            "actualPrice": {},
            "isBestSeller": true
        },
        {
            "id": 9,
            "title": "Adorable Pink Carnations Flowers Bouquet",
            "imageUrl": Image9,
            "price": {
                "currency": "INR",
                "amount": 649
            },
            "discount": "13%",
            "actualPrice": {
                "amount": 750
            },
            "isBestSeller": false
        },
        {
            "id": 10,
            "title": "12 Splendid Pink Roses Bouquet",
            "imageUrl": Image10,
            "price": {
                "currency": "INR",
                "amount": 499
            },
            "discount": null,
            "actualPrice": {},
            "isBestSeller": true
        },
        {
            "id": 11,
            "title": "Elegance - Pink Roses Bouquet",
            "imageUrl": Image11,
            "price": {
                "currency": "INR",
                "amount": 599
            },
            "discount": "10%",
            "actualPrice": {
                "amount": 669
            },
            "isBestSeller": false
        },
        {
            "id": 12,
            "title": "Truffle Cake N Two Layer Bamboo Plant",
            "imageUrl": Image12,
            "price": {
                "currency": "INR",
                "amount": 1249
            },
            "discount": null,
            "actualPrice": {},
            "isBestSeller": false
        }
    ],
    addedItems: [],
    total: 0,
    totalDiscount: 0
}

const cartReducer = (state = initalState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART: {
            let addedItem = state.items.find(item => item.id === action.id);
            let existedItem = state.addedItems.find(item => action.id === item.id);
            if (existedItem) {
                addedItem['quantity'] += 1;
                let newTotalDiscount = state.totalDiscount;
                if (addedItem.discount && addedItem.discount != null) {
                    newTotalDiscount += (addedItem.actualPrice.amount - addedItem.price.amount)
                }
                return {
                    ...state,
                    total: state.total + addedItem.price.amount,
                    totalDiscount: newTotalDiscount
                }
            }
            addedItem['quantity'] = 1;
            addedItem.isAddedToCart = true;
            let newTotal = state.total + addedItem.price.amount;
            let newTotalDiscount = state.totalDiscount;
            if (addedItem.discount && addedItem.discount != null) {
                newTotalDiscount += (addedItem.actualPrice.amount - addedItem.price.amount)
            }
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
                totalDiscount: newTotalDiscount
            }
        }
        case ACTION_TYPES.REMOVE_ITEM: {
            let itemToRemove = state.addedItems.find(item => action.id === item.id);
            let newItems = state.addedItems.filter(item => action.id !== item.id);
            let newTotal = state.total - (itemToRemove.price.amount * itemToRemove.quantity);
            let newTotalDiscount = state.totalDiscount;
            if (itemToRemove.discount && itemToRemove.discount != null) {
                newTotalDiscount -= ((itemToRemove.actualPrice.amount - itemToRemove.price.amount) * itemToRemove.quantity);
            }
            return {
                ...state,
                items: state.items.map(item => item.id === action.id ?
                    { ...item, isAddedToCart: false } :
                    item
                ),
                addedItems: newItems,
                total: newTotal,
                totalDiscount: newTotalDiscount
            }
        }
        case ACTION_TYPES.ADD_QUANTITY: {
            let addedItem = state.items.find(item => item.id === action.id);
            addedItem.quantity += 1
            let newTotal = state.total + addedItem.price.amount;
            let newTotalDiscount = state.totalDiscount;
            if (addedItem.discount && addedItem.discount != null) {
                newTotalDiscount += (addedItem.actualPrice.amount - addedItem.price.amount);
            }
            return {
                ...state,
                total: newTotal,
                totalDiscount: newTotalDiscount
            }
        }
        case ACTION_TYPES.SUB_QUANTITY: {
            let addedItem = state.items.find(item => item.id === action.id);
            if (addedItem.quantity === 1) {
                let newItems = state.addedItems.filter(item => item.id !== action.id);
                let newTotal = state.total - addedItem.price.amount;
                let newTotalDiscount = state.totalDiscount;
                if (addedItem.discount && addedItem.discount != null) {
                    newTotalDiscount -= (addedItem.actualPrice.amount - addedItem.price.amount);
                }
                return {
                    ...state,
                    items: state.items.map(item => item.id === action.id ?
                        { ...item, isAddedToCart: false } :
                        item
                    ),
                    addedItems: newItems,
                    total: newTotal,
                    totalDiscount: newTotalDiscount
                }
            }
            addedItem.quantity -= 1;
            let newTotal = state.total - addedItem.price.amount;
            let newTotalDiscount = state.totalDiscount;
            if (addedItem.discount && addedItem.discount != null) {
                newTotalDiscount -= (addedItem.actualPrice.amount - addedItem.price.amount);
            }
            return {
                ...state,
                total: newTotal,
                totalDiscount: newTotalDiscount
            }
        }
        default:
            return state;
    }
}

export default cartReducer;