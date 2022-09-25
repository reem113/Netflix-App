import * as Yup from "yup";

import { Text, View } from "react-native";

import Button from "../../components/Button";
import { Formik } from "formik";
import Input from "../../components/Input";
import React from "react";
import styles from "./style";

const SignUpScreen = (props: any) => {
  const handleSubmit = (value: any) => {
    props.navigation.navigate("GetStartedScreen");
  };
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .trim()
      .required("Required")
      .matches(
        /(?=.*[A-Z])/,
        "Your password needs to have at least one capital letter"
      )
      .matches(
        /(?=.*[!@#$%^&*])/,
        "Your password needs to have at least one special character"
      )
      .matches(
        /(?=.*[a-z])/,
        "Your password needs to have at least one lower case character"
      )
      .matches(/(?=.*[0-9])/, "Your password needs to have at least one number")
      .min(8)
      .max(200),
  });
  return (
    <Formik
      validationSchema={SignUpSchema}
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={styles.titletxt}>
            Ready to experience unlimited TV shows &#38; movies?
          </Text>
          <Text style={styles.txt}>
            create an account and we'll send you an email with everything you
            need to know about Netflix
          </Text>
          <Input
            placeholder="Email or phone number"
            value={values.email}
            error={touched.email && errors.email}
            onChangeText={handleChange("email")}
          />

          <Input
            placeholder="Password"
            value={values.password}
            error={touched.password && errors.password}
            onChangeText={handleChange("password")}
            secureTextEntry
          />

          <Button btnText={"CONTINUE"} onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default SignUpScreen;
