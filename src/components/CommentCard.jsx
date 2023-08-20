import { Box, Heading, Text } from "@chakra-ui/react";

export default function CommentCard({ username, comment }) {
	return (
		<Box w="100%" p="4" bg="gray.800" borderRadius="md" my="3">
			<Heading fontSize="md" fontWeight="semibold" color="white" mb="2">
				{username}
			</Heading>
			<Text fontSize="sm" color="gray.300" textAlign="justify">
				{comment}
			</Text>
		</Box>
	);
}
