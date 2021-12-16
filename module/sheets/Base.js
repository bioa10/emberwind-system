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

const template_file = "../../templates\sheets/HeroSheet.hbs";
const template_data = { header: "Handlebars header text.",
                        tabs: [{ label: "tab1",
                                 title: "My First Tab",
                                 content: "<em>Fancy tab1 content.</em>"},

                               { label: "tab2",
                                 title: "My Second Tab",
                                 content: "<em>Fancy tab2 content.</em>"}],
                        footer: "Handlebars footer text."};

const my_form = new myFormApplication(template_data, {}); // data, options
const res = await my_form.render(true);