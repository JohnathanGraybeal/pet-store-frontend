import { useEffect, useState } from "react";
import axios from "axios";
import {
  Flex,
  Heading,
  Button,
  Stack,
  Box,
  Link,
  Avatar,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import router from "next/router";
import { InputField } from "./InputField";

const App = () => {
  const [id, setId] = useState("0");
  const [name, setName] = useState("");

  useEffect(() => {
    setName(window.localStorage.getItem("name"));
  }, [name]);

  useEffect(() => {
    setId(window.localStorage.getItem("uid"));
  }, [id]);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">
          Welcome {name != null ? name.toUpperCase() : ""}
        </Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={async (values, { setErrors }) => {
              const response = await axios.post(
                `https://csci4350-001-pet-store.herokuapp.com/api/User/one/${id}`,
                values
              );
              if (response.data?.id) {
                router.push("/");
              } else {
                setErrors(response.data);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputField
                  name="username"
                  placeholder="username"
                  label="Username"
                />

                <Box mt={4}>
                  <InputField
                    name="password"
                    placeholder="password"
                    label="Password"
                    type="password"
                  />
                </Box>
                <Button
                  mt={4}
                  type="submit"
                  colorScheme="blue"
                  isLoading={isSubmitting}
                  loadingText="Logging in"
                >
                  Log In
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="teal.500" href="/signup">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default App;
