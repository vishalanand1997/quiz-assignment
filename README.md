## Node Version
[v18.12.1]

## NPM Version
[8.19.2]

## Checkout to the main git branch

## Steps to run the quiz assignment

`npm install`
# or
`yarn install`

## Step to run the development server:

`npm run dev`
# or
`yarn dev`

## GitHub Repository Link:-
[https://github.com/vishalanand1997/quiz-assignment.git]


# which library I have used in this application
## React framework [NextJs]
## UI library [MaterialUI]
## form validation [reactHookForm]
## State Management [redux]
## Remote data fetching [swr]

## Added typescript support in everywhere in code and followed their typescript rules
## Created the reusable component support
## Manage the reusablity support to the code

### Which functionalities we can see in this application

## Login screen
# login with email screen(validation), after submit it will redirect to the all question screen in which user can select the question then sepecific question will display in the screen

## Quiz screen
# 30 min timer counter to the top right, autosubmit the quiz when time reaches to zero or we can submit the quiz in the last question submit quiz button only displays in the last question else it will not show
# implemented the pagination to the quiz question card in which we can select the specific question or navigate the questions
# maintain the record of Which questions the user has visited or not and quiz attempted answers in redux state.
# Added the loader when api response is pending

## Report
# After the submit the quiz or when the timer ends, users will redirected to the report page.
# Report screen will show the question, user attempted answer (Added Indictor color Green or red:- green mean correct answer and red mean incorrect answer for compare), correct answer, is user visited the question(Yes or No), these data will display in tabular form 
