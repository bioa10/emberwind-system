class myFormApplication extends FormApplication {
    constructor(object, options) {
      super(object, options);
    }
  
    static get defaultOptions() {
      return super.defaultOptions;
    }
  
    getData(options = {}) {
      return super.getData().object; // the object from the constructor is where we are storing the data
    }
  
    activateListeners(html) {
      super.activateListeners(html);
    }
  
    async _updateObject(event, formData) {
      return;
    }
  }
  const my_form = new myFormApplication(template_data, { template: template_file,
    tabs: [{navSelector: ".tabs", contentSelector: ".content", initial: "tab1"}] }); // data, options
const res = await my_form.render(true);