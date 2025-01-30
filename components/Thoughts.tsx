import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {thoughts} from '@/app/Data/Dummy.js' // Import the thoughts array

// Define Thought and Comment Types
type Comment = {
  user: string;
  text: string;
};

type Thought = {
  id: number;
  text: string;
  userBy: string;
  likes: number;
  comments: Comment[];
  date: string;
};

const ThoughtSection: React.FC = () => {
  const [thoughtList, setThoughtList] = useState<Thought[]>(thoughts); 
  const [newComments, setNewComments] = useState<{ [key: number]: string }>({}); // Store new comment text for each thought

  // Handle like
  const handleLike = (id: number) => {
    setThoughtList(
      thoughtList.map((thought) =>
        thought.id === id ? { ...thought, likes: thought.likes + 1 } : thought
      )
    );
  };

  // Handle adding a comment
  const handleAddComment = (id: number) => {
    if (!newComments[id]) return;

    setThoughtList(
      thoughtList.map((thought) =>
        thought.id === id
          ? { ...thought, comments: [...thought.comments, { user: "You", text: newComments[id] }] }
          : thought
      )
    );
    setNewComments((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <FlatList
      data={thoughtList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.thought}>
          <Text style={styles.user}>{item.userBy}</Text>
          <Text style={styles.text}>{item.text}</Text>

          {/* Like Button */}
          <View style={styles.actionRow}>
            <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.likeButton}>
              <FontAwesome name="thumbs-up" size={20} color="blue" />
              <Text style={{ marginLeft: 5 }}>{item.likes}</Text>
            </TouchableOpacity>
          </View>

          {/* Comments Section */}
          <View style={styles.commentSection}>
            {item.comments.map((comment, index) => (
              <Text key={index} style={styles.comment}>
                <Text style={{ fontWeight: "bold" }}>{comment.user}: </Text>
                {comment.text}
              </Text>
            ))}

            {/* Add Comment Input */}
            <View style={styles.commentInputContainer}>
              <TextInput
                placeholder="Add a comment..."
                value={newComments[item.id] || ""}
                onChangeText={(text) => setNewComments((prev) => ({ ...prev, [item.id]: text }))}
                style={styles.input}
              />
              <TouchableOpacity onPress={() => handleAddComment(item.id)}>
                <FontAwesome name="send" size={20} color="green" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default ThoughtSection;

const styles = StyleSheet.create({
  thought: {
    backgroundColor: "#F9F9F9",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
  user: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  text: {
    fontSize: 15,
    marginVertical: 8,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  commentSection: {
    marginTop: 10,
  },
  comment: {
    fontSize: 14,
    backgroundColor: "#EAEAEA",
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  commentInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 5,
    marginRight: 10,
  },
});
