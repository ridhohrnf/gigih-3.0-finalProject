/* eslint-disable react/prop-types */
import { Box, Card, Heading, Image, Text } from '@chakra-ui/react'

export default function ProductCard({ url, title, price }) {
    const newTitle = title.split('-').join(' ');

    return (
        <Card
            w='100%'
            h='145px'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            my='2'
            >
            <Image
                objectFit='cover'
                w='45%'
                h='-moz-max-content'
                src={url}
                alt='Caffe Latte'
            />
            <Box w='60%' p='5'>
                <Heading h='60%' fontSize='sm'>{newTitle}</Heading>
                <Text h='40%' fontSize='sm'>Rp {price.toLocaleString()}</Text>
            </Box>
        </Card>
    )
}
