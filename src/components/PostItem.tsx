import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Post } from '../type/types';

interface PostItemProps {
  item: Post;
  onPress: () => void;
}

const PostItem: React.FC<PostItemProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemBody}>{item.body}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemBody: {
    fontSize: 14,
    color: '#666',
  },
});

export default PostItem;
