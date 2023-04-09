import { Tabs, TabList, Tab, TabIndicator, Box, Text, Flex, Button, Card, CardBody, Divider, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { getRandomCountryIcon, navbar } from "./data";
import { faker } from "@faker-js/faker";
import Disclaimer from "./Disclaimer";
import Live from "./Live";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const items = ["ALL", "LIVE", "ODDS", "FINISHED", "SCHEDULED"];

const myLeagues = [
  "Premier League",
  "Ligue 1",
  "Bundesliga",
  "Serie A",
  "PFL",
  "Copa Paulino Alcantara",
  "LaLiga",
  "AFC Champions League",
  "AFC Cup",
  "Champions League",
];

const countries = [
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Belarus",
  "Belgium",
  "Benin",
  "Bermuda",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Bulgaria",
  "Burkina Faso",
];

export default function Content() {
  const [active] = useState("LIVE");

  return (
    <Tabs as="main" position="relative" variant="unstyled">
      <Box background="blackAlpha.600">
        <TabList maxW="container.lg" mx="auto" gap="0.8rem">
          {navbar.map(({ title, Icon }, index) => (
            <Tab
              display="flex"
              alignItems="center"
              gap="0.6rem"
              cursor="pointer"
              px="0"
              py="1.2rem"
            >
              <Icon />
              <Text fontSize="xs" fontWeight="semibold">
                {title}
              </Text>
            </Tab>
          ))}
        </TabList>
      </Box>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <Flex flexDir="column" gap="3rem" maxW="container.lg" mx="auto" py="1.2rem">
      <Grid templateColumns="repeat(6, 1fr)" gap="0.8rem">
          <GridItem
            colSpan={1}
            display="flex"
            flexDir="column"
            gap="1rem"
            w="156px"
          >
            <Flex flexDir="column">
              <Text>MY LEAGUES</Text>
              <Divider mt="0.4rem" mb="1.2rem" />
              {myLeagues.map((league, index) => {
                const CountryIcon = getRandomCountryIcon();

                return (
                  <Flex
                    key={index}
                    fontSize="sm"
                    gap="1"
                    cursor="pointer"
                    _hover={{
                      background: "whiteAlpha.300",
                    }}
                  >
                    <CountryIcon width="18px" />
                    <Text
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                    >
                      {league}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
            <Flex flexDir="column">
              <Text>COUNTRIES</Text>
              <Divider mt="0.4rem" mb="1.2rem" />
              {countries.map((country, index) => (
                <Text
                  overflow="hidden"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  fontSize="sm"
                  cursor="pointer"
                  _hover={{
                    background: "whiteAlpha.300",
                  }}
                >
                  {country}
                </Text>
              ))}
              <Flex
                fontSize="sm"
                gap="1"
                cursor="pointer"
                _hover={{
                  background: "whiteAlpha.300",
                }}
              >
                <Text
                  overflow="hidden"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                >
                  Show More
                </Text>
                <KeyboardArrowDownIcon />
              </Flex>
            </Flex>
          </GridItem>
          <GridItem colSpan={5}>
            <Card mb="3rem">
              <CardBody display="flex" flexDir="column" gap="1rem">
                <Flex gap="0.4rem">
                  {items.map((item) => (
                    <Button
                      size="sm"
                      lineHeight={0}
                      bg={active === item ? "red.600" : undefined}
                      _hover={{
                        bg: active === item ? "red.500" : "whiteAlpha.300",
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Flex>
                {Array.from({
                  length: faker.datatype.number({ min: 5, max: 10 }),
                }).map((_, key) => (
                  <Live key={key} />
                ))}
              </CardBody>
            </Card>
            <Disclaimer />
          </GridItem>
        </Grid>
      </Flex>
    </Tabs>
  );
}
