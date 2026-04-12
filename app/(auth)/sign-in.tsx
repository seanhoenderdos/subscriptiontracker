import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const signIn = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text>signIn</Text>
      <Link href="/(auth)/sign-up">Create account</Link>
      <Link href="/(tabs)">Go to app</Link>
    </SafeAreaView>
  );
};

export default signIn;
