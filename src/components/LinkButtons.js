import React from 'react';
import { useHistory } from 'react-router-dom';
import { Tab, Tabs, AppBar } from '@material-ui/core';

export const LinkButtons = ({tabValue, setTabValue}) => {
  const history = useHistory();
  const handleTabs = (num, path) => {
    setTabValue(num);
    history.push(path);
  };

  return (
    <AppBar position="static">
      <Tabs value={tabValue}>
        <Tab onClick={() => handleTabs("1", "/")} label="今日" value="1" />
        <Tab onClick={() => handleTabs("2", "/future")} label="明日以降" value="2" />
        <Tab onClick={() => handleTabs("3", "/done")} label="完了" value="3" />
        <Tab onClick={() => handleTabs("4", "over")} label="期限切れ" value="4" />
      </Tabs>
    </AppBar>
  )
};