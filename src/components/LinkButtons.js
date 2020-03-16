import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

export const LinkButtons = () => {
    const history = useHistory();
    return (
          <div>
            <Button onClick={() => history.push("/")} >今日のTODO</Button>
            <Button onClick={() => history.push("/future")} >明日以降のTODO</Button>
            <Button onClick={() => history.push("/done")} >完了したTODO</Button>
            <Button onClick={() => history.push("/over")} >期限切れのTODO</Button>
          </div>
    )
};