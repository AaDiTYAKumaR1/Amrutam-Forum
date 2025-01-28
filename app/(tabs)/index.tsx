import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import React, { useState } from "react";
import { Text, View } from "@/components/Themed";
import Question from "@/components/ui/Question";
import question from "../Data/Dummy.js"
export default function TabOneScreen() {
  const [activeTab, setActiveTab] = useState("Questions");

  return (
    <View style={styles.container}>
      <View style={styles.Topcontainer}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={{ width: "100%", height: "100%" }}
        />
       
      </View>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeTab === "Questions" ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setActiveTab("Questions")}
        >
          <Text
            style={[
              styles.buttonText,
              activeTab === "Questions" ? styles.activeText : styles.inactiveText,
            ]}
          >
            Questions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeTab === "Thoughts" ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setActiveTab("Thoughts")}
        >
          <Text
            style={[
              styles.buttonText,
              activeTab === "Thoughts" ? styles.activeText : styles.inactiveText,
            ]}
          >
            Thoughts
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {activeTab === "Questions" ? (
         <ScrollView className="mb-60">
           {question.map((item) => (
            <Question  key={item.Question}
              Question={item.Question}
              Answer={item.Answer.text}
              QuestionBy={item.QuestionBy}
              AnswerBy={item.Answer}
              Date={item.Date}
              />
          ))}
         </ScrollView>
        ) : (
          <Text style={styles.contentText} >This is the Thoughts view.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  Topcontainer: {
    height: 188,
    width: "100%",
  },
  toggleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width:328,
    gap: 10,
    backgroundColor: "#fff",
  },
  button: {
    width: 150,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "black",
  },
  inactiveButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activeText: {
    color: "white",
  },
  inactiveText: {
    color: "black",
  },
  contentContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    width:'100%',
  },
  contentText: {
    fontSize: 16,
    color: "#fff",
  },
});
