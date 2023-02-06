import { View, Text } from "src/components/Themed";
import React from "react";
import Header from "src/components/Header/Header";
import { styles } from "./Dashboard.style";
import { Button } from "react-native";
import { handleSignOut } from "src/api/auth/handleSignOut";

const Dashboard = ({navigation}: any) => {
    return (
		<View style = {styles.container}>
            <Text>Dashboard</Text>
		</View>
    );
};

export default Dashboard