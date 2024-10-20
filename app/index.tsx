import { Pressable, Text, View } from "react-native";

import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href={"/bottomsheet"} asChild>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FF0000",
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 25,
            marginBottom: 24,
          }}
          onPress={() => {
            // Subscribe to @codewithbeto on youtube :)
          }}
        >
          <Ionicons name="logo-youtube" size={24} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 8,
            }}
          >
            Subscribe to @codewithbeto
          </Text>
        </Pressable>
      </Link>

      {/* Spacer */}
      <View style={{ flex: 0.3 }} />
    </View>
  );
}
