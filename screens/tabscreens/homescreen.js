import { Image, Text, View } from "react-native";
import image1 from "../../assets/image1.jpeg";
function HomeScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Image
        style={{ width: "100%", height: 300, marginBlock: 30 }}
        source={image1}
      />
      <Text>Details: 2024 Lexus NX • 350</Text>
      <Text>Miles: 8,615</Text>
      <Text>Price: $10,000</Text>
      <Text>Deposite: $1,000</Text>
      <Text>Available</Text>
      <Text>warranty: "2 Years</Text>
    </View>
  );
}

export default HomeScreen;
