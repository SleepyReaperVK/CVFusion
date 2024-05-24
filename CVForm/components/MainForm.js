import React, { useState } from 'react';
import { View ,Button ,StyleSheet ,Text } from 'react-native';
import AdvencedForm from './AdvencedForm';
import ManualForm from './ManualForm';

const MainForm = () => {
    const [selectedOption, setSelectedOption] = useState('Advanced');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <View>
            <View style={styles.container}>
            <Text>Selected Option: {selectedOption}</Text>
                <Button  title="Advanced" onPress={() => handleOptionChange('Advanced')} />
                <Button  title="Manual" onPress={() => handleOptionChange('Manual')} />
            </View>
            
            {selectedOption === 'Advanced' ? <AdvencedForm /> : <ManualForm />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        paddingVertical: 40,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    button: {
        marginBottom: 16,
    },
});

export default MainForm;
