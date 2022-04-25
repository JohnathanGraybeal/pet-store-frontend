import * as React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Form, Formik } from "formik";
import { InputField } from "./InputField";
import axios, { responseEncoding } from "axios";
import router from "next/router";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(0);
  const [name, setName] = useState("");

  function updateName(firstname, lastname) {
    setName(`${firstname} ${lastname}`);
  }

  function updateUser(id) {
    setUser(id);
  }

  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    window.localStorage.setItem("uid", user.toString());
  }, [user]);

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        username: "",
        password: "",
      }}
      onSubmit={async (values, { setErrors }) => {
        const response = await axios.post(
          "https://csci4350-001-pet-store.herokuapp.com/api/User/Create",
          values
        );
        if (response.data?.id) {
          updateUser(response.data.id);
          updateName(response.data.firstName, response.data.lastName);
          router.push("/");
        } else {
          setErrors(response.data);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box mt={4}>
            <InputField
              name="firstname"
              placeholder="firstname"
              label="Firstname"
            />
          </Box>
          <Box mt={4}>
            <InputField
              name="lastname"
              placeholder="lastname"
              label="Lastname"
            />
          </Box>
          <InputField name="username" placeholder="username" label="Username" />
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
            loadingText="Registering"
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
}
