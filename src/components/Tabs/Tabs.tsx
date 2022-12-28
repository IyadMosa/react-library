import React, { FC } from "react";
import { counterList } from "./data";
import * as Styled from "./Tabs.style";

interface TabsProps {
  tabsList?: any;
  withCounter?: boolean;
  marginBetweenTabs?: number;
  handleTabClick?: (i: any) => void;
  selectedTab?: string | number;
}

const Tabs: FC<TabsProps> = ({
  tabsList = counterList,
  withCounter,
  marginBetweenTabs = 20,
  handleTabClick,
  selectedTab,
}) => {
  const onTabClick = (tabID) => {
    handleTabClick(tabID);
  };

  return (
    <Styled.TabsContainer className={"tabsContainer"}>
      {tabsList.map(({ label, disabled, debugId, id, tabsProps = {} }, i) => {
        const isSelected = id === selectedTab;
        return (
          <Styled.Wrapper
            className={"tab-and-border"}
            marginBetweenTabs={marginBetweenTabs}
            key={id}
          >
            <Styled.Tab
              selected={isSelected}
              onClick={() => !disabled && onTabClick(id)}
              key={id}
              disabled={disabled}
              data-debug-id={debugId || label}
            >
              <span className="ds-tabs-counter-label ds-font-shifter">
                {label}
              </span>

              {withCounter && (
                <Styled.Counter selected={isSelected} disabled={disabled}>
                  <div className="ds-tabs-counter-value ds-font-shifter">
                    {tabsProps["withCounter"].count}
                  </div>
                </Styled.Counter>
              )}
            </Styled.Tab>
            <Styled.SelectedBorder isSelected={isSelected} />
          </Styled.Wrapper>
        );
      })}
    </Styled.TabsContainer>
  );
};
export default Tabs;
