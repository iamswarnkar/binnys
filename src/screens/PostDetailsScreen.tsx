import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../type/types';

type PostDetailsScreenRouteType = RouteProp<RootStackParamList, 'PostDetails'>;

const PostDetailsScreen = () => {
  const {
    params: { post },
  } = useRoute<PostDetailsScreenRouteType>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      <Text style={styles.detail}>User ID: {post.userId}</Text>
      <Text style={styles.detail}>Post ID: {post.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  detail: {
    fontSize: 14,
    color: '#888',
  },
});

export default PostDetailsScreen;
