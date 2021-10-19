import { Timeline, Typography, Tooltip } from 'antd';
import dayjs from 'dayjs';


interface Props {
  entries: LvesContract.Entry[];
}

const { Item } = Timeline;

export const LvesTimeline = ({ entries }: Props) => {
  if (!entries.length) {
    return (
      <p style={{fontSize: '16px'}}>Add your first post to see your timeline</p>
    )
  };

  return (
    <Timeline mode='right' style={{
      flexBasis: '40%',
      maxHeight: '100vh',
      overflowY: 'scroll'
    }}>
    {entries.map(({text, createdAt}) => (
      <Item
        key={createdAt}
        label={dayjs(createdAt).format('MM/DD/YYYY h:mm a')}
      >
        <span dangerouslySetInnerHTML={{__html: text}}/>
      </Item>
    ))}
  </Timeline>
  )
}
