# About dynamic-forms

Hi, I haven't worked with Typescript before, but I added it to just one file in this exercize.
I've created a simple form, based on HTML form elements, that renders based on some data that it receives.
Validation is done just for data to not be empty. It logs the form into the console when valid.

I've just added a simple test on one of the componets.

# Regardint the proposal:

1. Besides better styling, all the components would have unit tests.
2. More information will be presented on the page.
3. Regarding forms, I would use a form management library, like Formik. Validation is a lot easier to handle with something like this.
4. Create React App uses under the hood Babel and webpack. If it’s generated like this we could add something like webpack will be added to minify, uglify the project. If the project is big, we can consider also code splitting.
5. If data needs to be stored and to persist between pages and components, a state management, like context Redux, will be added to help in that matter.
6. Pages should be accessed based on authentication and authorization. We will need tokens to be able to make requests and the tokens to expire at some point.

# For the project
1. Run npm install
2. Run npm run start

