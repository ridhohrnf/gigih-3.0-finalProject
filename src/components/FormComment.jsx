import { Box, Button, Input, Textarea } from "@chakra-ui/react";

export default function FormComment({ input, handleChange, handleSubmit }) {
	return (
		<Box w="100%" p="4" bg="gray.800" borderRadius="md" my="3">
			<Input
				w="100%"
				name="username"
				value={input.username}
				onChange={handleChange}
				variant="filled"
				bg="gray.700"
				color="white"
				fontSize="sm"
				mb="2"
				placeholder="Your Username..."
			/>
			<Textarea
				w="100%"
				name="comment"
				value={input.comment}
				onChange={handleChange}
				variant="filled"
				bg="gray.700"
				color="white"
				fontSize="sm"
				mb="2"
				placeholder="Your Comment..."
			/>
			<Button
				w="100%"
				bg="purple.600"
				color="white"
				fontSize="sm"
				onClick={handleSubmit}
				_hover={{ bg: "purple.500" }}
			>
				Submit
			</Button>
		</Box>
	);
}
