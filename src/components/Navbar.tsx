import React, {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import RemixIcon from 'react-native-remix-icon';
import tw from 'twrnc';

const Navbar: React.FC = () => {
  return (
    <SafeAreaView style={styles.navbar}>
      <NavButton icon="ri-checkbox-multiple-line" label="Plan" />
      <NavButton icon="ri-book-2-line" label="Historia" />
      <NavButton icon="ri-home-3-fill" label="" />
      <NavButton icon="ri-booklet-line" label="Cursos" />
      <NavButton icon="ri-menu-5-line" label="Menú" />
    </SafeAreaView>
  );
};

const NavButton: React.FC<
  PropsWithChildren<{
    label: string;
    icon: string;
  }>
> = ({label, icon}) => {
  return (
    <>
      <TouchableOpacity style={styles.navButton}>
        <RemixIcon name={icon} size={24} color="black" />
        <Text style={styles.buttonTitle}>{label}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  navbar: tw`flex-row items-center justify-center mb-100`,
  navButton: tw`w-15 items-center justify-center mx-1`,
  buttonTitle: tw`text-xs font-semibold text-black`,
});

export default Navbar;
