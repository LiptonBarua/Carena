import React, { useEffect, useState } from 'react';

const useBuyer = email => {
    const [isBuyer, setisBuyer] = useState(false);
    const [isBuyerLoading, setisBuyerLoading] = useState(true);
   
    useEffect(() => {
        if (email) {
            fetch(` https://resele-server-side.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                 
                    setisBuyer(data.isBuyer);
                    setisBuyerLoading(false);
})
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
}

export default useBuyer;