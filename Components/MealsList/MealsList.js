import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../MealsList/MealItem';

function MealsList({ items }) {
  function renderMealItem({ item }) { 
    if (!item) return null;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});