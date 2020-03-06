# How to run? (using npm does not show the page properly, use yarn!)

- yarn install
- yarn start

# The structure

Components (reusable)

- directory
- menu-item
- shop
- collection-preview
- collection-item
- sign-in
- form-input
- custom-button
- firebase (READ DOCS)
- header (Dropdown, Link)

Pages (static, no state exchange)

- homepage
- shop-data (SHOP_DATA)
- sign-in-and-sign-up

# Notes

- functional component => no state
- class component => there is state
- prpop drilling/tunneling = passing prop into children
- withRouter (High Order Component) => have access to related to router (parent to child)
- @mixin reusable css in scss (e.g shrinkLabel)
- Firebase (Auth)

# StackOverFlow

- DevTools failed to parse SourceMap: https://stackoverflow.com/questions/44267503/devtools-failed-to-parse-sourcemap
- Google Sign-In : https://firebase.google.com/docs/auth/web/google-signin?authuser=0#popup-mode
- onAuthStateChanged : https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
- Dropdown : https://react-bootstrap.github.io/components/dropdowns/
