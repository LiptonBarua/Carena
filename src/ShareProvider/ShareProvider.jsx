import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


export const ShareContext=createContext()
const ShareProvider = ({children}) => {
const {user}=useContext(AuthContext)

    const {data: profile=[], refetch}=useQuery({
        queryKey: ['profileData'],
        queryFn: async()=>{
            const res= await fetch(`https://resele-server-side.vercel.app/profile?email=${user?.email}`)
            const data= await res.json()
            return data
        }
    })
    const shareInfo={profile}
    return (
       <ShareContext.Provider value={shareInfo}>
        {children}
       </ShareContext.Provider>
    );
};

export default ShareProvider;