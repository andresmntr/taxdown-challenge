import React from 'react';
import {useSelector} from 'react-redux';

import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Submission = ({index, fields}) => {
  return (
    <LinearGradient
      useAngle={true}
      angle={100}
      angleCenter={{x: 0.6, y: 0}}
      colors={['#7BE1AA', '#E0F7E9', '#f7fffa']}
      style={styles.item}>
      <Text style={styles.sectionTitle}>Submission {index + 1}</Text>
      <FlatList
        data={Object.keys(fields)}
        keyExtractor={item => item + '_' + index}
        renderItem={({item}) => (
          <Text style={{marginLeft: 20}}>
            {item}: {fields[item]}
          </Text>
        )}
      />
    </LinearGradient>
  );
};

export const SubmissionsScreen = () => {
  const submissions = useSelector(state => state.submissions);
  console.log('submissions', submissions.length, submissions);

  const renderSubmission = ({index, item}) => (
    <Submission index={index} fields={{...item}} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {submissions != undefined && submissions.length > 0 ? (
        <FlatList
          data={submissions}
          renderItem={renderSubmission}
          keyExtractor={(_, index) => 'Submission_' + index}
        />
      ) : (
        <Text style={styles.errorText}>
          There aren't any submissions. Please, fill in and submit the form.
        </Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
    padding: 20,
  },
  sectionTitle: {fontWeight: '500'},

  item: {
    // backgroundColor: '#fff',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    padding: 15,
  },
  errorText: {
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 10,
  },
});
