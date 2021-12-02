/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 *
 * @returns {Promise}
 */
async function loadHandlebarsTemplates()
{
  // Define template paths to load
  const templatePaths = [
    // Actor Sheet Partials
    "systems/emberwind-system/templates/sheets/components/hero-actions.hbs",

    // Item Sheet Partials


    // Apps


    // Chat


    // Chat card partials


    // Internal Rendering Partials


    // Tooltip

  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};

Hooks.once("init", function() {
  loadHandlebarsTemplates();
});