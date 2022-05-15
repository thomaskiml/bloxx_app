import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { styles } from "./components/homeStyles";

var endPointURL = "$100,000";

export default function App() {
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.container}>
        <Text>Hi, Thomas</Text>
        <Text style={styles.title}>{endPointURL}</Text>

        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => alert("Hello, world!")}>
            <View style={styles.button}>
              <Text style={styles.buttontext}>Request</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Hello, world!")}>
            <View style={styles.button}>
              <Text style={styles.buttontext}>Pay</Text>
            </View>
          </TouchableOpacity>
        </View>

        <StatusBar />
      </View>
    </SafeAreaView>
  );
}
