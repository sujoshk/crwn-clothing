import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={CartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
)


const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});


export default connect(mapStateToProps)(CartDropDown);