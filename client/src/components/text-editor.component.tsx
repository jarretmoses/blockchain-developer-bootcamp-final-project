import { Button } from 'antd';
import {
  useState,
  forwardRef,
  useImperativeHandle
} from 'react';
import RichTextEditor from 'react-rte';

interface Props {
  onSubmit(value: string): void;
}

export interface TextEditorApi {
  clear(): void;
}

type Ref = ((instance: unknown) => void) | React.RefObject<unknown> | null | undefined;

const TextEditor = ({ onSubmit }: Props, ref: Ref) => {
  const [text, setText] = useState(RichTextEditor.createEmptyValue());


  useImperativeHandle(ref, () => ({
    clear: () => {
      setText(RichTextEditor.createEmptyValue());
    },
  }));


  return (
    <div className='lves-text-editor' style={{flexBasis: '50%'}}>
      <RichTextEditor
        autoFocus
        placeholder='Add entry here'
        toolbarConfig={{
          display: [],
          INLINE_STYLE_BUTTONS: [],
          BLOCK_TYPE_DROPDOWN: [],
          BLOCK_TYPE_BUTTONS: []
        }}
        rootStyle={{
          color: 'black',
          height: '80vh',
        }}
        toolbarClassName='lves-text-editor__toolbar'
        editorClassName='lves-text-editor__input'
        value={text}
        onChange={(value) => {
          setText(value);
        }}
      />

      <Button
        size='large'
        onClick={() => {
          const textString = text.toString('html');
          // Remove HTML tags to make sure text is entered
          const parsedText = textString.replace(/<[^>]*>/gi, '');

          if (parsedText) {
            onSubmit(textString);
          }
        }}
      >
        Submit
      </Button>
    </div>
  )
};

export const LvesTextEditor = forwardRef(TextEditor);
