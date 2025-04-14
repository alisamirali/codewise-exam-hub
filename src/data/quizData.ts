export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    id: "html",
    title: "HTML Fundamentals",
    description:
      "Test your knowledge of HTML elements, attributes, and semantic markup.",
    color: "from-orange-400 to-red-600",
    icon: "html",
    questions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "Hypertext Markup Language",
          "Hypertext Markdown Language",
          "Hypertext Machine Language",
          "Hypertech Modern Language",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Which HTML element is used to define an image?",
        options: ["<picture>", "<image>", "<img>", "<src>"],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "Which of the following is not a semantic HTML5 element?",
        options: ["<article>", "<section>", "<header>", "<span>"],
        correctAnswer: 3,
      },
      {
        id: 5,
        question: "What is the correct HTML for creating a checkbox?",
        options: [
          '<input type="check">',
          '<input type="checkbox">',
          "<checkbox>",
          "<check>",
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question:
          "Which HTML attribute specifies an alternate text for an image?",
        options: ["title", "alt", "src", "description"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question:
          "Which HTML element is used to specify a footer for a document or section?",
        options: ["<bottom>", "<section>", "<footer>", "<end>"],
        correctAnswer: 2,
      },
      {
        id: 8,
        question: "How do you create a numbered list in HTML?",
        options: ["<list>", "<nl>", "<ol>", "<ul>"],
        correctAnswer: 2,
      },
      {
        id: 9,
        question: "Which element is used to define navigation links?",
        options: ["<nav>", "<navigation>", "<links>", "<menu>"],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What is the correct HTML for making a drop-down list?",
        options: ['<input type="dropdown">', "<list>", "<select>", "<option>"],
        correctAnswer: 2,
      },
      {
        id: 11,
        question: "Which HTML element defines the title of a document?",
        options: ["<meta>", "<title>", "<header>", "<head>"],
        correctAnswer: 1,
      },
      {
        id: 12,
        question: "What is the correct HTML for inserting a background image?",
        options: [
          '<background img="image.jpg">',
          '<body background="image.jpg">',
          '<img background="image.jpg">',
          '<div background="image.jpg">',
        ],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "Which HTML element is used to define emphasized text?",
        options: ["<italic>", "<i>", "<em>", "<strong>"],
        correctAnswer: 2,
      },
      {
        id: 14,
        question: "Which doctype is correct for HTML5?",
        options: [
          "<!DOCTYPE HTML5>",
          "<!DOCTYPE html>",
          '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN">',
          "<DOCTYPE HTML>",
        ],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "What is the correct HTML for creating a table?",
        options: [
          "<table><tr><td>",
          "<table><head><body>",
          "<table><thead><tbody>",
          "<tab><tr><td>",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What is the correct HTML for creating a text area?",
        options: [
          '<input type="textarea">',
          '<input type="textbox">',
          "<textarea></textarea>",
          "<textfield>",
        ],
        correctAnswer: 2,
      },
      {
        id: 17,
        question: "Which HTML attribute is used to define inline styles?",
        options: ["class", "style", "font", "css"],
        correctAnswer: 1,
      },
      {
        id: 18,
        question: "Which HTML element is used to define important text?",
        options: ["<important>", "<b>", "<strong>", "<bold>"],
        correctAnswer: 2,
      },
      {
        id: 19,
        question:
          "What is the purpose of the 'required' attribute in an input field?",
        options: [
          "It makes the field required to be filled out",
          "It specifies the type of input required",
          "It requires the form to be validated",
          "It requires the field to be visible",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "Which HTML element is used to define a description list?",
        options: ["<ol>", "<ul>", "<dl>", "<list>"],
        correctAnswer: 2,
      },
      {
        id: 21,
        question: "What does the 'colspan' attribute do in HTML tables?",
        options: [
          "Defines number of columns in a table",
          "Specifies how many columns a cell should span",
          "Creates a column group",
          "Sets the width of a column",
        ],
        correctAnswer: 1,
      },
      {
        id: 22,
        question: "Which HTML element is used to embed external content?",
        options: [
          "<embed>",
          "<external>",
          "<iframe>",
          "Both <embed> and <iframe>",
        ],
        correctAnswer: 3,
      },
      {
        id: 23,
        question: "What is the correct way to create a radio button?",
        options: [
          '<input type="radio">',
          "<radio>",
          '<input type="check">',
          '<button type="radio">',
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "Which HTML element is used to define a caption for a figure?",
        options: ["<figcaption>", "<caption>", "<figurecaption>", "<figtext>"],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "Which HTML element is used to specify a header for a document or section?",
        options: ["<head>", "<top>", "<header>", "<heading>"],
        correctAnswer: 2,
      },
      {
        id: 26,
        question: "What is the purpose of the HTML <canvas> element?",
        options: [
          "To display database records",
          "To create draggable elements",
          "To draw graphics via scripting",
          "To create form input",
        ],
        correctAnswer: 2,
      },
      {
        id: 27,
        question:
          "Which attribute is used to provide a unique name to an HTML element?",
        options: ["id", "class", "name", "identity"],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is the correct HTML for inserting a line break?",
        options: ["<break>", "<lb>", "<br>", "<newline>"],
        correctAnswer: 2,
      },
      {
        id: 29,
        question: "Which of the following HTML elements is self-closing?",
        options: ["<div>", "<p>", "<span>", "<img>"],
        correctAnswer: 3,
      },
      {
        id: 30,
        question: "Which HTML element defines a set of navigation links?",
        options: ["<navigation>", "<nav>", "<navigate>", "<menu>"],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "css",
    title: "CSS Mastery",
    description:
      "Challenge yourself with questions about CSS selectors, layouts, and styling techniques.",
    color: "from-blue-400 to-indigo-600",
    icon: "css",
    questions: [
      {
        id: 1,
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style Sheets",
          "Colorful Style Sheets",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which CSS property controls the text size?",
        options: ["text-size", "font-size", "text-style", "font-style"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "How do you select an element with the id 'demo'?",
        options: [".demo", "#demo", "demo", "*demo"],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Which CSS property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "How do you select elements with the class name 'test'?",
        options: ["#test", ".test", "test", "*test"],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "font-family", "font-weight", "font-size"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "How do you make text bold in CSS?",
        options: [
          "font-weight: bold",
          "style: bold",
          "text-style: bold",
          "font: bold",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which CSS property controls the spacing between lines?",
        options: ["line-spacing", "spacing", "line-height", "line-width"],
        correctAnswer: 2,
      },
      {
        id: 9,
        question: "Which CSS property is used to add shadows to elements?",
        options: ["element-shadow", "shadow", "box-shadow", "object-shadow"],
        correctAnswer: 2,
      },
      {
        id: 10,
        question: "How do you add a border around an element?",
        options: ["border-line:", "border-around:", "stroke:", "border:"],
        correctAnswer: 3,
      },
      {
        id: 11,
        question:
          "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color", "text-style"],
        correctAnswer: 1,
      },
      {
        id: 12,
        question: "How do you display a text with an underline in CSS?",
        options: [
          "text-decoration: underline",
          "font-decoration: underline",
          "text-style: underline",
          "underline: true",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "Which CSS property is used to make text uppercase?",
        options: [
          "text-style",
          "text-transform",
          "transform",
          "font-transform",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question:
          "How do you change the cursor when hovering over an element in CSS?",
        options: ["cursor:", "mouse:", "pointer:", "cursor-style:"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question:
          "Which CSS property is used to set the transparency of an element?",
        options: ["transparent", "visibility", "opacity", "filter"],
        correctAnswer: 2,
      },
      {
        id: 16,
        question: "How do you make a text center-aligned in CSS?",
        options: [
          "align: center",
          "text-align: center",
          "position: center",
          "text-position: center",
        ],
        correctAnswer: 1,
      },
      {
        id: 17,
        question:
          "What is the correct CSS syntax for making all <p> elements bold?",
        options: [
          "p { font-weight: bold; }",
          'p style="font-weight: bold;"',
          "<p>.bold { }",
          "p { text-style: bold; }",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "Which property is used to control the spacing between elements?",
        options: ["spacing", "margin", "padding", "Both margin and padding"],
        correctAnswer: 3,
      },
      {
        id: 19,
        question:
          "Which CSS property is used to specify the layout of items in a flexbox container?",
        options: ["flex-layout", "flex-direction", "flex-flow", "flex-align"],
        correctAnswer: 1,
      },
      {
        id: 20,
        question: "Which CSS property is used to create a transition effect?",
        options: ["transition", "transform", "animation", "motion"],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "How do you select all <p> elements inside a <div> element?",
        options: ["div p", "div.p", "div > p", "div + p"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Which CSS property is used to create a grid layout?",
        options: [
          "layout",
          "display: layout",
          "display: grid",
          "grid-template",
        ],
        correctAnswer: 2,
      },
      {
        id: 23,
        question: "How do you make an image responsive in CSS?",
        options: [
          "image-responsive: true",
          "img { responsive: true; }",
          "img { width: 100%; height: auto; }",
          "img { scale: responsive; }",
        ],
        correctAnswer: 2,
      },
      {
        id: 24,
        question:
          "Which CSS property is used to specify the stacking order of elements?",
        options: ["z-index", "position", "overlay", "stack-order"],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "How do you select every other element in CSS?",
        options: [
          "element:every-other",
          "element:alternate",
          "element:nth-child(2n)",
          "element:even-child",
        ],
        correctAnswer: 2,
      },
      {
        id: 26,
        question: "Which CSS unit is relative to the font-size of the element?",
        options: ["px", "em", "%", "vh"],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "How do you create a CSS animation?",
        options: [
          "animation: name duration",
          "@keyframes name { } and animation property",
          "transform: animate(parameters)",
          "motion: parameters",
        ],
        correctAnswer: 1,
      },
      {
        id: 28,
        question:
          "Which CSS property allows you to specify whether an element is resizable by the user?",
        options: ["user-resize", "resize", "scale", "transform"],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "How do you create rounded corners in CSS?",
        options: [
          "corner-style",
          "border-corner",
          "round-corner",
          "border-radius",
        ],
        correctAnswer: 3,
      },
      {
        id: 30,
        question:
          "Which of the following is NOT a valid CSS position property value?",
        options: ["static", "relative", "absolute", "floating"],
        correctAnswer: 3,
      },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript Essentials",
    description:
      "Put your JavaScript knowledge to the test with questions about syntax, functions, and modern ES6+ features.",
    color: "from-yellow-300 to-yellow-600",
    icon: "js",
    questions: [
      {
        id: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<js>", "<javascript>", "<script>"],
        correctAnswer: 3,
      },
      {
        id: 2,
        question: "How do you create a function in JavaScript?",
        options: [
          "function:myFunction()",
          "function myFunction()",
          "function = myFunction()",
          "function.create(myFunction)",
        ],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: 'How do you call a function named "myFunction"?',
        options: [
          "call myFunction()",
          "myFunction()",
          "call function myFunction()",
          "Call.myFunction()",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "How do you write an IF statement in JavaScript?",
        options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],
        correctAnswer: 2,
      },
      {
        id: 5,
        question:
          'How do you write an IF statement for executing code if "i" is NOT equal to 5?',
        options: ["if (i != 5)", "if i <> 5", "if (i <> 5)", "if i =! 5 then"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "How does a WHILE loop start?",
        options: [
          "while (i <= 10)",
          "while i = 1 to 10",
          "while (i <= 10; i++)",
          "while i <= 10",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "How does a FOR loop start?",
        options: [
          "for (i = 0; i <= 5; i++)",
          "for (i <= 5; i++)",
          "for i = 1 to 5",
          "for (i = 0; i <= 5)",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "How can you add a comment in JavaScript?",
        options: [
          "//This is a comment",
          "<!--This is a comment-->",
          "'This is a comment",
          "#This is a comment",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "How do you round the number 7.25, to the nearest integer?",
        options: [
          "Math.round(7.25)",
          "round(7.25)",
          "Math.rnd(7.25)",
          "rnd(7.25)",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question:
          "What is the correct JavaScript syntax for opening a new window?",
        options: [
          'window.open("URL")',
          'window.new("URL")',
          'open.window("URL")',
          'new.window("URL")',
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
        correctAnswer: 2,
      },
      {
        id: 12,
        question: "How do you declare a JavaScript variable?",
        options: ["var x;", "variable x;", "x = variable;", "declare x;"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "Which operator is used to assign a value to a variable?",
        options: ["*", "-", "=", "x"],
        correctAnswer: 2,
      },
      {
        id: 14,
        question: "What will the following code return: Boolean(10 > 9)",
        options: ["true", "false", "NaN", "undefined"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is the correct way to write a JavaScript array?",
        options: [
          'var colors = (1:"red", 2:"green", 3:"blue")',
          'var colors = ["red", "green", "blue"]',
          'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
          'var colors = "red", "green", "blue"',
        ],
        correctAnswer: 1,
      },
      {
        id: 16,
        question:
          "How do you find the number with the highest value of two numbers?",
        options: [
          "Math.max(x, y)",
          "top(x, y)",
          "Math.ceil(x, y)",
          "ceil(x, y)",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "Which of the following is a JavaScript framework?",
        options: ["Django", "React", "Laravel", "Rails"],
        correctAnswer: 1,
      },
      {
        id: 18,
        question: "How do you create an object in JavaScript?",
        options: [
          'var person = {name:"John", age:30}',
          'var person = create({name:"John", age:30})',
          'var person = new Object({name:"John", age:30})',
          "Both A and C are correct",
        ],
        correctAnswer: 3,
      },
      {
        id: 19,
        question: "What is the output of: console.log(typeof [])?",
        options: ["array", "object", "undefined", "null"],
        correctAnswer: 1,
      },
      {
        id: 20,
        question:
          "Which method of an Array object adds one or more elements to the end of the array?",
        options: ["append()", "add()", "push()", "attachEnd()"],
        correctAnswer: 2,
      },
      {
        id: 21,
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [
          "Refers to the current function",
          "Refers to the current object on which the method is called",
          "Refers to the global window object",
          "Refers to the parent object",
        ],
        correctAnswer: 1,
      },
      {
        id: 22,
        question: "What is a closure in JavaScript?",
        options: [
          "A way to secure JavaScript code",
          "A function having access to the parent scope, even after the parent function has closed",
          "A method to close a browser window",
          "A way to hide variables from global scope",
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "Which of these is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Object"],
        correctAnswer: 2,
      },
      {
        id: 24,
        question:
          'What is the correct syntax for referring to an external script called "script.js"?',
        options: [
          '<script src="script.js">',
          '<script href="script.js">',
          '<script name="script.js">',
          '<script link="script.js">',
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is the difference between '==' and '===' operators?",
        options: [
          "No difference",
          "'===' compares values and types, '==' compares only values",
          "'==' compares values and types, '===' compares only values",
          "'===' is not a valid JavaScript operator",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: 'What will be the output of: console.log(1 + "2")?',
        options: ["12", "3", "Error", "undefined"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question:
          "What is the purpose of the 'async/await' keywords in JavaScript?",
        options: [
          "To define variables that can change over time",
          "To create a new object instance",
          "To handle asynchronous operations more cleanly",
          "To define a callback function",
        ],
        correctAnswer: 2,
      },
      {
        id: 28,
        question:
          "Which JavaScript method is used to parse a string to an integer?",
        options: [
          "Integer.parse()",
          "parseInt()",
          "parseInteger()",
          "Int.parse()",
        ],
        correctAnswer: 1,
      },
      {
        id: 29,
        question:
          "How do you access the first element of an array named 'myArray'?",
        options: [
          "myArray.first",
          "myArray.get(0)",
          "myArray[0]",
          "myArray(0)",
        ],
        correctAnswer: 2,
      },
      {
        id: 30,
        question: "How do you declare a constant variable in JavaScript?",
        options: ["var", "let", "const", "static"],
        correctAnswer: 2,
      },
    ],
  },
];
