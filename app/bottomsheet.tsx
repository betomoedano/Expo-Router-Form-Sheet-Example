import { StyleSheet, Image, View, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function BottomSheet() {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("@/assets/images/router-logo.png")}
        style={styles.backgroundImage}
      />
      <ThemedText type="title" style={styles.title}>
        Welcome Beto
      </ThemedText>

      <ThemedText style={styles.description}>
        Join our community of developers and learn to code with Beto!
      </ThemedText>

      <Pressable style={styles.subscribeButton}>
        <Ionicons name="logo-youtube" size={24} color="white" />
        <Text style={styles.buttonText}>Subscribe to @codewithbeto</Text>
      </Pressable>

      <View style={styles.statsContainer}>
        <StatItem icon="people-outline" label="Subscribers" value="12K+" />
        <StatItem icon="videocam-outline" label="Videos" value="50+" />
      </View>

      <ThemedText style={styles.callToAction}>
        Don't miss out on the latest coding tutorials and tips!
      </ThemedText>
    </ThemedView>
  );
}

function StatItem({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.statItem}>
      <Ionicons name={icon as any} size={24} color="#007AFF" />
      <ThemedText style={styles.statValue}>{value}</ThemedText>
      <ThemedText style={styles.statLabel}>{label}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 48,
    alignItems: "center",
  },
  backgroundImage: {
    width: 200,
    height: 200,
    objectFit: "contain",
    position: "absolute",
    bottom: 0,
    opacity: 0.05,
  },
  title: {
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    textAlign: "center",
    marginBottom: 24,
    fontSize: 16,
  },
  subscribeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF0000",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginBottom: 24,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 24,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  callToAction: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
