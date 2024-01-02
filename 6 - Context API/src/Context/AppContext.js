import { createContext,useState } from "react";
import {baseUrl} from '../baseUrl';

export const AppContext = createContext();

export function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`
        try {
            const data=await fetch(url);
            const response=await data.json();
            console.log(response);
            setPage(response.page);
            setPosts(response.posts);
            setTotalPages(response.totalPages);
        } catch (error) {
            console.log(error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlerPageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlerPageChange
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}


