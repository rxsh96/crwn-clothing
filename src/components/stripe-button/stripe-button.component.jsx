import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HeBXzIBREGxK7rJNllXuwPoDSs8nxGEUSqmARhymJn6a5FJPIApQYkmiglcMdmZcDgbJ0yHgeyMeyqC5iOcHw9C00rMTIzO92';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful');
    }
    
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;