const manageTranslations = require("react-intl-translations-manager").default

manageTranslations({
  messagesDirectory: "./src/translations/temp/src",
  translationsDirectory: "src/translations/locales/",
  whitelistsDirectory: "src/translations/locales/whitelists/",
  languages: ["en", "zh", "jp"],
})
