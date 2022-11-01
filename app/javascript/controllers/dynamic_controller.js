import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dynamic"
export default class extends Controller {
  
  static targets = [ "answerField" ]

  addField(e) {
    e.preventDefault()
    
    // Allows add field on enter key
    if(e.type==='keyup' && e.key!=='Enter'){ return }

    // Copy last Field
    let lastFieldText = this.answerFieldTargets[this.answerFieldTargets.length - 1];
    let newField  = lastFieldText.cloneNode(true); 

    // Update field name value and empty value
    newField.children[0].name = newField.children[0].name.replace( /\[\d+\]/g, `[${this.answerFieldTargets.length}]`);
    newField.children[0].value = "";

    // Insert last to the form
    lastFieldText.after(newField)
    console.log(newField)
    newField.firstElementChild.focus()

  }
  removeField(e) {
    // Allows remove field on escape key
    if(e.type==='keyup' && e.key!=='Escape'){ return }

    e.preventDefault()
    if(this.answerFieldTargets.length>1){
      let lastFieldText = this.answerFieldTargets[this.answerFieldTargets.length - 2];
      e.target.closest('fieldset').remove()
      lastFieldText.firstElementChild.focus()
    }
  }
}
