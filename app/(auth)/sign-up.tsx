import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const signUp = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text>signUp</Text>
      <Link href="/(auth)/sign-in">Already have an account? Sign in</Link>
    </SafeAreaView>
  );
};

export default signUp;
