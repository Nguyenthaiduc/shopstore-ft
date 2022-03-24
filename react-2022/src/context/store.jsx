import React, { createContext ,useMemo,useContext} from 'react';
import {useLocation} from 'react-router-dom'
export const Store = createContext()
export const useStore = () => useContext(Store)
export const ContextProvider = ({children}) => {
    const {search} = useLocation()
   
    const { page, sort } = useMemo(() => {
        const page = new URLSearchParams(search).get('page') || 1;
        const sort = new URLSearchParams(search).get('sort') || '-createdAt';
        console.log('%cStop Hãy Đừng Lại , Bạn Đang Bật DevTool!', 'color: red; font-size: 30px; font-weight: bold;');
        return { 
          page: Number(page),
          sort: sort
        }
      }, [search])

      const value = {page,sort}

    return(
        <Store.Provider value = {value}>
            {children}
        </Store.Provider>
    )
}   