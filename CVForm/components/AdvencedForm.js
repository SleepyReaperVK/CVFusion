import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native'; // Import Alert
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Validation schema for the advanced form
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    url: Yup.string()
        .nullable()
        .matches(/\./, 'URL must contain a dot (.)'),
    port: Yup.number()
        .min(1, 'Port must be a positive number')
        .max(65535, 'Port must be less than 65536')
        .required('Port is required'),
});


const AdvencedForm = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '', url: '', port: '' }}
            validationSchema={validationSchema}
            onSubmit={values => {
                // Log form values
                console.log(values);
                // Show pop-up notification upon form submission
                Alert.alert(
                    'Success',
                    `Form submitted successfully!\n\nEmail: ${values.email}\nPassword: ${values.password}\nURL: ${values.url}\nPort: ${values.port}`,
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
                        label="URL"
                        onChangeText={handleChange('url')}
                        onBlur={handleBlur('url')}
                        value={values.url}
                        mode="outlined"
                        style={styles.input}
                        error={touched.url && errors.url ? true : false}
                    />
                    {touched.url && errors.url && <Text style={styles.errorText}>{errors.url}</Text>}

                    <TextInput
                        label="Port"
                        keyboardType="numeric"
                        onChangeText={handleChange('port')}
                        onBlur={handleBlur('port')}
                        value={values.port}
                        mode="outlined"
                        style={styles.input}
                        error={touched.port && errors.port ? true : false}
                    />
                    {touched.port && errors.port && <Text style={styles.errorText}>{errors.port}</Text>}

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

export default AdvencedForm;