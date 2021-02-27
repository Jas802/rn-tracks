import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign In to Your Account'
        errorMessage=''
        onSubmit={() => {}}
        submitButtonText='Sign In'
      />
      <NavLink
        text="Don't have an account? Sign up instead"
        routeName='Signup'
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SigninScreen;
