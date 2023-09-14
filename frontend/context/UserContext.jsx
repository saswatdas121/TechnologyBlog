import {createContext,useState,useEffect} from 'react'
import axios from 'axios';
import {URL} from '../src/url'
export const UserContext=createContext({})

export function UserContextProvider({children})
{
    const [user,setUser]=useState(null);

    useEffect(()=>
    {
        getUser();
    },[])

    async function getUser()
    {
        const res=await axios.get(URL+"/refetch",{
            headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true
        });
        
        setUser(res.data);
    }

    return <UserContext.Provider value={{user,setUser}}>

     {children}

    </UserContext.Provider>
      
} 