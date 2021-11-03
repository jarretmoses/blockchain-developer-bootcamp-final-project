import { Timeline, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';


interface Props {
  entries: LvesContract.Entry[];
  removeEntry(index: number): Promise<void>;
}

interface EntryLabelProps {
  text: string,
  index: number,
  removeEntry(index: number): Promise<void>;
}

const { Item } = Timeline;

const EntryLabel = ({
  text,
  index,
  removeEntry
}: EntryLabelProps) => {

  const onClick = async () => {
    await removeEntry(index);
  };

  return (
    <span>
      {text}
      <Button
        danger
        style={{display: 'inline-block'}}
        type='link' icon={<DeleteOutlined />}
        onClick={onClick}
      />
    </span>
  )
}

export const LvesTimeline = ({ entries, removeEntry }: Props) => {
  if (!entries.length) {
    return (
      <p style={{fontSize: '16px', flexBasis: '50%'}}>Add your first post to see your timeline</p>
    )
  };

  return (
    <Timeline mode='right' style={{
      flexBasis: '50%',
      maxHeight: '100vh',
      overflowY: 'scroll',
      marginRight: '1rem',
    }}>
    {entries.map(({text, createdAt}, index) => (
      <Item
        key={createdAt}
        label={
          <EntryLabel
            text={dayjs(createdAt).format('MM/DD/YYYY h:mm a')}
            index={index}
            removeEntry={removeEntry}
          />
        }>
        <span dangerouslySetInnerHTML={{__html: text}}/>
      </Item>
    ))}
  </Timeline>
  )
}
