import {LitElement, html} from '@polymer/lit-element';
import 'ckeditor';

class MyElement extends LitElement {

  static get properties() { return { mood: String }}

  constructor() {
    super();

    CKEDITOR.ClassicEditor
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
