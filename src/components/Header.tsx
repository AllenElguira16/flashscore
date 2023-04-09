import { Flex, IconButton, Button, Box } from "@chakra-ui/react";
import {
  Search as SearchIcon,
  PersonOutline as PersonOutlineIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

import Logo from "./Logo";

export default function Header () {
    return (
        <Box as="header" background="blackAlpha.600">
        <Box maxW="container.lg" mx="auto" py="1.2rem">
          <Flex alignItems="center" justifyContent="space-between">
            <Logo height="32" width="275" />
            <Flex gap="0.4rem">
              <IconButton aria-label="search" icon={<SearchIcon />} size="sm" />
              <Button leftIcon={<PersonOutlineIcon />} size="sm" fontSize="sm">LOGIN</Button>
              <IconButton aria-label="menu" icon={<MenuIcon />} size="sm" />
            </Flex>
          </Flex>
        </Box>
      </Box>
    )
}
