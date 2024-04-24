import React, { useEffect } from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import appStyles from '../styles/app-styles';
import Text from '../components/Text';
import { useFetchJobsQuery } from '../store';
import { ContentCard, Separator } from '../components';
import { ContentType } from '../types/content-types';

function HomeScreen() {

  const { data: jobs, error } = useFetchJobsQuery()

   useEffect(() => {
     if (error) {
       console.error(error) // Handle error
     }
   }, [jobs, error])

  return (
    <View style={(appStyles.fullSize)}>
      <Text color='app.primary' type='title.h1' textAlign='center'>JOBIFY</Text>
      <Separator height={40}/>
      <FlatList
        data={jobs}
        style={{ flexDirection: 'column' }}
        decelerationRate="fast"
        snapToAlignment="center"
        initialNumToRender={jobs?.length}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <ContentCard type={ContentType.job} data={item}></ContentCard>
            <Separator height={20} />
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});

export default HomeScreen;
