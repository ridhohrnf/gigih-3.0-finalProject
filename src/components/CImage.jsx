/* eslint-disable react/prop-types */
import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function CImage({ id, url }) {
	const navigate = useNavigate();

	function handleClick() {
		navigate(`/video/${id}`);
	}

	return (
		<Box
			w="250px"
			h="480px"
			mb="2"
			_hover={{ cursor: "pointer" }}
			onClick={handleClick}
		>
			<Image w="100%" h="100%" src={url} />
		</Box>
	);
}
