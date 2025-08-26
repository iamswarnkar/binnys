import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Post, RootStackParamList } from '../type/types';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import PostItem from '../components/PostItem';
import useFetch from '../hooks/useFetch';
import { getPosts } from '../services/apiService';

type PostListScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  'PostList'
>;

const PostListScreen = () => {
  const { data: posts, loading, error } = useFetch(getPosts);

  const { navigate } = useNavigation<PostListScreenNavigationType>();

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: Post }) => (
    <PostItem
      item={item}
      onPress={() => navigate('PostDetails', { post: item })}
    />
  );

  const ListFooter = () => {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>End of List</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button title="Go to Counter App" onPress={() => navigate('Counter')} />
      </View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
        ListFooterComponent={ListFooter}
        ListHeaderComponentStyle={{ marginBottom: 24 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 15,
    backgroundColor: '#6200ee',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    marginHorizontal: 16,
    marginVertical: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    color: '#6200ee',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PostListScreen;
