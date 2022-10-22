import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';

const InputFiled = ({
  label,
  leftIcon,
  rightIcon,
  containerStyle,
  inputStyle,
  placeholder,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {leftIcon}
        <TextInput
          style={[styles.input, !leftIcon && {marginLeft: -11}, inputStyle]}
          selectionColor="black"
          placeholder={placeholder}
          {...rest}
        />
        {rightIcon}
      </View>
    </View>
  );
};

export default InputFiled;
