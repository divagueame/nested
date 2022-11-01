import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dynamic"
export default class extends Controller {
  
  static targets = [ "answerField" ]

  connect() {
    console.log(this.targets)

  }
  addField(e) {
    e.preventDefault()

    // Copy last Field
    let lastFieldText = this.answerFieldTargets[this.answerFieldTargets.length - 1];
    let newField  = lastFieldText.cloneNode(true); 

    // Update field name value and empty value
    newField.children[0].name = newField.children[0].name.replace( /\[\d+\]/g, `[${this.answerFieldTargets.length}]`);
    newField.children[0].value = "";
    console.log(newField)

    // Insert last to the form
    lastFieldText.after(newField)

  }
  removeField(e) {
    e.preventDefault()
    if(this.answerFieldTargets.length>1){
      e.target.closest('fieldset').remove()
    }
  }
}
