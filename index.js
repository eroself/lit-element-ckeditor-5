import {LitElement, html} from '@polymer/lit-element';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class MyElement extends LitElement {

  static get properties() { return { mood: String }}

  constructor() {
    super();

    ClassicEditor
      .create( document.querySelector( '#editor' ) )
      .then( editor => {
        window.editor = editor;
      } )
      .catch( err => {
        console.error( err.stack );
      } );
  }
}

customElements.define('my-element', MyElement);
  