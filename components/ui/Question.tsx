import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

type QuestionProps = {
  Question: string;
  Answer: string;
  QuestionBy: string;
  AnswerBy?: {
    text: string;
    userBy: string;
  };
  Date?: string;
};
const Question = ({ Question, Answer, QuestionBy, AnswerBy, Date }: QuestionProps) => {
  return (
    <View style={styles.question}>
      <View style={styles.questionwriter}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View>
            <FontAwesome name="user" size={24} color="black" />
          </View>
          <Text>{QuestionBy}</Text>
        </View>
        <FontAwesome name="ellipsis-v" size={24} color="black" />
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Question:</Text>
        <Text style={{ fontSize: 16, lineHeight: 28 }}>{Question}</Text>
      </View>
      <View className="flex align-items-center flex-col" style={{ backgroundColor: "#434345" }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text style={{ color: "grey", fontWeight: "bold", fontSize: 16 }}>
            Replies
          </Text>
          <Text className="bg-red-500"> . 3 replies</Text>
        </View>
        <View>
          <Text style={{ color: "#3A643B", fontSize: 16, fontWeight: "bold" }}>
            View All 3 Replies
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  question: {
    padding: 10,
    // backgroundColor:'#f9f9f9',
    // margin:10,
    width: "100%",
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    // borderWidth:1,
  },
  questionwriter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    justifyContent: "space-between",
  },
});
