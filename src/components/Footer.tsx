import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
} from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import AppleStore from "../assets/AppleStore";
import GoogleStore from "../assets/GoogleStore";
import AppleGallery from "../assets/AppleGallery";

const sites = [
  "Terms of Use",
  "Privacy Policy",
  "GDPR",
  "Advertise",
  "Contact",
  "Mobile",
  "Live Scores",
  "Recommended Sites",
  "FAQ",
  "Audio",
];

export default function Footer() {
  const disabledClick: MouseEventHandler = (event) => event.preventDefault();
  return (
    <Flex
      as="footer"
      flexDir="column"
      gap="3rem"
      maxW="container.lg"
      mx="auto"
      pt="1.2rem"
      fontSize="sm"
    >
      <Box>
        <Box>
          <Flex justifyContent="space-between" gap="12rem">
            <Box>
              <Text mb="2rem" textTransform="uppercase" fontWeight="semibold">
                Flashscore.com
              </Text>
              <Grid
                templateColumns="repeat(2, 1fr)"
                templateRows="repeat(5, 1fr)"
                columnGap="4rem"
              >
                {sites.map((site) => (
                  <GridItem>
                    <Link
                      key={site}
                      href="#"
                      textDecoration="none"
                      onClick={disabledClick}
                    >
                      {site}
                    </Link>
                  </GridItem>
                ))}
              </Grid>
            </Box>
            <Box>
              <Text mb="2rem" textTransform="uppercase" fontWeight="semibold">
                Follow Us
              </Text>
              <Flex flexDir="column" gap="0.2rem">
                <Link
                  display="flex"
                  alignItems="center"
                  gap="0.6rem"
                  href="https://twitter.com/flashscorecom"
                  target="_blank"
                  textDecoration="none"
                  onClick={disabledClick}
                >
                  <TwitterIcon style={{ height: "18px", width: "18px" }} />
                  <Text>Twitter</Text>
                </Link>
                <Link
                  display="flex"
                  alignItems="center"
                  gap="0.6rem"
                  href="https://instagram.com/flashscoreofficial"
                  target="_blank"
                  textDecoration="none"
                  onClick={disabledClick}
                >
                  <InstagramIcon style={{ height: "18px", width: "18px" }} />
                  <Text>Instagram</Text>
                </Link>
              </Flex>
            </Box>
            <Box>
              <Text mb="2rem" textTransform="uppercase" fontWeight="semibold">
                Mobile applications
              </Text>
              <Text mb="2rem">
                Our mobile app is optimized for your phone. Download it for
                free!
              </Text>
              <Flex flexDir="column" gap="0.2rem">
                <Link
                  display="inline"
                  href="https://apps.apple.com/app/id766443283?mt=8"
                  target="_blank"
                  title="iPhone/iPad application"
                >
                  <AppleStore height="28px" width="84px" />
                </Link>
                <Link
                  display="inline"
                  href="https://play.google.com/store/apps/details?id=eu.livesport.FlashScore_com"
                  target="_blank"
                  title="Android application"
                >
                  <GoogleStore height="28px" width="84px" />
                </Link>
                <Link
                  href="https://appgallery.huawei.com/app/C101497479?sharePrepath=ag"
                  target="_blank"
                  display="inline"
                  title=""
                >
                  <AppleGallery height="28px" width="84px" />
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Divider my="2rem" />
        <Box>
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Link href="http://www.flashscore.mobi/">Lite version</Link>
            </Box>
            <Box>
              <div>
                <div></div>
                <div>
                  <div>
                    Gamble Responsibly.{" "}
                    <Link
                      href="http://www.gamblingtherapy.org/"
                      textDecor="none"
                      target="_blank"
                    >
                      Gambling Therapy
                    </Link>
                    . 18+
                  </div>
                </div>
              </div>
              <Box fontSize="smaller" color="whiteAlpha.600">
                <div>
                  From 1.4.2023, Livesport s.r.o. became the operator of this
                  service.
                </div>
                <Flex alignItems="center">
                  <div>Copyright © 2006-23 Flashscore.com</div>
                  <Divider
                    orientation="vertical"
                    height="0.6rem"
                    borderLeftWidth="2px"
                    borderColor="whiteAlpha.600"
                    mx="0.6rem"
                  />
                  <div>
                    <span>Set privacy</span>
                  </div>
                </Flex>
              </Box>
            </Box>
            <Box>
              
              <Box
                backgroundColor="blackAlpha.700"
                bottom="0"
                clipPath="polygon(140px 0,100% 0,100% 100%,0 100%)"
                height="150px"
                position="absolute"
                right="0"
                width="calc(50% - 210px)"
              />
              <Link
                height="238px"
                width="191px"
                display="block"
                mt="-10rem"
                mr="1.2rem"
                background="url(https://www.flashscore.com/res/_fs/build/mobile_screen.fbb6793.png) no-repeat 50%/191px 238px"
                position="relative"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
