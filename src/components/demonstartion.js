import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {saveInputData, getDemonstartionDetails} from '../store/actions';

const Demonstration = () => {
  const dispatch = useDispatch();

  const handleChange = text => {
    dispatch(saveInputData(text));
  };

  const {inputValue, loader, data} = useSelector(state => ({
    inputValue: state.demonstartionReducer.input,
    loader: state.demonstartionReducer.loader,
    data: state.demonstartionReducer.data,
  }));

  return (
    <>
      <Text style={styles.title}>Sample demonstartion of redux-thunk</Text>
      <View style={styles.userView}>
        <TextInput
          type="number"
          value={inputValue}
          style={styles.inputField}
          onChangeText={text => {
            handleChange(text);
          }}
          placeholder={'Enter a number between 1 to 200'}
        />
      </View>
      <Button
        title="Click to know details"
        onPress={() => dispatch(getDemonstartionDetails(inputValue))}
      />
      <View style={styles.detailsSection}>
        {loader === true ? (
          <Text style={styles.details}>Fetching details</Text>
        ) : (
          <Text style={styles.details}>{data.title}</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
  },
  userView: {
    display: 'flex',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  inputField: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  detailsSection: {
    display: 'flex',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  details: {
    textAlign: 'center',
  },
});

export default Demonstration;
