import React, { useState, FC } from 'react';
import Tabs from './Tabs';
import { counterList } from './data';

export const Basic = ({ tabsList = counterList, marginBetweenTabs = 20, withCounter = false }) => {
  const [selectedTab, setSelectedTab] = useState('1');
  const handleTabClick = tabID => {
    setSelectedTab(tabID);
  };
  return (
    <Tabs
      tabsList={tabsList}
      marginBetweenTabs={marginBetweenTabs}
      withCounter={withCounter}
      selectedTab={selectedTab}
      handleTabClick={handleTabClick}
    />
  );
};

export const WithCounter = ({
  tabsList = counterList,
  marginBetweenTabs = 20,
  withCounter = true,
}) => {
  const [selectedTab, setSelectedTab] = useState('1');
  const handleTabClick = tabID => {
    setSelectedTab(tabID);
  };
  return (
    <Tabs
      tabsList={tabsList}
      marginBetweenTabs={marginBetweenTabs}
      withCounter={withCounter}
      selectedTab={selectedTab}
      handleTabClick={handleTabClick}
    />
  );
};

export default {
  title: 'Components/Tabs',
  component: Basic,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
};
