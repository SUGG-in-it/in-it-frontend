export default function removeMarkdown(markdown: string) {
  const h3 = /^### (.*$)/gim;
  const bq = /^\> (.*$)/gim;
  const bold = /\*\*(.*)\*\*/gim;
  const italics = /\*(.*)\*/gim;
  const image = /!\[(.*?)\]\((.*?)\)/gim;
  const link = /\[(.*?)\]\((.*?)\)/gim;
  const lineBreak = /\n$/gim;
  const inlineCode = '```';
  const codeBlock = '<div data-language="text" class="toastui-editor-ww-code-block"><pre><code>';
  const codeBlock2 = '</code></pre></div>';

  const removedMarkdownText = markdown
    .replace(h3, '')
    .replace(bq, '')
    .replace(bold, '')
    .replace(italics, '')
    .replace(image, '')
    .replace(link, '')
    .replace(inlineCode, '')
    .replace(lineBreak, '')
    .replace(codeBlock, '')
    .replace(codeBlock2, '');

  return removedMarkdownText.trim();
}
