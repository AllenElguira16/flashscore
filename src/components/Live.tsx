import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import StarOutlinedIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/StarRate";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TvIcon from "@mui/icons-material/Tv";
import GroupsIcon from "@mui/icons-material/Groups";
import { getRandomCountryIcon } from "./data";
import { faker } from "@faker-js/faker";

export default function Live() {
  const { isOpen, onToggle } = useDisclosure();
  const Icon = getRandomCountryIcon();

  return (
    <Box>
      <Flex
        gap="0.6rem"
        backgroundColor="blackAlpha.600"
        borderRadius="0.4rem"
        p="0.4rem 0.2rem"
      >
        <StarOutlinedIcon />
        <Flex gap="0.6rem" flex="1">
          <Icon width="18px" />
          <Text>
            {faker.commerce.productName()}: {faker.name.jobTitle()}
          </Text>
        </Flex>
        <Flex cursor="pointer" onClick={onToggle}>
          <Text>Live Standings</Text>
          {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Flex>
      </Flex>
      <Box display={isOpen ? "none" : "block"}>
        {Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }).map(
          (_, index) => (
            <Flex
              fontSize="sm"
              gap="0.6rem"
              borderRadius="0.4rem"
              p="0.4rem 0.2rem"
              alignItems="center"
              cursor="pointer"
              key={index}
              _hover={{
                background: "whiteAlpha.300",
              }}
            >
              <StarIcon />
              <Grid gap="0.6rem" flex="1" templateColumns="repeat(10, 1fr)">
                <GridItem textAlign="center" alignSelf="center">
                  <Text>{faker.datatype.number({ max: 100 })}</Text>
                </GridItem>
                <GridItem colSpan={5}>
                  <Text>{faker.company.name()}</Text>
                  <Text>{faker.company.name()}</Text>
                </GridItem>
                <GridItem>
                  <Text>{faker.datatype.number({ max: 5 })}</Text>
                  <Text>{faker.datatype.number({ max: 5 })}</Text>
                </GridItem>
                <GridItem>
                  <Text>({faker.datatype.number({ max: 5 })})</Text>
                  <Text>({faker.datatype.number({ max: 5 })})</Text>
                </GridItem>
                <Divider orientation="vertical" h="10" />
                <GridItem display="flex" gap="0.8rem" alignItems="center">
                  <TvIcon fontSize="small" />
                  <GroupsIcon fontSize="small" />
                </GridItem>
              </Grid>
            </Flex>
          )
        )}
      </Box>
    </Box>
  );
}
