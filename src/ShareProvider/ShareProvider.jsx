import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { createContext, useContext } from 'react';


export const ShareContext=createContext()
const ShareProvider = ({children}) => {
const {user}=useContext(AuthContext)

    const {data: profile=[], refetch:profileRefetch}=useQuery({
        queryKey: ['profileData'],
        queryFn: async()=>{
            const res= await fetch(`https://resele-server-side.vercel.app/profile?email=${user?.email}`)
            const data= await res.json()
            return data
        }
    })
    const shareInfo={profile, profileRefetch}
    return (
       <ShareContext.Provider value={shareInfo}>
        {children}
       </ShareContext.Provider>
    );
};

export default ShareProvider;