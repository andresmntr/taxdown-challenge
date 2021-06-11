import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import {Button, TextInput} from '../components';
import logo from '../assets/td_logo.png';

import {storeSubmission} from '../redux/actions/submission';

const Components = {
  text: TextInput,
  number: TextInput,
};

export const FormScreen = ({navigation}) => {
  const [formState, setFormState] = React.useState(null);
  const formFields = useSelector(store => store.formFields);

  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   formFields = dispatch(fetchGetFormFields());
  // }, []);

  const submit = () => {
    dispatch(storeSubmission(formState));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.safeArea}>
        <View style={styles.container}>
          <Image style={styles.logo} source={logo}></Image>
          {formFields.inputFields.map((fields, index) => {
            //var key = index + '_' + fields.id;
            var key = fields.label;
            return Components[fields.type]({
              style: {...styles.input},
              props: {
                ...fields,
                key,
                onChangeText: value => {
                  formState
                    ? setFormState({...formState, [key]: value})
                    : setFormState({[key]: value});
                },
              },
              //placeholderTextColor: '#000', //"#b4b2d1"
            });
          })}
          <Button onPress={submit}>Submit</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    height: '100%',
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 35,
    resizeMode: 'contain',
  },
});
