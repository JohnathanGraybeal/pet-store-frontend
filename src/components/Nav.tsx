import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  useColorMode,
  Box,
  useColorModeValue,
  Flex,
  Stack,
  Button,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "./Link";
import { Logo } from "./Logo";

interface NavProps {}

export const Nav: React.FC<NavProps> = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position={"sticky"}
        top={0}
      >
        <Flex
          as="nav"
          h={16}
          w="fit-content"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Logo />
          <Link href="/">Home</Link>
          <Link href="/browse/animals">Animals</Link>
          <Link href="/browse/merchandise">Merchandise</Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://avatars.dicebear.com/api/bottts/:username.svg"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://avatars.dicebear.com/api/bottts/:username.svg"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Orders</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem><Link href="/login">Log in</Link></MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
