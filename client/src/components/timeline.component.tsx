import {
  Timeline,
  Button,
  Modal,
  Tooltip
} from 'antd';
import {
  DeleteOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import { useState } from 'react';


interface Props {
  entries: LvesContract.Entry[];
  removeEntry(index: number): Promise<void>;
}

interface EntryLabelProps {
  date: string;
  text: string;
  index: number;
  removeEntry(index: number): Promise<void>;
  readMemory(text: string): void;
}

const { Item } = Timeline;

const EntryLabel = ({
  text,
  date,
  index,
  removeEntry,
  readMemory
}: EntryLabelProps) => {

  const onClick = async () => {
    await removeEntry(index);
  };

  return (
    <span>
      {date}:&nbsp;
      <Tooltip overlay='Read memory'>
        <Button
          style={{display: 'inline-block'}}
          type='link' icon={<EyeOutlined />}
          onClick={() => readMemory(text)}
        />
      </Tooltip>
      <Tooltip overlay='Remove memory'>
        <Button
          danger
          style={{display: 'inline-block'}}
          type='link' icon={<DeleteOutlined />}
          onClick={onClick}
        />
      </Tooltip>
    </span>
  )
}

export const LvesTimeline = ({ entries, removeEntry }: Props) => {
  const [modalContent, setModalContent] = useState('');
  if (!entries.length) {
    return (
      <div className='lves-timeline'>
        <p style={{fontSize: '16px', flexBasis: '50%', textAlign: 'left'}}>Add your first memory to see your timeline</p>
      </div>
    )
  };

  const readMemory = (text: string) => {
    setModalContent(text)
  }

  return (
    <div className='lves-timeline'>
      <Timeline
        mode='left'
        style={{
          maxHeight: '100vh',
          overflowY: 'scroll',
          marginRight: '1rem',
        }}
      >
        {entries.map(({text, createdAt}, index) => (
          <Item key={createdAt}>
            <EntryLabel
              readMemory={readMemory}
              text={text}
              date={dayjs(createdAt).format('MM/DD/YYYY h:mm a')}
              index={index}
              removeEntry={removeEntry}
            />
          </Item>
        ))}
        </Timeline>
        <Modal
          visible={Boolean(modalContent)}
          onCancel={() => setModalContent('')}
          footer={null}
        >
          {modalContent}
        </Modal>
    </div>
  )
}
