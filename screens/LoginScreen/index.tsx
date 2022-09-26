import * as Yup from "yup";

import { Pressable, Text, View } from "react-native";

import Button from "../../components/Button";
import { Formik } from "formik";
import Input from "../../components/Input";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = (props: any) => {
  const navigation = useNavigation();
  const handleSubmit = (value: any) => {
    props.navigation.navigate("WhoIsWatchingScreen");
  };
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().trim().required("Required"),
  });
  return (
    <Formik
      validationSchema={SignInSchema}
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Input
            placeholder="Email or phone number"
            value={values.email}
            error={touched.email && errors.email}
            onChangeText={handleChange("email")}
            keyboard={"email-address"}
            contentText={"emailAddress"}
          />

          <Input
            placeholder="Password"
            value={values.password}
            error={touched.password && errors.password}
            onChangeText={handleChange("password")}
            secureTextEntry
            keyboard={"numbers-and-punctuation"}
            contentText={"password"}
          />

          <Button btnText={"Sign In"} onPress={handleSubmit} />

          <View style={styles.others}>
            <Pressable>
              <Text style={styles.help}>Need help?</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("SignUpScreen")}>
              <Text style={styles.signup}>New to Netflix? Sign up now.</Text>
            </Pressable>

            <Text style={styles.protection}>
              Sign in is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;
