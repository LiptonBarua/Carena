
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Pages/Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation()
  
    const {price,title} = booking;
    const stripePromise = loadStripe('pk_test_51M6UcADfQQzfn6YSeSDXwz7xVxTsKaK0J57rysnG5ALNNCg7VREjmcbbiPikVrgXFzCftHvxuMvOvngrOip6YoXX00zfXHjQEo');
   
    if(navigation.state==='loading'){
        return <Loading></Loading>
    }
    return (
        <div data-theme="luxury" className=' p-16 mt-10 rounded-lg'>
             <h1 className='text-3xl'>Payment for {title}.</h1>
             <p>Please pay <strong>${price}</strong> for your Payment.</p>
              <div className='w-96 my-10'>
            <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking}></CheckoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;