import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from './globalStyles';
import IconSelector, { ICON_TYPE } from './common/IconSelect';
import LinearGradient from 'react-native-linear-gradient';
import TicketStatus from './TicketStatus';

const MainContent = () => {
  const [activeCard, setActiveCard] = useState(2);

  const cardData = [
    { title: 'AFFECTED ZONE', value: '2', type: 'ZONES' },
    { title: 'AFFECTED AREA', value: '3', type: 'AREAS' },
    { title: 'AFFECTED DEVICE', value: '81', type: 'DEVICES' },
    { title: 'OPEN TICKET', value: '89', type: 'TICKETS' },
  ];

  const getGradientColors = (index, isActive) => {
    if (isActive) {
      return ['#5750e2', '#ca83fb'];
    } else {
      return ['#fff', '#fff'];
    }
  };

  return (
    <>
      <LinearGradient colors={['#5558ff', '#c580f7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }} style={{ backgroundColor: 'red' }}>
        <View style={globalStyles.header}>
          <TouchableOpacity onPress={() => { }}>
            <Icon name="menu" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={{ flex: 1, justifyContent: 'flex-start', fontSize: 20, margin: 20, color: '#fff' }}>DashBoard</Text>
          <TouchableOpacity style={globalStyles.bellCotainer}>
            <Icon name="moon-outline" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.bellCotainer}>
            <Icon name="notifications-outline" size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={globalStyles.searchBox}>
          <View style={globalStyles.inputContainer}>
            <TextInput
              placeholderTextColor={'#9a9a9a'}
              placeholder="Select Customer"
              style={globalStyles.searchInput}
            />
            <TouchableOpacity>
              <IconSelector
                type={ICON_TYPE.MaterialCommunityIcons}
                name="chevron-down"
                size={25}
                color="#9a9a9a"
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <ScrollView style={globalStyles.container}>
        <View style={globalStyles.cardContainer}>
          {cardData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={globalStyles.cardWrapper}
              onPress={() => setActiveCard(index)}
            >
              <LinearGradient
                colors={getGradientColors(index, activeCard === index)}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={[
                  globalStyles.card1]}
              >
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <View style={[
                    globalStyles.iconContainer,
                    activeCard === index ? { backgroundColor: '#fff' } : { backgroundColor: '#03e7ff' },
                    { flex: 0.2, }
                  ]}>
                    <IconSelector type={ICON_TYPE.MaterialCommunityIcons} name="play" size={28} color={activeCard === index ? '#6144f3' : '#fff'} />
                  </View>
                  <View style={{ flex: 0.6 }}>
                    <Text style={[
                      globalStyles.cardTitle,
                      activeCard === index && { color: 'white' }
                    ]}>
                      {item.title}
                    </Text>
                  </View>
                </View>
                <Text style={[
                  globalStyles.cardSubtitle,
                  activeCard === index && { color: '#d6bbf8' }
                ]}>
                  OUT OF {item.value} {item.type}(S)
                </Text>
                <View style={globalStyles.cardFooter}>
                  <View style={{ borderWidth: 1, borderColor: '#fff', borderRadius: 10, padding: 5, backgroundColor: activeCard === index ? '#8a09ee' : '#ebf1fe' }}>
                    <Text style={[
                      globalStyles.cardNumber,
                      activeCard === index && { color: 'white' }
                    ]}>
                      {item.value} {item.type}
                    </Text>
                  </View>
                  <View style={[
                    globalStyles.nextIcon,
                    activeCard === index ? { backgroundColor: '#191468' } : { backgroundColor: '#ebf1fe' },
                  ]}>
                    <IconSelector type={ICON_TYPE.MaterialIcons} name="navigate-next" size={28} color={activeCard === index ? '#fff' : '#000'} />
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
        <TicketStatus />
      </ScrollView>
    </>
  );
};

export default MainContent;
