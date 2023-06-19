import React, { useEffect, useState } from 'react';

const useSaller = email => {
    const [isSeller, setisSeller] = useState(false);
    const [isSellerLoading, setisSellerLoading] = useState(true);
   
    useEffect(() => {
        if (email) {
            fetch(`https://server12.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setisSeller(data.isSeller);
                    setisSellerLoading(false);
})
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default useSaller;