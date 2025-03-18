/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import IconSelector, { ICON_TYPE } from './common/IconSelect';
import globalStyles from './globalStyles';

const TicketStatus = () => {
    const statuses = [
        { label: 'Low', color: 'green', value: 0 },
        { label: 'Medium', color: 'orange', value: 1 },
        { label: 'High', color: 'blue', value: 2 },
        { label: 'Immediate', color: 'red', value: 3 },
    ];

    return (
        <View style={globalStyles.mainContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, }}>
                <IconSelector
                    type={ICON_TYPE.MaterialCommunityIcons}
                    name={"ticket-confirmation"}
                    size={22}
                    color={'#b60ab8'}
                />
                <Text style={globalStyles.title}>Ticket Status</Text>
            </View>
            <View style={globalStyles.statusContainer}>
                {statuses.map((status, index) => (
                    <View key={index} style={globalStyles.status}>
                        <View style={globalStyles.topRow}>
                            <View style={[globalStyles.square, { backgroundColor: status.color }]} />
                            <Text style={globalStyles.label}>{status.label}</Text>
                        </View>
                        <Text style={globalStyles.value}>{status.value}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default TicketStatus;
