import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  user: string;
  content: string;
  likes: number;
  comments: string[];
  saved: boolean;
}

interface ForumState {
  posts: Post[];
}

const initialState: ForumState = {
  posts: [],
};

const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    likePost: (state, action: PayloadAction<number>) => {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) post.likes += 1;
    },
    commentOnPost: (state, action: PayloadAction<{ id: number; comment: string }>) => {
      const post = state.posts.find((p) => p.id === action.payload.id);
      if (post) post.comments.push(action.payload.comment);
    },
    savePost: (state, action: PayloadAction<number>) => {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) post.saved = !post.saved;
    },
  },
});

export const { setPosts, likePost, commentOnPost, savePost } = forumSlice.actions;
export default forumSlice.reducer;
