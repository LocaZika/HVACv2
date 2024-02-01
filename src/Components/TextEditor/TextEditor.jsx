import { Bold, Italic, Underline } from "@ckeditor/ckeditor5-basic-styles";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Link } from "@ckeditor/ckeditor5-link";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Undo } from "@ckeditor/ckeditor5-undo";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { useState } from "react";
import { Markdown } from "@ckeditor/ckeditor5-markdown-gfm";
import { List } from "@ckeditor/ckeditor5-list";
import { Table, TableToolbar } from "@ckeditor/ckeditor5-table";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Image, ImageCaption, ImageInsert, ImageResize, ImageStyle, ImageToolbar, ImageUpload } from "@ckeditor/ckeditor5-image";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { Base64UploadAdapter } from "@ckeditor/ckeditor5-upload";
import { Box } from "@mui/material";
import propTypes from "prop-types";

let editorConfig = {
  plugins: [
    Essentials,
    Bold,
    Italic,
    Underline,
    Paragraph,
    Heading,
    Markdown,
    Link
  ],
  toolbar: [
    'heading',
    '|',
    'bold',
    'italic',
    'underline',
  ],
}
export default function TextEditor({insertMedia, blockquote, list, undo, alignment, insertTable, callbackData}) {
  const [data, setData] = useState("");
  const defAlignment = alignment ?? false;
  const defBlockquote = blockquote ?? false;
  const defInsertMedia = insertMedia ?? false;
  const defInsertTable = insertTable ?? false;
  const defList = list ?? false;
  const defUndo = undo ?? false;
  if(defAlignment === true && editorConfig.plugins.includes(Alignment) === false){
    editorConfig.plugins.push(Alignment);
    editorConfig.toolbar.push('alignment');
  }
  if(defBlockquote === true && editorConfig.plugins.includes(BlockQuote) === false){
    editorConfig.plugins.push(BlockQuote);
    editorConfig.toolbar.push('blockquote');
  }
  if(defInsertTable === true && editorConfig.plugins.includes(Table) === false){
    editorConfig.plugins.push(Table, TableToolbar);
    editorConfig.table = {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
      ]
    };
    editorConfig.toolbar.push('|', 'insertTable');
  }
  if(defInsertMedia === true && editorConfig.plugins.includes(Image) === false){
    editorConfig.plugins.push(
      Image,
      ImageCaption,
      ImageInsert,
      ImageStyle,
      ImageResize,
      ImageToolbar,
      ImageUpload,
      Base64UploadAdapter,
      MediaEmbed
    );
    editorConfig.image = {
      toolbar: [
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        '|',
        'toggleImageCaption',
        'imageTextAlternative',
        '|',
        'linkImage'
      ]
    };
    editorConfig.toolbar.push('|', 'insertImage', 'mediaEmbed');
  }
  if(defList === true && editorConfig.plugins.includes(List) === false){
    editorConfig.plugins.push(List);
    editorConfig.toolbar.push('|', 'numberedList', 'bulletedList');
  }
  if(defUndo === true && editorConfig.plugins.includes(Undo) === false){
    editorConfig.plugins.push(Undo);
    editorConfig.toolbar.push('|', 'undo', 'redo');
  }
  const regexNewline = /\n/gm;
  const handleChangeEditor = (e, editor) => {
    setData(editor.getData());
    const sendingData = data.replace(regexNewline, "\\n");
    callbackData(sendingData);
  }
  return (
    <Box className='text-editor'>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfig}
        data={data}
        onChange={handleChangeEditor}
      />
    </Box>
  )
}
TextEditor.propTypes = {
  insertMedia: propTypes.bool,
  blockquote: propTypes.bool,
  list: propTypes.bool,
  undo: propTypes.bool,
  alignment: propTypes.bool,
  insertTable: propTypes.bool,
  callbackData: propTypes.func.isRequired,
}