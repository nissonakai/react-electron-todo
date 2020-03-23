import React from 'react';
import { useHistory } from 'react-router-dom';
import { Tab, Tabs, AppBar } from '@material-ui/core';

export const LinkButtons = () => {
  const history = useHistory();
  return (
    <AppBar position="static">
      <Tabs>
        <Tab onClick={() => history.push("/")} label="今日" />
        <Tab onClick={() => history.push("/future")} label="明日以降" />
        <Tab onClick={() => history.push("/done")} label="完了" />
        <Tab onClick={() => history.push("/over")} label="期限切れ" />
      </Tabs>
    </AppBar>
  )
};