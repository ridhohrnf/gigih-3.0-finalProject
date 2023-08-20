/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import CommentCard from "../components/CommentCard";
import FormComment from "../components/FormComment";

export default function VideoDetail() {
    const {id} = useParams();
    const [videos, setVideos] = useState(null);
    const [products, setProducts] = useState(null);
    const [comments, setComments] = useState(null);
    const [inputValue, setInputValue] = useState({
        username: '',
        comment: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prevState) => ({ ...prevState, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://mid-term-gigih-30-production.up.railway.app/api/v1/comment/create/${id}`, {
                username: inputValue.username,
                comment: inputValue.comment
            });
            fetchComments();
            setInputValue({ username: '', comment: '' });
        } catch (err) {
            console.log(err);
        }
    }

    const fetchComments = async () => {
        try {
            const response = await axios.get(`https://mid-term-gigih-30-production.up.railway.app/api/v1/comment/all/${id}`);
            setComments(response.data.data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get(`https://mid-term-gigih-30-production.up.railway.app/api/v1/video/${id}`);
                setVideos(response.data.data);

            } catch (err) {
                console.log(err);
            }
        }

        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://mid-term-gigih-30-production.up.railway.app/api/v1/product/all/${id}`);
                setProducts(response.data.data);

            } catch (err) {
                console.log(err);
            }
        }
        

        fetchVideo();
        fetchProducts();
        fetchComments();
    }, [id, videos])

  return (
    <div>
        <Navbar/>
        <Grid
            h='95vh'
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={2}
            bg='black'
            py='2'
        >
            <GridItem rowSpan={3} colSpan={1} bg='tomato' px='1'
                overflowY="auto"
                css={{
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                    width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'white',
                    borderRadius: '20px',
                },
                }}
            >
                {
                    products?.map((data) => (
                        <div key={data._id}>
                            <ProductCard url={data.productLink} title={data.title} price={data.price} />
                        </div>
                    ))
                }
            </GridItem>
            <GridItem rowSpan={3} colSpan={3} bg='black' display='flex' justifyContent='center' alignItems='center'>
                <Image w='280px' h='425px' border='1px' src={videos?.urlImageThumbnail}/>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1} bg='tomato'
                overflowY="auto"
                css={{
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                    width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'white',
                    borderRadius: '20px',
                },
                }}
            >
                {
                    comments?.map((data) => (
                        <div key={data._id}>
                            <CommentCard username={data.username} comment={data.comment} />
                        </div>
                    ))
                }
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} bg='white' p='1'>
                <FormComment input={inputValue} handleChange={handleChange} handleSubmit={handleSubmit} />
            </GridItem>
        </Grid>

    </div>
  )
}
