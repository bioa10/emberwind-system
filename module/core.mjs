import HeroSheet from "./sheets/HeroSheet.mjs";
import preloadHandlebarsTemplates from "./handlebars/templates.mjs"

Hooks.once("init", function() {
  console.log("Initializing Emberwind System");

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("hero", HeroSheet, { makeDefault: true });
});
