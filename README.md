# Node Version

v18.12.1

# NPM Version

8.19.2

# Git branch
Checkout to the main git branch

## Steps to run the quiz assignment

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm install or yarn install
```

## Step to run the development server

```bash
npm run dev or yarn dev
```
## [GitHub Repository Link](https://github.com/vishalanand1997/quiz-assignment.git)

## Which library I have used in this application

=> React framework [NextJs]

=> UI library [MaterialUI]

=> form validation [reactHookForm]

=> State Management [redux]

=> Remote data fetching [swr]

=> Added typescript support everywhere in code and followed their typescript rules

=> Created the reusable component support

=> Manage the reusability support to the code


## Which functionalities we can see in this application

**Login screen**

login with email screen(validation), after it will redirect to the all question screen in which the user can select the question then a specific question will display on the screen

**Quiz screen**

30-minute timer counter to the top right, auto-submit the quiz when time reaches to zero or we can submit the quiz in the last question submit quiz button only displays in the last question else it will not show

implemented the pagination to the quiz question card in which we can select the specific question or navigate the questions

maintain the record of Which questions the user has visited or not and quiz attempted answers in the redux state.

Added the loader when the API response is pending

**Report screen**

After the submission of the quiz or when the timer ends, users will redirected to the report page.

The report screen will show the list of questions, the user attempted to answer (Added Indictor color Green or red:- green means correct answer and red means incorrect answer for compare), the correct answer if the user visited the question(Yes or No), these data will display in tabular form 
