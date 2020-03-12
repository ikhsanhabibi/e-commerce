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
- collection
- stripe-button

Pages (static, no state exchange)

- homepage
- shop-data (SHOP_DATA) => moved into shop redux
- sign-in-and-sign-up
- checkout

Redux(Reducer)

- root
- store
- user
- cart (cart-utils)
- directory
- shop

# Notes

- functional component => no state
- class component => there is state
- prop drilling/tunneling = passing prop into children
- withRouter (High Order Component) => have access to related to router (parent to child)
- @mixin reusable css in scss (e.g shrinkLabel)
- Firebase (Auth, Firestore(collection, document, snapshot))
- Async function => potential API request
- Redux (Action-Middleware-Reducer-Store-View) : unidirectional, single point of the truth
- Reducer is function/dispatcher
- Middleware is used for debugging
- connect() is HOC (function that returns sub component) => connect(mapStateToProps, mapDispatchToProps)
- reselect : library for creating memoized, composable selector functions.The functions will take Redux state as an argument and return some data to pass to the component.
- extensible code : KISS (Keep It Simple and Stupid), anybody can read
- persistance & storage : sessionStorage vs localStorage => persist the state in application, the data will be the same, after refresh the web app

# StackOverFlow

- DevTools failed to parse SourceMap: https://stackoverflow.com/questions/44267503/devtools-failed-to-parse-sourcemap
- Google Sign-In : https://firebase.google.com/docs/auth/web/google-signin?authuser=0#popup-mode
- onAuthStateChanged : https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
- Dropdown : https://react-bootstrap.github.io/components/dropdowns/
- Logger : https://www.npmjs.com/package/redux-logger
- reselect lib : https://www.npmjs.com/package/reselect
- UTF-8 icons: https://www.w3schools.com/charsets/ref_utf_dingbats.asp
- redux-persist : https://www.npmjs.com/package/redux-persist
- react-stripe-checkout : https://www.npmjs.com/package/react-stripe-checkout

# MUST RE READ

- add, remove, clear : action functions in redux (cart)
