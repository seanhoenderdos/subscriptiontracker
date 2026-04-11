import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary px-4 py-2">
        <Text className="text-white">Go to Onboarding</Text>
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary px-4 py-2"
      >
        <Text className="text-white">Go to sign in</Text>
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary px-4 py-2"
      >
        <Text className="text-white">Go to sign up</Text>
      </Link>
      <Link
        href="/subscriptions/spotify"
        className="mt-4 rounded bg-primary px-4 py-2"
      >
        <Text className="text-white">Spotify Subscription</Text>
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 rounded bg-primary px-4 py-2"
      >
        <Text className="text-white">Go to Claude Subscription</Text>
      </Link>
    </SafeAreaView>
  );
}
