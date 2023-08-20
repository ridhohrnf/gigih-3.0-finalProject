import {
	Box,
	Flex,
	Text,
	IconButton,
	Collapse,
	Icon,
	useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box bg="black" color="white" py="2" px="4" borderBottom="1px solid black">
			<Flex alignItems="center" justify="space-between">
				<IconButton
					onClick={onToggle}
					icon={
						isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={6} h={6} />
					}
					variant="solid"
					aria-label="Toggle Navigation"
					display={{ base: "block", md: "none" }}
				/>
				<Flex as="nav" display={{ base: "none", md: "flex" }}>
					<NavItem label="Live" />
					<NavItem label="Find Product" />
					<NavItem label="Docs" />
					<NavItem label="About Us" />
				</Flex>
			</Flex>

			<Collapse in={isOpen}>
				<MobileNavItems />
			</Collapse>
		</Box>
	);
}

const NavItem = ({ label }) => {
	return (
		<Text
			fontSize="sm"
			fontWeight="semibold"
			color="white"
			p="2"
			_hover={{ color: "purple.600" }}
		>
			{label}
		</Text>
	);
};

const MobileNavItems = () => {
	return (
		<Flex direction="column" bg="black" p="4" display={{ md: "none" }}>
			<NavItem label="Live" />
			<NavItem label="Find Product" />
			<NavItem label="Docs" />
			<NavItem label="About Us" />
		</Flex>
	);
};
