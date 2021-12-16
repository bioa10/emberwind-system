const template_file = "macro_data/TEMPLATE_FILE";
const template_data = { header: "Handlebars header text.",
                        tabs: [{ label: "Action",
                                 title: "My First Tab",
                                 content: "<em>Fancy tab1 content.</em>"},

                               { label: "Tab2",
                                 title: "My Second Tab",
                                 content: "<em>Fancy tab2 content.</em>"}],
                        footer: "Handlebars footer text."};
const rendered_html = await renderTemplate(template_file, template_data);
console.log(rendered_html);

// Works as of Foundry 0.8.7; did not work in Foundry 0.7.9
let d = new Dialog({
    title: "MyDialogTitle",
    content: rendered_html,
    buttons: {
        toggle: {
            icon: '<i class="fas fa-check"></i>',
            label: "Okay",
            callback: () => console.log("Okay")
        },
    },
    default: "toggle",
    close: html => {
        console.log(html);
    },
  }, { tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "tab1" }]} );
d.render(true);