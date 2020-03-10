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
- cart-icon
- cart-dropdown
- cart-item

Pages (static, no state exchange)

- homepage
- shop-data (SHOP_DATA)
- sign-in-and-sign-up
- checkout

Redux(Reducer)

- root
- store
- user
- cart (cart-utils)

# Notes

- functional component => no state
- class component => there is state
- prpop drilling/tunneling = passing prop into children
- withRouter (High Order Component) => have access to related to router (parent to child)
- @mixin reusable css in scss (e.g shrinkLabel)
- Firebase (Auth, Firestore(collection, document, snapshot))
- Async function => potential API request
- Redux (Action-Middleware-Reducer-Store-View) : unidirectional, single point of the truth
- Reducer is fucntion/dispatcher
- Middleware is used for debugging
- connect() is HOC (function that returns sub component)
- reselect : library for creating memoized, composable selector functions.The functions will take Redux state as an argument and return some data to pass to the component.
- extensible code : KISS (Keep It Simple and Stupid), anybody can read

# StackOverFlow

- DevTools failed to parse SourceMap: https://stackoverflow.com/questions/44267503/devtools-failed-to-parse-sourcemap
- Google Sign-In : https://firebase.google.com/docs/auth/web/google-signin?authuser=0#popup-mode
- onAuthStateChanged : https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
- Dropdown : https://react-bootstrap.github.io/components/dropdowns/
- Logger : https://www.npmjs.com/package/redux-logger
- reselect lib : https://www.npmjs.com/package/reselect
- UTF-8 icons: https://www.w3schools.com/charsets/ref_utf_dingbats.asp

# MUST RE READ

- add, remove, clear : action functions in redux (cart)
