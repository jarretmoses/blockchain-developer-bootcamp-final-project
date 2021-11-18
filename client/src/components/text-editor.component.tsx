import { Button } from 'antd';
import {
  useState,
  forwardRef,
  useImperativeHandle
} from 'react';

import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

interface Props {
  onSubmit(value: string): Promise<void>;
}

export interface TextEditorApi {
  clear(): void;
}

type Ref = ((instance: unknown) => void) | React.RefObject<unknown> | null | undefined;

const TextEditor = ({ onSubmit }: Props, ref: Ref) => {
  const [isAddingMemory, setIsAddingMemory] = useState(false);
  const [text, setText] = useState(EditorState.createEmpty());


  useImperativeHandle(ref, () => ({
    clear: () => {
      setText(EditorState.createEmpty());
    },
  }));


  return (
    <div className='lves-text-editor' style={{flexBasis: '50%'}}>
      <div className='wrapper-class'>
        <Editor
          editorState={text}
          placeholder='Enter memory here...'
          onChange={(value) => {
            setText(value);
          }}
        />
      </div>
      <Button
        disabled={isAddingMemory}
        size='large'
        onClick={async () => {
          setIsAddingMemory(true);
          const textString = text.getCurrentContent().getPlainText();

          await onSubmit(textString);

          setIsAddingMemory(false);
        }}
      >
        Submit
      </Button>
    </div>
  )
};

export const LvesTextEditor = forwardRef(TextEditor);
