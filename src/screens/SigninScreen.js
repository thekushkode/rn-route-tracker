import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
    const { state, signin } = useContext(Context);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText='Sign-in to your account!'
                errorMessage={state.errorMessage}
                submitButtonText='Sign In'
                onSubmit={signin}
            />
            <NavLink
                routeName='Signup'
                text="Don't have an account? Sign-up now!"
            />
        </View>
    )
};

SigninScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
    }
});

export default SigninScreen;