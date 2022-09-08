import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default function ToastEditor() {
  return (
    <Editor
      placeholder="내용을 입력해주세요."
      previewStyle="vertical"
      initialEditType="wysiwyg"
      height="350px"
      toolbarItems={[
        // 툴바 옵션 설정
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
      ]}
    />
  );
}
