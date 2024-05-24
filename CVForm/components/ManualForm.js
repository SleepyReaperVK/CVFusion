import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native'; 
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';


const manualValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
        url: Yup.string()
        .nullable()
        .matches(/\./, 'URL must contain a dot (.)'),
});

const ManualForm = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '', url: '' }}
            validationSchema={manualValidationSchema}
            onSubmit={values => {
                console.log(values);
                Alert.alert(
                    'Success',
                    `Form submitted successfully!\n\nEmail: ${values.email}\nPassword: ${values.password}\nURL: ${values.url}`,
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') }
                    ],
                    { cancelable: false }
                );
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <TextInput
                        label="Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        mode="outlined"
                        style={styles.input}
                        error={touched.email && errors.email ? true : false}
                    />
                    {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                    <TextInput
                        label="Password"
                        secureTextEntry
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        mode="outlined"
                        style={styles.input}
                        error={touched.password && errors.password ? true : false}
                    />
                    {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                    <TextInput
                        label="URL (Optional)"
                        onChangeText={handleChange('url')}
                        onBlur={handleBlur('url')}
                        value={values.url}
                        mode="outlined"
                        style={styles.input}
                    />

                    <Button mode="contained" onPress={handleSubmit} style={styles.button}>
                        Submit
                    </Button>
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 16,
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
    }
});

export default ManualForm;
