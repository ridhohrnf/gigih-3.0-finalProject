import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from 'axios';
import CImage from "../components/CImage";

export default function Home() {

    const [videos, setVideos] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get('https://mid-term-gigih-30-production.up.railway.app/api/v1/video/all');
                setVideos(response.data.data);

            } catch (err) {
                console.log(err);
            }
        }

        fetchVideo();
    }, [videos])
  return (
    <div>
        <Navbar/>
        <Box w='100%' h='-moz-max-content' bg='black' color='white' p='10'>
            <Wrap spacing='30px' px={{base: '20', md: '32'}}>
                {
                    videos?.map((data) => (
                        <WrapItem key={data._id}>
                            <CImage id={data._id} url={data.urlImageThumbnail} />
                        </WrapItem>
                    ))
                }
            </Wrap>
        </Box >
    </div>
  )
}
