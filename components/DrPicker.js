import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const DrPicker = () => {
  const [selectedValue, setSelectedValue] = useState("aca");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ borderWidth: 3,
        borderRadius: 5,
        width: 300,
        textAlign: 'center',
        marginTop: -20 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Academic" value="aca" />
        <Picker.Item label="Friction" value="fri" />
        <Picker.Item label="Non-Friction" value="nonfri" />
        <Picker.Item label="Competative Exam" value="com" />
        <Picker.Item label="Others" value="oth" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default DrPicker;
