import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dynamic"
export default class extends Controller {
  connect() {
    console.log(this.element)
  }
  clicky() {
    console.log(this.element)
  }
}
