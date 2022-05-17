import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles } from "./styles/homeStyles";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";

var endPointURL = "$100,000";
// <Feather name="menu" size={20} color="black" />

function Home() {
  var lck = styles.black;

  return (
    <SafeAreaView style={styles.view}>
      <Feather style={styles.menu} name="menu" size={24} color="black" />
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.black}>Hi, Thomas</Text>
          <Text style={[styles.title, lck]}>{endPointURL}</Text>
        </TouchableOpacity>

        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => (lck = styles.orange)}>
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
      <View style={styles.downArrow}>
        <Feather name="arrow-down" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
}

export default Home;
