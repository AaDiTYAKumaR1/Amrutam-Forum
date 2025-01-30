import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

type QuestionProps = {
  Question: string;
  Answers: { text: string; userBy: string }[];
  QuestionBy: string;
  Date?: string;
};

const Question = ({ Question, Answers, QuestionBy, Date }: QuestionProps) => {
  const [showAllReplies, setShowAllReplies] = useState(false);

  return (
    <View style={styles.question}>
      <View style={styles.questionwriter}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <FontAwesome name="user" size={24} color="black" />
          <Text>{QuestionBy}</Text>
        </View>
        <FontAwesome name="ellipsis-v" size={24} color="black" />
      </View>

      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Question:</Text>
        <Text style={{ fontSize: 16, lineHeight: 28 }}>{Question}</Text>
      </View>

      {/* Display the first answer */}
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Doctor's Answer:</Text>
        <Text style={{ fontSize: 16 }}>{Answers[0].text}</Text>
        <Text style={{ fontSize: 14, color: "grey", fontWeight: "bold" }}>
          - {Answers[0].userBy}
        </Text>
      </View>

      {/* Replies Section */}
      {Answers.length > 1 && (
        <View style={{ backgroundColor: "#EAEAEA", padding: 10, borderRadius: 10 }}>
          <TouchableOpacity onPress={() => setShowAllReplies(!showAllReplies)}>
            <Text style={{ color: "#3A643B", fontSize: 16, fontWeight: "bold" }}>
              {showAllReplies ? "Hide Replies" : `View All ${Answers.length} Replies`}
            </Text>
          </TouchableOpacity>

          {showAllReplies &&
            Answers.slice(1).map((reply, index) => (
              <View key={index} style={{ paddingVertical: 5 }}>
                <Text style={{ fontSize: 16 }}>{reply.text}</Text>
                <Text style={{ fontSize: 14, color: "grey", fontWeight: "bold" }}>
                  - {reply.userBy}
                </Text>
              </View>
            ))}
        </View>
      )}
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  question: {
    padding: 10,
    width: "100%",
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  questionwriter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    justifyContent: "space-between",
  },
});
