import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const ComponentSelector = ({ onSelect }) => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    return (
        <View style={styles.container}>
            <DropDownPicker
                items={[
                    { label: 'Advanced', value: 'advanced' },
                    { label: 'Manual', value: 'manual' },
                ]}
                defaultValue={selectedComponent}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                itemStyle={styles.dropdownItem}
                dropDownStyle={styles.dropdownList}
                onChangeItem={(item) => {
                    setSelectedComponent(item.value);
                    onSelect(item.value);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropdownContainer: {
        height: 40,
        width: 200,
    },
    dropdown: {
        backgroundColor: '#fafafa',
    },
    dropdownItem: {
        justifyContent: 'flex-start',
    },
    dropdownList: {
        backgroundColor: '#fafafa',
    },
});

export default ComponentSelector;
