import { DifficultyLevel, Technology } from "./quizTypes";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  technology: Technology;
  difficulty: DifficultyLevel;
  questions: Question[];
}

export const quizzes: Quiz[] = [
  // HTML Beginner
  {
    id: "html-beginner",
    technology: "html",
    difficulty: "beginner",
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
        id: 5,
        question: "How do you create a numbered list in HTML?",
        options: ["<list>", "<nl>", "<ol>", "<ul>"],
        correctAnswer: 2,
      },
      {
        id: 6,
        question: "Which HTML element defines the title of a document?",
        options: ["<meta>", "<title>", "<header>", "<head>"],
        correctAnswer: 1,
      },
      {
        id: 7,
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
        id: 8,
        question: "Which HTML attribute is used to define inline styles?",
        options: ["class", "style", "font", "css"],
        correctAnswer: 1,
      },
      {
        id: 9,
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
        id: 10,
        question: "Which HTML element is used to define important text?",
        options: ["<important>", "<b>", "<strong>", "<bold>"],
        correctAnswer: 2,
      },
      {
        id: 11,
        question: "What is the correct HTML for creating a line break?",
        options: ["<break>", "<lb>", "<br>", "<newline>"],
        correctAnswer: 2,
      },
      {
        id: 12,
        question: "Which HTML element is used to define a paragraph?",
        options: ["<p>", "<paragraph>", "<text>", "<para>"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "How do you create an unordered list in HTML?",
        options: ["<ul>", "<list>", "<ol>", "<unordered>"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "Which HTML element is used for the largest heading?",
        options: ["<heading1>", "<h6>", "<head>", "<h1>"],
        correctAnswer: 3,
      },
      {
        id: 15,
        question: "What is the correct HTML for adding a background color?",
        options: [
          '<body bg="yellow">',
          "<background>yellow</background>",
          '<body style="background-color: yellow">',
          '<body color="yellow">',
        ],
        correctAnswer: 2,
      },
      {
        id: 16,
        question: "Which HTML element defines navigation links?",
        options: ["<navigation>", "<nav>", "<navigate>", "<menu>"],
        correctAnswer: 1,
      },
      {
        id: 17,
        question: "What is the correct HTML for creating a button?",
        options: [
          '<input type="button">',
          "<button>",
          "Both A and B are correct",
          "<buttonfield>",
        ],
        correctAnswer: 2,
      },
      {
        id: 18,
        question: "Which HTML element is used to define the document type?",
        options: ["<doctype>", "<!DOCTYPE>", "<doc>", "<type>"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "What is the correct HTML for creating a text input field?",
        options: [
          "<textfield>",
          '<input type="text">',
          "<input text>",
          "<textinput>",
        ],
        correctAnswer: 1,
      },
      {
        id: 20,
        question:
          "Which HTML element is used to define a header for a document or section?",
        options: ["<head>", "<top>", "<header>", "<heading>"],
        correctAnswer: 2,
      },
      {
        id: 21,
        question: "How do you create a radio button in HTML?",
        options: [
          '<input type="radio">',
          "<radio>",
          '<input type="check">',
          "<radiobutton>",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Which HTML element is used to define a footer?",
        options: ["<bottom>", "<section>", "<footer>", "<end>"],
        correctAnswer: 2,
      },
      {
        id: 23,
        question: "What is the correct HTML for making a drop-down list?",
        options: [
          "<list>",
          "<select>",
          '<input type="dropdown">',
          "<dropdown>",
        ],
        correctAnswer: 1,
      },
      {
        id: 24,
        question:
          "Which HTML attribute specifies an alternate text for an image?",
        options: ["title", "alt", "src", "description"],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "What is the correct HTML for playing video files?",
        options: ["<media>", "<video>", "<movie>", "<play>"],
        correctAnswer: 1,
      },
      {
        id: 26,
        question:
          "Which HTML element is used to define a section in a document?",
        options: ["<div>", "<section>", "<part>", "<region>"],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "How do you create a password input field?",
        options: [
          '<input type="password">',
          "<password>",
          "<input password>",
          "<passwordfield>",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "Which HTML element is used for playing audio files?",
        options: ["<sound>", "<audio>", "<music>", "<mp3>"],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "What is the correct HTML for creating a comment?",
        options: [
          "<!-- comment -->",
          "//comment",
          "<comment>",
          "/* comment */",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "Which HTML element defines a description list?",
        options: ["<dl>", "<list>", "<ul>", "<description>"],
        correctAnswer: 0,
      },
    ],
  },

  // HTML Intermediate
  {
    id: "html-intermediate",
    technology: "html",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question: "Which of the following is not a semantic HTML5 element?",
        options: ["<article>", "<section>", "<header>", "<span>"],
        correctAnswer: 3,
      },
      {
        id: 2,
        question:
          "What is the purpose of the srcset attribute in the <img> tag?",
        options: [
          "To specify multiple image sources for different screen sizes",
          "To set the source of an image",
          "To create a slideshow of images",
          "To define image dimensions",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "What is the purpose of the <figure> element?",
        options: [
          "To display mathematical figures",
          "To group media content and its caption",
          "To create figures and diagrams",
          "To define a figure in a document",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question:
          "Which HTML5 element is used to specify independent, self-contained content?",
        options: ["<section>", "<article>", "<aside>", "<div>"],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "What is the purpose of the <datalist> element?",
        options: [
          "To store data in a list format",
          "To create a dropdown list",
          "To specify a list of pre-defined options for input controls",
          "To display data in a table format",
        ],
        correctAnswer: 2,
      },
      {
        id: 6,
        question:
          "Which attribute is used to specify that an input field must be filled out?",
        options: ["validate", "placeholder", "required", "mandatory"],
        correctAnswer: 2,
      },
      {
        id: 7,
        question: "What is the purpose of the <time> element?",
        options: [
          "To display a clock",
          "To represent a specific period in time",
          "To create a countdown timer",
          "To show different time zones",
        ],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Which HTML5 input type is used for picking a color?",
        options: ["color", "picker", "palette", "colorpicker"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is the purpose of the <output> element?",
        options: [
          "To display computer output",
          "To show the result of a calculation",
          "To create an output field",
          "To define printer output",
        ],
        correctAnswer: 1,
      },
      {
        id: 10,
        question:
          "Which attribute is used to specify the relationship between the current document and the linked document?",
        options: ["connection", "rel", "relationship", "link"],
        correctAnswer: 1,
      },
      {
        id: 11,
        question: "What is the purpose of the <mark> element?",
        options: [
          "To create a bookmark",
          "To highlight text",
          "To mark a list item",
          "To create a marker on an image",
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question:
          "Which HTML5 element is used to embed content from another source?",
        options: ["<frame>", "<iframe>", "<embed>", "<object>"],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "What is the purpose of the download attribute?",
        options: [
          "To specify that a link should be downloaded",
          "To download the webpage",
          "To create a download button",
          "To specify download speed",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "Which attribute is used to specify the character encoding for the HTML document?",
        options: ["encode", "charset", "character", "encoding"],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "What is the purpose of the <meter> element?",
        options: [
          "To measure length",
          "To create a progress bar",
          "To measure data within a known range",
          "To display metrics",
        ],
        correctAnswer: 2,
      },
      {
        id: 16,
        question: "Which HTML5 element is used to draw graphics via scripting?",
        options: ["<draw>", "<canvas>", "<graphic>", "<paint>"],
        correctAnswer: 1,
      },
      {
        id: 17,
        question: "What is the purpose of the <details> element?",
        options: [
          "To add details to an image",
          "To create a disclosure widget",
          "To provide additional information",
          "To show file details",
        ],
        correctAnswer: 1,
      },
      {
        id: 18,
        question:
          "Which attribute is used to specify that an element is not yet, or is no longer, relevant?",
        options: ["irrelevant", "hidden", "invisible", "inert"],
        correctAnswer: 3,
      },
      {
        id: 19,
        question: "What is the purpose of the <progress> element?",
        options: [
          "To show task progress",
          "To create a loading bar",
          "To display file progress",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 20,
        question: "Which HTML5 element defines navigation links?",
        options: ["<navigation>", "<menu>", "<nav>", "<navbar>"],
        correctAnswer: 2,
      },
      {
        id: 21,
        question: "What is the purpose of the contenteditable attribute?",
        options: [
          "To make content editable",
          "To edit content in a CMS",
          "To enable text editing",
          "To create an editor",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "Which HTML5 element is used to specify independent content in a document?",
        options: ["<content>", "<article>", "<section>", "<div>"],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "What is the purpose of the <aside> element?",
        options: [
          "To create a side panel",
          "To define content aside from main content",
          "To add a sidebar",
          "To move content to the side",
        ],
        correctAnswer: 1,
      },
      {
        id: 24,
        question:
          "Which attribute is used to specify the base URL for all relative URLs in a document?",
        options: ["href", "src", "base", "url"],
        correctAnswer: 2,
      },
      {
        id: 25,
        question: "What is the purpose of the <dialog> element?",
        options: [
          "To create a chat dialog",
          "To define a dialog box or window",
          "To show messages",
          "To create a modal",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "Which HTML5 input type validates email addresses?",
        options: ["text", "email", "validate", "address"],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "What is the purpose of the <main> element?",
        options: [
          "To define the main content of a document",
          "To create a main section",
          "To specify the primary content",
          "To highlight important content",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question:
          "Which attribute is used to specify that an input field should have autocomplete enabled?",
        options: ["complete", "autocomplete", "autofill", "fill"],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "What is the purpose of the <template> element?",
        options: [
          "To create a template design",
          "To hold content that should be hidden when page loads",
          "To define a layout template",
          "To create reusable HTML",
        ],
        correctAnswer: 1,
      },
      {
        id: 30,
        question:
          "Which HTML5 element is used to specify a footer for a document or section?",
        options: ["<bottom>", "<section>", "<footer>", "<end>"],
        correctAnswer: 2,
      },
    ],
  },

  // HTML Advanced
  {
    id: "html-advanced",
    technology: "html",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question:
          "What is the purpose of the preload attribute in the <link> element?",
        options: [
          "To specify the loading priority of resources",
          "To preload resources that will be needed later",
          "To load resources in parallel",
          "To cache resources for offline use",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question:
          "Which HTML5 feature allows for client-side storage of complex data?",
        options: ["Web Storage", "IndexedDB", "Cookies", "Cache API"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question:
          "What is the purpose of the sandbox attribute in the <iframe> element?",
        options: [
          "To create a testing environment",
          "To restrict potentially malicious content",
          "To isolate CSS styles",
          "To create a virtual DOM",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question:
          "Which HTML5 API is used for real-time bidirectional communication?",
        options: ["WebSocket", "Server-Sent Events", "Long Polling", "AJAX"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the purpose of the picture element in HTML5?",
        options: [
          "To display multiple images in a slideshow",
          "To provide alternative image sources for different screen sizes",
          "To create image galleries",
          "To apply filters to images",
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question:
          "Which attribute is used for custom data attributes in HTML5?",
        options: ["data-*", "custom-*", "user-*", "attr-*"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question:
          "What is the purpose of the srcset attribute in responsive images?",
        options: [
          "To specify multiple image formats",
          "To provide different image sizes for different devices",
          "To set image source paths",
          "To define image dimensions",
        ],
        correctAnswer: 1,
      },
      {
        id: 8,
        question:
          "Which HTML5 element is used for handling mathematical equations?",
        options: ["<math>", "<equation>", "<formula>", "<calculate>"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is the purpose of the defer attribute in script tags?",
        options: [
          "To delay script execution until page load",
          "To prevent script downloading",
          "To defer script compilation",
          "To postpone script parsing",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Which HTML5 API is used for drag and drop functionality?",
        options: ["DragDrop API", "Drag and Drop API", "DnD API", "Move API"],
        correctAnswer: 1,
      },
      {
        id: 11,
        question: "What is the purpose of the manifest attribute in HTML5?",
        options: [
          "To specify required resources",
          "To enable offline web applications",
          "To define page metadata",
          "To list page dependencies",
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question: "Which HTML5 element is used for vector graphics?",
        options: ["<vector>", "<svg>", "<draw>", "<graphic>"],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "What is the purpose of the role attribute in HTML5?",
        options: [
          "To define element styling",
          "To specify ARIA roles for accessibility",
          "To assign user roles",
          "To define element behavior",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "Which HTML5 API is used for accessing device orientation?",
        options: [
          "Orientation API",
          "DeviceOrientation API",
          "Motion API",
          "Gyroscope API",
        ],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "What is the purpose of the async attribute in script tags?",
        options: [
          "To load scripts asynchronously",
          "To execute scripts in order",
          "To delay script execution",
          "To prevent script blocking",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question:
          "Which HTML5 element is used for bidirectional text isolation?",
        options: ["<bdi>", "<dir>", "<bdo>", "<iso>"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is the purpose of the crossorigin attribute?",
        options: [
          "To enable cross-domain requests",
          "To handle CORS policies",
          "To block external resources",
          "To verify resource origin",
        ],
        correctAnswer: 1,
      },
      {
        id: 18,
        question: "Which HTML5 API is used for full-screen mode?",
        options: ["Screen API", "Fullscreen API", "Display API", "View API"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "What is the purpose of the integrity attribute?",
        options: [
          "To verify file integrity",
          "To validate resource content",
          "To check for malware",
          "To ensure data consistency",
        ],
        correctAnswer: 1,
      },
      {
        id: 20,
        question: "Which HTML5 element is used for ruby annotations?",
        options: ["<ruby>", "<annotation>", "<note>", "<mark>"],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is the purpose of the ping attribute in anchor tags?",
        options: [
          "To track link clicks",
          "To check link status",
          "To verify link validity",
          "To measure response time",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Which HTML5 API is used for recording audio and video?",
        options: [
          "Recorder API",
          "MediaRecorder API",
          "AudioVideo API",
          "Capture API",
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "What is the purpose of the importance attribute?",
        options: [
          "To prioritize resource loading",
          "To mark important content",
          "To set element priority",
          "To define loading order",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Which HTML5 element is used for measuring time intervals?",
        options: ["<timer>", "<time>", "<duration>", "<interval>"],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "What is the purpose of the translate attribute?",
        options: [
          "To enable automatic translation",
          "To indicate if content should be translated",
          "To specify translation rules",
          "To define language pairs",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "Which HTML5 API is used for battery status?",
        options: [
          "Power API",
          "Battery Status API",
          "Energy API",
          "Device API",
        ],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "What is the purpose of the hidden attribute?",
        options: [
          "To hide elements visually",
          "To remove elements from DOM",
          "To mark elements as not yet relevant",
          "To disable element interaction",
        ],
        correctAnswer: 2,
      },
      {
        id: 28,
        question: "Which HTML5 element is used for defining command buttons?",
        options: ["<cmd>", "<command>", "<button>", "<control>"],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "What is the purpose of the dropzone attribute?",
        options: [
          "To define drop targets",
          "To specify drag and drop zones",
          "To create droppable areas",
          "To handle drop events",
        ],
        correctAnswer: 1,
      },
      {
        id: 30,
        question:
          "Which HTML5 API is used for accessing device camera and microphone?",
        options: ["Media API", "MediaDevices API", "Camera API", "Device API"],
        correctAnswer: 1,
      },
    ],
  },

  // CSS Beginner
  {
    id: "css-beginner",
    technology: "css",
    difficulty: "beginner",
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
        question: "Which CSS property controls the text alignment?",
        options: ["text-align", "align", "text-position", "position"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "How do you make text italic in CSS?",
        options: [
          "style: italic",
          "font-style: italic",
          "text-style: italic",
          "italic: true",
        ],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "Which CSS property sets the space between elements?",
        options: ["spacing", "margin", "padding", "gap"],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "How do you change text color in CSS?",
        options: ["text-color", "color", "font-color", "text-style"],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "Which property sets the background image?",
        options: ["background-img", "background-image", "bg-image", "image"],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "How do you make a list without bullets?",
        options: [
          "list-style: none",
          "list: none",
          "bullet: none",
          "style: no-bullet",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "Which property changes the size of a border?",
        options: [
          "border-width",
          "border-size",
          "border-thickness",
          "border-weight",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "How do you select all paragraphs inside a div?",
        options: ["div.p", "div p", "div+p", "div-p"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "Which value defines a solid border?",
        options: ["line", "solid", "regular", "normal"],
        correctAnswer: 1,
      },
      {
        id: 20,
        question: "How do you add space inside an element?",
        options: ["spacing", "margin", "padding", "inner-space"],
        correctAnswer: 2,
      },
      {
        id: 21,
        question: "Which property makes text uppercase?",
        options: [
          "text-transform: uppercase",
          "text-case: upper",
          "text-style: caps",
          "font-case: upper",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "How do you center an element horizontally?",
        options: [
          "center: true",
          "margin: center",
          "margin: 0 auto",
          "align: center",
        ],
        correctAnswer: 2,
      },
      {
        id: 23,
        question: "Which property sets the style of a border?",
        options: ["border-line", "border-type", "border-style", "border-mode"],
        correctAnswer: 2,
      },
      {
        id: 24,
        question: "How do you make text underlined?",
        options: [
          "text-decoration: underline",
          "underline: true",
          "text-style: under",
          "text-line: bottom",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "Which property changes the cursor style?",
        options: ["cursor", "mouse-pointer", "pointer", "hand"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "How do you make text bold and italic?",
        options: [
          "font: bold italic",
          "style: bold italic",
          "text-style: bold italic",
          "font-weight: bold; font-style: italic",
        ],
        correctAnswer: 3,
      },
      {
        id: 27,
        question: "Which property sets element height?",
        options: ["size", "height", "element-height", "h-size"],
        correctAnswer: 1,
      },
      {
        id: 28,
        question: "How do you group selectors?",
        options: [
          "selector1 + selector2",
          "selector1, selector2",
          "selector1 and selector2",
          "selector1 & selector2",
        ],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "Which property sets element width?",
        options: ["size", "width", "element-width", "w-size"],
        correctAnswer: 1,
      },
      {
        id: 30,
        question: "How do you hide an element?",
        options: [
          "display: none",
          "visibility: hidden",
          "show: false",
          "hidden: true",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // CSS Intermediate
  {
    id: "css-intermediate",
    technology: "css",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question:
          "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color", "text-style"],
        correctAnswer: 1,
      },
      {
        id: 2,
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
        id: 3,
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
        id: 4,
        question:
          "How do you change the cursor when hovering over an element in CSS?",
        options: ["cursor:", "mouse:", "pointer:", "cursor-style:"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "Which CSS property is used to set the transparency of an element?",
        options: ["transparent", "visibility", "opacity", "filter"],
        correctAnswer: 2,
      },
      {
        id: 6,
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
        id: 7,
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
        id: 8,
        question:
          "Which property is used to control the spacing between elements?",
        options: ["spacing", "margin", "padding", "Both margin and padding"],
        correctAnswer: 3,
      },
      {
        id: 9,
        question:
          "Which CSS property is used to specify the layout of items in a flexbox container?",
        options: ["flex-layout", "flex-direction", "flex-flow", "flex-align"],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "Which CSS property is used to create a transition effect?",
        options: ["transition", "transform", "animation", "motion"],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What does the CSS property `z-index` control?",
        options: [
          "Element rotation",
          "Stacking order of elements",
          "Element transparency",
          "Text alignment",
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question:
          "How do you apply a style to an element only when it is hovered over?",
        options: [":hover", ":active", ":focus", ":mouseover"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "Which CSS property is used to round the corners of an element?",
        options: ["border-radius", "corner-radius", "border-curve", "rounded"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "What is the default value of the `position` property in CSS?",
        options: ["absolute", "relative", "fixed", "static"],
        correctAnswer: 3,
      },
      {
        id: 15,
        question:
          "Which CSS property is used to control the size of a background image?",
        options: [
          "background-size",
          "background-scale",
          "image-size",
          "bg-size",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question:
          "How do you make an element take up the full width of its parent container?",
        options: ["width: 100%", "width: full", "size: 100%", "width: auto"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question:
          "Which CSS property is used to create a shadow effect behind an element?",
        options: ["shadow", "box-shadow", "element-shadow", "drop-shadow"],
        correctAnswer: 1,
      },
      {
        id: 18,
        question: "What is the purpose of the `display: flex` property in CSS?",
        options: [
          "To make an element invisible",
          "To create a flexible box layout",
          "To align text centrally",
          "To add animations",
        ],
        correctAnswer: 1,
      },
      {
        id: 19,
        question:
          "Which CSS property is used to control the spacing between lines of text?",
        options: ["line-height", "text-spacing", "line-spacing", "font-height"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "How do you hide an element without removing it from the document flow?",
        options: [
          "display: none",
          "visibility: hidden",
          "opacity: 0",
          "Both visibility: hidden and opacity: 0",
        ],
        correctAnswer: 1,
      },
      {
        id: 21,
        question:
          "Which CSS property is used to align items vertically in a flexbox container?",
        options: [
          "align-items",
          "justify-content",
          "align-content",
          "vertical-align",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What does the `overflow` property in CSS control?",
        options: [
          "Element rotation",
          "Content that exceeds an element's box",
          "Text alignment",
          "Element transparency",
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question:
          "Which CSS property is used to define the animation duration?",
        options: [
          "animation-duration",
          "transition-duration",
          "animation-time",
          "animate-duration",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "How do you select the first child element of a parent in CSS?",
        options: [":first-child", ":first", ":child(1)", ":nth-child(1)"],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "Which CSS property is used to create a grid layout?",
        options: [
          "grid-template",
          "display: grid",
          "grid-layout",
          "grid-display",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "What is the purpose of the `calc()` function in CSS?",
        options: [
          "To perform mathematical calculations",
          "To define animations",
          "To set font sizes",
          "To align elements",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question:
          "Which CSS property is used to control the order of flex items?",
        options: ["order", "flex-order", "item-order", "align-order"],
        correctAnswer: 0,
      },
      {
        id: 28,
        question:
          "How do you apply a style to an element when it is focused, such as an input field?",
        options: [":focus", ":active", ":hover", ":selected"],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "Which CSS property is used to set the gap between grid items?",
        options: ["grid-gap", "gap", "grid-spacing", "Both grid-gap and gap"],
        correctAnswer: 3,
      },
      {
        id: 30,
        question: "What is the purpose of the `transform` property in CSS?",
        options: [
          "To change the element's position",
          "To modify the element's appearance (e.g., rotate, scale)",
          "To set the element's transparency",
          "To align text",
        ],
        correctAnswer: 1,
      },
    ],
  },

  // CSS Advanced
  {
    id: "css-advanced",
    technology: "css",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question: "How do you select all <p> elements inside a <div> element?",
        options: ["div p", "div.p", "div > p", "div + p"],
        correctAnswer: 0,
      },
      {
        id: 2,
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
        id: 3,
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
        id: 4,
        question:
          "Which CSS property is used to specify the stacking order of elements?",
        options: ["z-index", "position", "overlay", "stack-order"],
        correctAnswer: 0,
      },
      {
        id: 5,
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
        id: 6,
        question: "Which CSS unit is relative to the font-size of the element?",
        options: ["px", "em", "%", "vh"],
        correctAnswer: 1,
      },
      {
        id: 7,
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
        id: 8,
        question:
          "Which CSS property allows you to specify whether an element is resizable by the user?",
        options: ["user-resize", "resize", "scale", "transform"],
        correctAnswer: 1,
      },
      {
        id: 9,
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
        id: 10,
        question:
          "Which of the following is NOT a valid CSS position property value?",
        options: ["static", "relative", "absolute", "floating"],
        correctAnswer: 3,
      },
      {
        id: 11,
        question: "How do you define a CSS custom property (variable)?",
        options: [
          "var: --my-variable;",
          "--my-variable: value;",
          "custom: --my-variable;",
          "variable: --my-variable;",
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question:
          "Which CSS pseudo-element is used to style the first letter of an element?",
        options: ["::first-letter", "::first-char", "::letter", "::initial"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is the purpose of the `will-change` CSS property?",
        options: [
          "To change an element's size",
          "To optimize animations by hinting at properties that will change",
          "To define a transition effect",
          "To control element visibility",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question:
          "How do you select an element with a specific attribute value in CSS?",
        options: [
          "element[attr=value]",
          "element.attr=value",
          "element::attr(value)",
          "element:attr(value)",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question:
          "Which CSS property is used to control the alignment of grid items along the column axis?",
        options: [
          "align-items",
          "justify-content",
          "align-content",
          "grid-align",
        ],
        correctAnswer: 2,
      },
      {
        id: 16,
        question: "What does the `clip-path` CSS property do?",
        options: [
          "Clips an element to a specific shape or path",
          "Defines a transition path",
          "Hides an element completely",
          "Sets a clipping border",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question:
          "How do you apply styles only when the viewport is smaller than 600px?",
        options: [
          "@media (max-width: 600px) { }",
          "@viewport (width < 600px) { }",
          "@screen (max-width: 600px) { }",
          "@responsive (width: 600px) { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "Which CSS function is used to calculate values dynamically?",
        options: ["calc()", "compute()", "math()", "evaluate()"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is the purpose of the `object-fit` CSS property?",
        options: [
          "To control how an image or video fits within its container",
          "To align objects in a flex container",
          "To set the position of an object",
          "To define object transparency",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "How do you select the last child element of a parent in CSS?",
        options: [":last-child", ":last", ":child(last)", ":nth-last-child(1)"],
        correctAnswer: 0,
      },
      {
        id: 21,
        question:
          "Which CSS property is used to control the scroll behavior of an element?",
        options: [
          "scroll-behavior",
          "scroll-effect",
          "scroll-smooth",
          "scroll-style",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What does the `filter` CSS property do?",
        options: [
          "Applies graphical effects like blur or grayscale",
          "Filters out specific elements",
          "Controls element transparency",
          "Aligns elements in a grid",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "How do you reference a CSS custom property in a style rule?",
        options: [
          "var(--my-variable)",
          "use(--my-variable)",
          "get(--my-variable)",
          "--my-variable",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "Which CSS property is used to define the number of columns in a grid layout?",
        options: [
          "grid-template-columns",
          "grid-columns",
          "columns",
          "grid-column-count",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is the purpose of the `currentColor` keyword in CSS?",
        options: [
          "To inherit the background color",
          "To use the current value of the color property",
          "To reset the color to default",
          "To match the parent element's color",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "How do you prevent text from wrapping to a new line in CSS?",
        options: [
          "white-space: nowrap",
          "text-wrap: none",
          "wrap: off",
          "line-break: none",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question:
          "Which CSS property is used to control the stacking context of an element without changing its position?",
        options: ["z-index", "stack-order", "layer", "overlap"],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is the purpose of the `aspect-ratio` CSS property?",
        options: [
          "To set the width of an element",
          "To maintain a specific width-to-height ratio",
          "To control image scaling",
          "To align elements in a flexbox",
        ],
        correctAnswer: 1,
      },
      {
        id: 29,
        question:
          "How do you select an element that immediately follows another element in CSS?",
        options: [
          "element + element",
          "element ~ element",
          "element > element",
          "element :: element",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "Which CSS property is used to optimize rendering performance for animations?",
        options: [
          "transform",
          "animation-optimize",
          "render-mode",
          "performance",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // JavaScript Beginner
  {
    id: "javascript-beginner",
    technology: "javascript",
    difficulty: "beginner",
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
        question: "How do you call a function named 'myFunction'?",
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
          "How do you write an IF statement for executing code if 'i' is NOT equal to 5?",
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
        question: "How do you round the number 7.25 to the nearest integer?",
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
          "window.open('URL')",
          "window.new('URL')",
          "open.window('URL')",
          "new.window('URL')",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "How do you declare a variable in JavaScript?",
        options: ["var myVar", "variable myVar", "v myVar", "declare myVar"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What is the correct way to write a JavaScript array?",
        options: [
          "var colors = ['red', 'green', 'blue']",
          "var colors = ('red', 'green', 'blue')",
          "var colors = {'red', 'green', 'blue'}",
          "var colors = red, green, blue",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "How do you access the first element of an array in JavaScript?",
        options: ["array[0]", "array.first()", "array(1)", "array[1]"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "Which operator is used to assign a value to a variable?",
        options: ["==", "=", "===", ":="],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "What is the correct way to write a JavaScript string?",
        options: [
          "var text = 'Hello'",
          "var text = Hello",
          "var text = {Hello}",
          "var text = (Hello)",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "How do you find the length of a string in JavaScript?",
        options: [
          "string.length",
          "string.size()",
          "string.len()",
          "string.count()",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "Which JavaScript keyword is used to define a constant?",
        options: ["var", "let", "const", "constant"],
        correctAnswer: 2,
      },
      {
        id: 18,
        question: "How do you add an element to the end of an array?",
        options: [
          "array.push(element)",
          "array.add(element)",
          "array.append(element)",
          "array.insert(element)",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What will `typeof 'Hello'` return in JavaScript?",
        options: ["string", "text", "word", "char"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "How do you write a multi-line comment in JavaScript?",
        options: [
          "/* This is a comment */",
          "// This is a comment",
          "<!-- This is a comment -->",
          "# This is a comment",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "Which method converts a string to uppercase in JavaScript?",
        options: ["toUpperCase()", "upperCase()", "toUpper()", "capitalize()"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "What is the correct way to compare two values for equality in JavaScript?",
        options: ["=", "==", "===", ":="],
        correctAnswer: 2,
      },
      {
        id: 23,
        question:
          "How do you get a random number between 0 and 1 in JavaScript?",
        options: ["Math.random()", "random()", "Math.rnd()", "rnd()"],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Which keyword is used to exit a loop in JavaScript?",
        options: ["stop", "break", "exit", "return"],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "How do you check if a variable is undefined in JavaScript?",
        options: [
          "typeof variable === 'undefined'",
          "variable === null",
          "variable == undefined",
          "isUndefined(variable)",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What is the result of `5 + '5'` in JavaScript?",
        options: ["10", "55", "25", "NaN"],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "How do you select an HTML element by its ID in JavaScript?",
        options: [
          "document.getElementById('id')",
          "document.getId('id')",
          "document.findElement('id')",
          "document.selectId('id')",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What does the `alert()` function do in JavaScript?",
        options: [
          "Displays a message box",
          "Logs a message to the console",
          "Changes the page title",
          "Redirects to a new URL",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "How do you convert a string to a number in JavaScript?",
        options: [
          "Number(string)",
          "string.toNumber()",
          "parseString(string)",
          "toInt(string)",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "Which JavaScript method removes the last element from an array?",
        options: ["pop()", "remove()", "deleteLast()", "shift()"],
        correctAnswer: 0,
      },
    ],
  },

  // JavaScript Intermediate
  {
    id: "javascript-intermediate",
    technology: "javascript",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: "How do you declare a JavaScript variable?",
        options: ["var x;", "variable x;", "x = variable;", "declare x;"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Which operator is used to assign a value to a variable?",
        options: ["*", "-", "=", "x"],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "What will the following code return: Boolean(10 > 9)",
        options: ["true", "false", "NaN", "undefined"],
        correctAnswer: 0,
      },
      {
        id: 5,
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
        id: 6,
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
        id: 7,
        question: "Which of the following is a JavaScript framework?",
        options: ["Django", "React", "Laravel", "Rails"],
        correctAnswer: 1,
      },
      {
        id: 8,
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
        id: 9,
        question: "What is the output of: console.log(typeof [])?",
        options: ["array", "object", "undefined", "null"],
        correctAnswer: 1,
      },
      {
        id: 10,
        question:
          "Which method of an Array object adds one or more elements to the end of the array?",
        options: ["append()", "add()", "push()", "attachEnd()"],
        correctAnswer: 2,
      },
      {
        id: 11,
        question:
          "What does the 'this' keyword refer to in a JavaScript function?",
        options: [
          "The global object",
          "The function itself",
          "The object the function is a method of",
          "The parent function",
        ],
        correctAnswer: 2,
      },
      {
        id: 12,
        question: "How do you remove the last element from an array?",
        options: [
          "array.pop()",
          "array.shift()",
          "array.splice(-1)",
          "array.remove()",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is a closure in JavaScript?",
        options: [
          "A function with no parameters",
          "A function that has access to variables from its outer scope",
          "A method to lock variables",
          "A way to close a function",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "What is the output of: console.log(2 + '2')?",
        options: ["4", "22", "NaN", "undefined"],
        correctAnswer: 1,
      },
      {
        id: 15,
        question:
          "Which method converts a JSON string into a JavaScript object?",
        options: [
          "JSON.stringify()",
          "JSON.parse()",
          "JSON.convert()",
          "JSON.toObject()",
        ],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "What does the 'map' method do in JavaScript?",
        options: [
          "Removes elements from an array",
          "Creates a new array with the results of calling a function for every array element",
          "Sorts the array",
          "Merges two arrays",
        ],
        correctAnswer: 1,
      },
      {
        id: 17,
        question:
          "How do you prevent the default behavior of an event in JavaScript?",
        options: [
          "event.preventDefault()",
          "event.stopPropagation()",
          "event.cancel()",
          "event.stop()",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is the purpose of the 'async' keyword?",
        options: [
          "To make a function synchronous",
          "To allow a function to return a Promise",
          "To pause execution of a function",
          "To run a function in a loop",
        ],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "What will 'null == undefined' return?",
        options: ["true", "false", "null", "undefined"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "Which method is used to add an event listener to an element?",
        options: [
          "element.addEvent()",
          "element.on()",
          "element.addEventListener()",
          "element.attachEvent()",
        ],
        correctAnswer: 2,
      },
      {
        id: 21,
        question: "What does the 'filter' method do in JavaScript?",
        options: [
          "Creates a new array with elements that pass a test",
          "Modifies the original array",
          "Sorts the array",
          "Removes duplicates from an array",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is the output of: console.log(!!'hello')?",
        options: ["true", "false", "'hello'", "undefined"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "Which keyword is used to exit a loop in JavaScript?",
        options: ["stop", "break", "exit", "return"],
        correctAnswer: 1,
      },
      {
        id: 24,
        question: "What is the purpose of the 'Promise' object in JavaScript?",
        options: [
          "To handle synchronous operations",
          "To represent the eventual completion or failure of an asynchronous operation",
          "To store data permanently",
          "To create loops",
        ],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "What does 'document.querySelector()' do?",
        options: [
          "Selects all elements matching a CSS selector",
          "Selects the first element matching a CSS selector",
          "Creates a new element",
          "Removes an element",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "What is the output of: console.log([1, 2, 3].includes(2))?",
        options: ["true", "false", "2", "undefined"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is the difference between 'let' and 'var'?",
        options: [
          "'let' is function-scoped, 'var' is block-scoped",
          "'let' is block-scoped, 'var' is function-scoped",
          "'let' cannot be reassigned, 'var' can",
          "There is no difference",
        ],
        correctAnswer: 1,
      },
      {
        id: 28,
        question: "What does the 'spread' operator (...) do?",
        options: [
          "Divides an array into parts",
          "Copies or expands elements of an array or object",
          "Merges two functions",
          "Removes elements from an array",
        ],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "What is the output of: console.log(0 == '0')?",
        options: ["true", "false", "NaN", "undefined"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "Which method is used to join all elements of an array into a string?",
        options: ["join()", "concat()", "merge()", "toString()"],
        correctAnswer: 0,
      },
    ],
  },

  // JavaScript Advanced
  {
    id: "javascript-advanced",
    technology: "javascript",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [
          "Refers to the current function",
          "Refers to the current object",
          "Refers to the parent object",
          "Refers to the window object",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "What is a closure in JavaScript?",
        options: [
          "A function with no parameters",
          "A function that has access to variables in its outer scope",
          "A function that returns undefined",
          "A function that closes the program",
        ],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "What is the purpose of the 'use strict' directive?",
        options: [
          "To enforce stricter parsing and error handling",
          "To make the code run faster",
          "To enable new JavaScript features",
          "To prevent the use of variables",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "What is the difference between '==' and '===' operators?",
        options: [
          "No difference",
          "'===' compares both value and type",
          "'==' is faster than '==='",
          "'===' only compares values",
        ],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "What is event bubbling in JavaScript?",
        options: [
          "A way to create multiple events",
          "When an event triggers on a child and propagates up through parents",
          "When events occur simultaneously",
          "A method to remove events",
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "What is the purpose of Promise in JavaScript?",
        options: [
          "To make the code run faster",
          "To handle asynchronous operations",
          "To create loops",
          "To define variables",
        ],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "What is the difference between let and var?",
        options: [
          "No difference",
          "let has block scope, var has function scope",
          "var is faster than let",
          "let is used for constants",
        ],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "What is a generator function in JavaScript?",
        options: [
          "A function that generates random numbers",
          "A function that can be paused and resumed",
          "A function that creates other functions",
          "A function that only runs once",
        ],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "What is the purpose of the Symbol type in JavaScript?",
        options: [
          "To create unique identifiers",
          "To perform mathematical operations",
          "To convert strings to numbers",
          "To create arrays",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What is the purpose of the Map object in JavaScript?",
        options: [
          "To create a list of numbers",
          "To store key-value pairs and maintain insertion order",
          "To perform mathematical calculations",
          "To create arrays",
        ],
        correctAnswer: 1,
      },
      {
        id: 11,
        question: "What is the prototype chain in JavaScript?",
        options: [
          "A sequence of objects linked via their prototype property",
          "A method to chain promises",
          "A way to chain function calls",
          "A chain of event listeners",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question:
          "What happens when you use 'new' with a function in JavaScript?",
        options: [
          "It creates a new function",
          "It creates a new object with the function as its constructor",
          "It calls the function immediately",
          "It throws an error",
        ],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "What is the purpose of the 'async/await' syntax?",
        options: [
          "To create synchronous code",
          "To simplify working with promises",
          "To optimize loops",
          "To handle errors in synchronous code",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question:
          "What is the output of: console.log([1, 2, 3].__proto__ === Array.prototype)?",
        options: ["true", "false", "undefined", "null"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is the difference between 'call' and 'apply' methods?",
        options: [
          "'call' takes arguments as an array, 'apply' takes them individually",
          "'apply' takes arguments as an array, 'call' takes them individually",
          "No difference",
          "'call' is faster than 'apply'",
        ],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "What is a WeakMap in JavaScript?",
        options: [
          "A map that allows only strings as keys",
          "A map where keys are weakly referenced and can be garbage collected",
          "A map that cannot be modified",
          "A map that stores only numbers",
        ],
        correctAnswer: 1,
      },
      {
        id: 17,
        question:
          "What is the purpose of the 'debounce' technique in JavaScript?",
        options: [
          "To delay function execution until after a specified time of inactivity",
          "To execute a function immediately",
          "To prevent memory leaks",
          "To optimize loops",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is the output of: console.log(typeof Symbol())?",
        options: ["object", "symbol", "string", "undefined"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "What is the purpose of the 'Object.defineProperty' method?",
        options: [
          "To create a new object",
          "To define or modify a property on an object",
          "To delete a property from an object",
          "To copy an object",
        ],
        correctAnswer: 1,
      },
      {
        id: 20,
        question: "What is event delegation in JavaScript?",
        options: [
          "Attaching multiple event listeners to an element",
          "Using a single event listener on a parent to handle events for children",
          "Preventing event propagation",
          "Creating custom events",
        ],
        correctAnswer: 1,
      },
      {
        id: 21,
        question: "What is the output of: console.log(0.1 + 0.2 === 0.3)?",
        options: ["true", "false", "NaN", "undefined"],
        correctAnswer: 1,
      },
      {
        id: 22,
        question: "What is the purpose of the 'Proxy' object in JavaScript?",
        options: [
          "To create a copy of an object",
          "To intercept and customize operations on an object",
          "To lock an object from modifications",
          "To optimize object performance",
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "What is the difference between 'forEach' and 'map' methods?",
        options: [
          "'forEach' returns a new array, 'map' does not",
          "'map' returns a new array, 'forEach' does not",
          "No difference",
          "'forEach' is faster than 'map'",
        ],
        correctAnswer: 1,
      },
      {
        id: 24,
        question: "What is the purpose of the 'Reflect' object in JavaScript?",
        options: [
          "To create mirrors of objects",
          "To provide methods for interceptable JavaScript operations",
          "To optimize function calls",
          "To handle errors",
        ],
        correctAnswer: 1,
      },
      {
        id: 25,
        question:
          "What is the output of: console.log(Promise.resolve(1).then(() => 2).then(val => val))?",
        options: ["1", "2", "undefined", "Promise"],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "What is a memory leak in JavaScript, and how can it occur?",
        options: [
          "When variables are not declared",
          "When memory is not released after use, e.g., in event listeners",
          "When too many functions are called",
          "When arrays are too large",
        ],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "What is the purpose of the 'Object.freeze' method?",
        options: [
          "To make an object immutable",
          "To copy an object",
          "To delete an object",
          "To convert an object to a string",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question:
          "What is the output of: console.log([1, 2, 3].reduce((a, b) => a + b, 0))?",
        options: ["6", "123", "undefined", "0"],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "What is the purpose of the 'throttle' technique in JavaScript?",
        options: [
          "To limit the rate at which a function can fire",
          "To execute a function immediately",
          "To prevent memory leaks",
          "To pause function execution",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What is the difference between 'Object.create' and 'new Object'?",
        options: [
          "'Object.create' allows specifying a prototype, 'new Object' does not",
          "'new Object' allows specifying a prototype, 'Object.create' does not",
          "No difference",
          "'Object.create' is faster than 'new Object'",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Tailwind CSS Beginner
  {
    id: "tailwindcss-beginner",
    technology: "tailwindcss",
    difficulty: "beginner",
    questions: [
      {
        id: 1,
        question: "What is Tailwind CSS primarily used for?",
        options: [
          "Writing JavaScript functions",
          "Styling web pages with utility classes",
          "Managing database queries",
          "Creating server-side logic",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Which HTML attribute is used to apply Tailwind CSS styles?",
        options: ["style", "class", "id", "data"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question:
          "How do you set the background color to blue in Tailwind CSS?",
        options: ["bg-blue", "background-blue", "bg-blue-500", "color-blue"],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "What does the Tailwind CSS class 'p-4' do?",
        options: [
          "Sets padding to 4 pixels",
          "Sets padding to 1rem (16px by default)",
          "Sets margin to 4 pixels",
          "Sets font size to 4rem",
        ],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "How do you center text horizontally in Tailwind CSS?",
        options: [
          "text-center",
          "align-center",
          "center-text",
          "text-align-center",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Which Tailwind CSS class sets the font size to large?",
        options: ["font-lg", "text-lg", "size-large", "font-size-lg"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "How do you make an element bold in Tailwind CSS?",
        options: ["font-bold", "text-bold", "bold", "font-weight-bold"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "What does the 'm-2' class do in Tailwind CSS?",
        options: [
          "Sets margin to 2 pixels",
          "Sets margin to 0.5rem (8px by default)",
          "Sets padding to 2 pixels",
          "Sets margin to 2rem",
        ],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "Which class adds a rounded border in Tailwind CSS?",
        options: ["border-round", "rounded", "border-radius", "round"],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "How do you apply a shadow to an element in Tailwind CSS?",
        options: ["shadow", "box-shadow", "shadow-md", "element-shadow"],
        correctAnswer: 2,
      },
      {
        id: 11,
        question: "What is the default file used to configure Tailwind CSS?",
        options: [
          "tailwind.config.js",
          "tailwind.css",
          "config.tailwind.js",
          "tailwind.json",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question:
          "Which class makes an element take the full width of its parent?",
        options: ["w-full", "width-full", "full-width", "w-100"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "How do you set the text color to red in Tailwind CSS?",
        options: ["color-red", "text-red", "text-red-500", "font-red"],
        correctAnswer: 2,
      },
      {
        id: 14,
        question: "What does the 'flex' class do in Tailwind CSS?",
        options: [
          "Sets display to flex",
          "Aligns items flexibly",
          "Stretches the element",
          "Adds flexible padding",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "How do you vertically center items in a flex container?",
        options: [
          "items-center",
          "align-center",
          "flex-center",
          "center-items",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "Which class hides an element in Tailwind CSS?",
        options: ["hidden", "display-none", "hide", "invisible"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "How do you add a border to an element in Tailwind CSS?",
        options: ["border", "outline", "border-line", "edge"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What does the 'gap-4' class do in a flex or grid container?",
        options: [
          "Sets gap between elements to 4 pixels",
          "Sets gap between elements to 1rem (16px by default)",
          "Sets padding to 4 pixels",
          "Sets margin to 1rem",
        ],
        correctAnswer: 1,
      },
      {
        id: 19,
        question:
          "Which class applies a hover effect to change text color to blue?",
        options: [
          "hover:text-blue-500",
          "text-blue:hover",
          "hover-blue-500",
          "text-hover-blue",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "How do you make an element italic in Tailwind CSS?",
        options: ["italic", "font-italic", "text-italic", "style-italic"],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "Which class sets the maximum width of an element to 100%?",
        options: ["max-w-full", "width-max", "max-width-100", "w-max"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "How do you apply styles only on medium screens (md) and above?",
        options: ["md:style", "medium:style", "screen-md:style", "md-style"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What does the 'h-8' class do in Tailwind CSS?",
        options: [
          "Sets height to 8 pixels",
          "Sets height to 2rem (32px by default)",
          "Sets height to 8rem",
          "Sets height to 0.5rem (8px by default)",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "Which class aligns items horizontally to the right in a flex container?",
        options: ["justify-end", "align-right", "flex-right", "items-end"],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "How do you set the opacity of an element to 50% in Tailwind CSS?",
        options: ["opacity-50", "transparent-50", "opacity-half", "fade-50"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "Which class adds a transition effect to an element?",
        options: ["transition", "animate", "transition-all", "effect"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "How do you make text uppercase in Tailwind CSS?",
        options: [
          "uppercase",
          "text-uppercase",
          "font-uppercase",
          "transform-uppercase",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question:
          "What is the default breakpoint prefix for small screens in Tailwind CSS?",
        options: ["sm", "md", "lg", "xs"],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "Which class sets the cursor to a pointer on hover?",
        options: ["cursor-pointer", "pointer", "hover-pointer", "cursor-hand"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "How do you center a block element horizontally in Tailwind CSS?",
        options: ["mx-auto", "center-block", "margin-center", "block-center"],
        correctAnswer: 0,
      },
    ],
  },

  // Tailwind CSS Intermediate
  {
    id: "tailwindcss-intermediate",
    technology: "tailwindcss",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question:
          "How do you apply a Tailwind CSS class only on hover and focus states?",
        options: [
          "hover:focus:class",
          "hover:class focus:class",
          "state-hover-focus:class",
          "hover-focus:class",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question:
          "Which Tailwind CSS class creates a flexbox layout with items spaced evenly?",
        options: [
          "flex justify-between",
          "flex space-evenly",
          "flex justify-around",
          "flex distribute",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "How do you set a custom width of 10rem in Tailwind CSS?",
        options: ["w-10rem", "w-[10rem]", "width-10", "w-custom-10"],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "What does the 'sm:grid-cols-2' class do in Tailwind CSS?",
        options: [
          "Sets 2 columns for small screens and above",
          "Sets 2 columns for small screens only",
          "Sets 2 rows for small screens and above",
          "Sets 2 columns for all screen sizes",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "How do you apply a background gradient from blue to green in Tailwind CSS?",
        options: [
          "bg-gradient-to-r from-blue-500 to-green-500",
          "gradient-blue-green",
          "bg-blue-to-green",
          "bg-gradient blue-500 green-500",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Which class aligns items to the bottom of a flex container?",
        options: ["items-end", "align-bottom", "flex-end", "items-bottom"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "How do you configure a custom color in tailwind.config.js?",
        options: [
          "colors: { custom: '#123456' }",
          "theme: { colors: { custom: '#123456' } }",
          "theme: { extend: { colors: { custom: '#123456' } } }",
          "customColors: { custom: '#123456' }",
        ],
        correctAnswer: 2,
      },
      {
        id: 8,
        question: "What does the 'divide-y' class do in Tailwind CSS?",
        options: [
          "Adds horizontal borders between child elements",
          "Adds vertical borders between child elements",
          "Divides the element into rows",
          "Sets a vertical gap between elements",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "How do you apply a style only when an element is the first child?",
        options: [
          "first:class",
          "child-first:class",
          "first-child:class",
          ":first:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Which class creates a grid layout with 3 equal columns?",
        options: [
          "grid-cols-3",
          "grid columns-3",
          "grid-template-cols-3",
          "cols-3",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question:
          "How do you make an element fade in on hover using Tailwind CSS?",
        options: [
          "hover:opacity-100 transition-opacity",
          "hover:fade-in",
          "hover:opacity-50",
          "transition hover:opacity",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What does the 'space-x-4' class do in Tailwind CSS?",
        options: [
          "Sets horizontal margin between child elements to 1rem",
          "Sets vertical padding to 4 pixels",
          "Sets horizontal padding to 1rem",
          "Sets vertical margin between child elements to 1rem",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "How do you apply a class only on large screens (lg) and above?",
        options: [
          "lg:class",
          "large:class",
          "screen-lg:class",
          "lg-screen:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "Which class rotates an element by 45 degrees in Tailwind CSS?",
        options: [
          "rotate-45",
          "transform-rotate-45",
          "rotation-45",
          "rotate-[45deg]",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question:
          "How do you set a custom font size of 2.5rem in Tailwind CSS?",
        options: [
          "text-2.5rem",
          "text-[2.5rem]",
          "font-size-2.5",
          "text-custom-2.5",
        ],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "What does the 'ring-2' class do in Tailwind CSS?",
        options: [
          "Adds a 2px outline around an element",
          "Adds a 2px shadow ring around an element",
          "Sets a 2px border radius",
          "Adds a 2px border",
        ],
        correctAnswer: 1,
      },
      {
        id: 17,
        question:
          "How do you apply styles only when an element is focused within a form?",
        options: [
          "focus-within:class",
          "form-focus:class",
          "focus:class",
          "within-focus:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "Which class sets the z-index of an element to 10 in Tailwind CSS?",
        options: ["z-10", "z-index-10", "stack-10", "layer-10"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question:
          "How do you create a responsive container that spans 4 columns on large screens?",
        options: [
          "lg:col-span-4",
          "col-span-4 lg",
          "large:col-span-4",
          "col-4 lg:col-span-4",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "What does the 'tracking-tight' class do in Tailwind CSS?",
        options: [
          "Decreases letter spacing",
          "Increases letter spacing",
          "Sets tight line height",
          "Aligns text tightly",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question:
          "How do you apply a class only when the parent has a specific class like 'group'?",
        options: [
          "group-hover:class",
          "parent-hover:class",
          "group:class",
          "hover-parent:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Which class adds a smooth scroll behavior in Tailwind CSS?",
        options: [
          "scroll-smooth",
          "smooth-scroll",
          "scroll-behavior-smooth",
          "scroll-auto",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question:
          "How do you extend the default spacing scale in tailwind.config.js?",
        options: [
          "spacing: { '10': '2.5rem' }",
          "theme: { spacing: { '10': '2.5rem' } }",
          "theme: { extend: { spacing: { '10': '2.5rem' } } }",
          "extend: { spacing: { '10': '2.5rem' } }",
        ],
        correctAnswer: 2,
      },
      {
        id: 24,
        question: "What does the 'aspect-square' class do in Tailwind CSS?",
        options: [
          "Sets a 1:1 aspect ratio",
          "Creates a square border",
          "Aligns elements in a square grid",
          "Sets equal padding",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "How do you apply a class only on dark mode in Tailwind CSS?",
        options: [
          "dark:class",
          "dark-mode:class",
          "theme-dark:class",
          "night:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "Which class scales an element to 125% of its original size in Tailwind CSS?",
        options: [
          "scale-125",
          "transform-scale-125",
          "size-125",
          "scale-[1.25]",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question:
          "How do you apply a class only for the last child element in Tailwind CSS?",
        options: [
          "last:class",
          "child-last:class",
          "last-child:class",
          ":last:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What does the 'backdrop-blur-md' class do in Tailwind CSS?",
        options: [
          "Applies a medium blur to the background behind an element",
          "Blurs the element itself",
          "Adds a medium shadow to the background",
          "Reduces background opacity",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "How do you set a custom gap of 3rem in a grid layout?",
        options: ["gap-3rem", "gap-[3rem]", "grid-gap-3", "gap-custom-3"],
        correctAnswer: 1,
      },
      {
        id: 30,
        question:
          "Which class centers a grid item both horizontally and vertically in Tailwind CSS?",
        options: [
          "place-self-center",
          "self-center",
          "center-grid",
          "justify-items-center",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Tailwind CSS Advanced
  {
    id: "tailwindcss-advanced",
    technology: "tailwindcss",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question:
          "How do you create a custom utility in a Tailwind CSS plugin?",
        options: [
          "module.exports = { utilities: { '.custom': { property: 'value' } } }",
          "module.exports = { plugins: [function({ addUtilities }) { addUtilities({ '.custom': { property: 'value' } }) }] }",
          "theme: { extend: { utilities: { custom: { property: 'value' } } } }",
          "plugins: { custom: { property: 'value' } }",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question:
          "Which Tailwind CSS directive is used to apply styles conditionally based on a parent’s state?",
        options: ["@apply", "@variants", "@group", "@container"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "How do you enable JIT (Just-In-Time) mode in Tailwind CSS?",
        options: [
          "mode: 'jit' in tailwind.config.js",
          "jit: true in tailwind.config.js",
          "enableJit: true in tailwind.config.js",
          "theme: { jit: true } in tailwind.config.js",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question:
          "What does the 'supports-[feature]' variant do in Tailwind CSS?",
        options: [
          "Applies styles if a CSS feature is supported",
          "Checks for browser compatibility",
          "Enables feature flags in Tailwind",
          "Adds support for custom utilities",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "How do you apply a custom CSS property using arbitrary values in Tailwind CSS?",
        options: [
          "[--custom: value]",
          "custom-[--custom: value]",
          "[custom: value]",
          "style-[--custom: value]",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question:
          "Which class creates a grid with a variable number of columns based on content?",
        options: [
          "grid-cols-auto",
          "grid-flow-col",
          "grid-cols-minmax",
          "auto-cols-auto",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "How do you purge unused Tailwind CSS classes in production?",
        options: [
          "purge: ['./src/**/*.{html,js}'] in tailwind.config.js",
          "clean: ['./src/**/*.{html,js}'] in tailwind.config.js",
          "optimize: ['./src/**/*.{html,js}'] in tailwind.config.js",
          "remove: ['./src/**/*.{html,js}'] in tailwind.config.js",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question:
          "What does the 'peer-checked:class' variant do in Tailwind CSS?",
        options: [
          "Applies styles when a peer element is checked",
          "Checks the peer element’s state",
          "Applies styles to checked elements",
          "Targets the parent of a checked element",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "How do you apply a class conditionally based on a custom media query?",
        options: [
          "[@media (min-width: 800px)]:class",
          "media-[min-width:800px]:class",
          "[min-width:800px]:class",
          "custom-media:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question:
          "Which class ensures a flex item grows to fill available space?",
        options: ["flex-grow", "grow", "flex-expand", "expand"],
        correctAnswer: 1,
      },
      {
        id: 11,
        question: "How do you add a custom screen size in tailwind.config.js?",
        options: [
          "screens: { 'custom': '800px' }",
          "theme: { screens: { 'custom': '800px' } }",
          "theme: { extend: { screens: { 'custom': '800px' } } }",
          "customScreens: { 'custom': '800px' }",
        ],
        correctAnswer: 2,
      },
      {
        id: 12,
        question:
          "What does the 'motion-safe:class' variant do in Tailwind CSS?",
        options: [
          "Applies styles only if reduced motion is disabled",
          "Ensures animations are safe for all users",
          "Applies styles for motion-based transitions",
          "Disables animations for accessibility",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "How do you create a custom transition timing function in Tailwind CSS?",
        options: [
          "transitionTimingFunction: { custom: 'cubic-bezier(0.4, 0, 0.2, 1)' }",
          "theme: { extend: { transitionTimingFunction: { custom: 'cubic-bezier(0.4, 0, 0.2, 1)' } } }",
          "timing: { custom: 'cubic-bezier(0.4, 0, 0.2, 1)' }",
          "transition: { custom: 'cubic-bezier(0.4, 0, 0.2, 1)' }",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "Which class applies a clip-path to create a circular shape?",
        options: [
          "clip-circle",
          "[clip-path:circle()]",
          "clip-path-circle",
          "circle-clip",
        ],
        correctAnswer: 1,
      },
      {
        id: 15,
        question:
          "How do you apply styles only when an element is in a specific orientation?",
        options: [
          "orientation-[portrait]:class",
          "portrait:class",
          "screen-orientation:class",
          "[orientation:portrait]:class",
        ],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "What does the 'content-none' class do in Tailwind CSS?",
        options: [
          "Removes the content of a pseudo-element",
          "Hides the element’s content",
          "Clears the content property",
          "Disables content alignment",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question:
          "How do you create a custom utility for a CSS filter in a Tailwind plugin?",
        options: [
          "addUtilities({ '.filter-custom': { filter: 'blur(5px)' } })",
          "addFilter({ '.filter-custom': { filter: 'blur(5px)' } })",
          "utilities: { filter: { custom: 'blur(5px)' } }",
          "theme: { filter: { custom: 'blur(5px)' } }",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "Which class applies styles to an element when it’s the only child?",
        options: [
          "only:class",
          "single:class",
          "only-child:class",
          ":only:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question:
          "How do you optimize Tailwind CSS for faster builds in a large project?",
        options: [
          "Enable JIT mode and configure purge",
          "Disable all variants",
          "Use inline CSS instead of Tailwind",
          "Remove tailwind.config.js",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "What does the 'aria-checked:class' variant do in Tailwind CSS?",
        options: [
          "Applies styles when an element has aria-checked='true'",
          "Checks ARIA attributes",
          "Applies styles to checked inputs",
          "Targets ARIA-labeled elements",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "How do you apply a class only when printing a page?",
        options: [
          "print:class",
          "[@media print]:class",
          "media-print:class",
          "print-only:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "Which class creates a grid with a minimum column width of 200px?",
        options: [
          "grid-cols-minmax-200",
          "auto-cols-min-[200px]",
          "grid-cols-[minmax(200px, 1fr)]",
          "cols-min-200",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "How do you extend Tailwind’s default opacity scale?",
        options: [
          "opacity: { '15': '0.15' }",
          "theme: { opacity: { '15': '0.15' } }",
          "theme: { extend: { opacity: { '15': '0.15' } } }",
          "extend: { opacity: { '15': '0.15' } }",
        ],
        correctAnswer: 2,
      },
      {
        id: 24,
        question:
          "What does the 'forced-color-adjust-auto' class do in Tailwind CSS?",
        options: [
          "Adjusts colors for forced color modes",
          "Forces a specific color scheme",
          "Auto-corrects color contrast",
          "Disables color adjustments",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "How do you apply a class only when an element is in a specific scroll position?",
        options: [
          "scroll-[top]:class",
          "[scroll-position:top]:class",
          "scroll-top:class",
          "sticky:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "Which class creates a smooth animation for transform and opacity changes?",
        options: [
          "transition-transform-opacity",
          "transition-all",
          "animate-transform-opacity",
          "transition",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question:
          "How do you add a custom keyframe animation in tailwind.config.js?",
        options: [
          "keyframes: { custom: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } }",
          "theme: { extend: { keyframes: { custom: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } } } }",
          "animations: { custom: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } }",
          "extend: { animation: { custom: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } } }",
        ],
        correctAnswer: 1,
      },
      {
        id: 28,
        question:
          "What does the 'has-[selector]:class' variant do in Tailwind CSS?",
        options: [
          "Applies styles if an element contains a matching selector",
          "Targets elements with specific attributes",
          "Checks for child elements",
          "Applies styles to parent elements",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "How do you apply a class only for high-contrast mode?",
        options: [
          "high-contrast:class",
          "[@media (forced-colors: active)]:class",
          "contrast:class",
          "media-contrast:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "Which class ensures a grid item spans across all available tracks?",
        options: ["col-span-full", "span-all", "grid-span-full", "col-full"],
        correctAnswer: 0,
      },
    ],
  },

  // Sass Beginner
  {
    id: "sass-beginner",
    technology: "sass",
    difficulty: "beginner",
    questions: [
      {
        id: 1,
        question: "What is Sass primarily used for?",
        options: [
          "JavaScript programming",
          "CSS preprocessing",
          "HTML templating",
          "Database management",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Which file extension is commonly used for Sass files?",
        options: [".css", ".scss", ".sass", "Both .scss and .sass"],
        correctAnswer: 3,
      },
      {
        id: 3,
        question: "How do you define a variable in Sass?",
        options: [
          "$variable: value;",
          "var variable = value;",
          "@variable: value;",
          "#variable: value;",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "What is the correct syntax to use a Sass variable?",
        options: ["{variable}", "$variable", "@variable", "%variable"],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "Which symbol is used for nesting selectors in Sass?",
        options: ["&", ">", "#", "@"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "What does the `&` symbol represent in Sass nesting?",
        options: [
          "Child selector",
          "Parent selector",
          "Sibling selector",
          "Class selector",
        ],
        correctAnswer: 1,
      },
      {
        id: 7,
        question:
          "How do you write a comment in Sass that won’t appear in the compiled CSS?",
        options: [
          "// comment",
          "/* comment */",
          "# comment",
          "<!-- comment -->",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "What is the purpose of a Sass mixin?",
        options: [
          "To store variables",
          "To reuse a group of CSS declarations",
          "To import files",
          "To define loops",
        ],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "How do you define a mixin in Sass?",
        options: [
          "@mixin name { }",
          "@function name { }",
          "@define name { }",
          "@mix name { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "How do you include a mixin in Sass?",
        options: [
          "@include name;",
          "@use name;",
          "@apply name;",
          "@mixin name;",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What does the `@import` directive do in Sass?",
        options: [
          "Imports JavaScript files",
          "Imports other Sass files",
          "Imports fonts",
          "Imports images",
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question:
          "Which Sass feature allows one selector to inherit styles from another?",
        options: ["@extend", "@mixin", "@inherit", "@include"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "What is the output of `$color: red; div { color: $color; }` after compilation?",
        options: [
          "div { color: $color; }",
          "div { color: red; }",
          "div { $color: red; }",
          "div { color: none; }",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "Which operator is used for addition in Sass?",
        options: ["+", "&", "++", "#"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question:
          "How do you write a multi-line comment in Sass that appears in the compiled CSS?",
        options: [
          "// comment",
          "/* comment */",
          "# comment",
          "<!-- comment -->",
        ],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "What is the purpose of the `@function` directive in Sass?",
        options: [
          "To define reusable styles",
          "To create custom calculations",
          "To import files",
          "To nest selectors",
        ],
        correctAnswer: 1,
      },
      {
        id: 17,
        question:
          "Which keyword is used to return a value from a Sass function?",
        options: ["@return", "@yield", "@output", "@result"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "How do you apply a parent selector suffix in Sass nesting?",
        options: ["&-suffix", "$-suffix", "@suffix", "#suffix"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What does the `@if` directive do in Sass?",
        options: [
          "Loops through values",
          "Conditionally applies styles",
          "Imports files",
          "Defines variables",
        ],
        correctAnswer: 1,
      },
      {
        id: 20,
        question: "How do you compile Sass code into CSS?",
        options: [
          "Using a text editor",
          "Using a Sass compiler",
          "Using a browser",
          "Using HTML",
        ],
        correctAnswer: 1,
      },
      {
        id: 21,
        question:
          "What is the difference between `.scss` and `.sass` file extensions?",
        options: [
          "`.scss` uses curly braces, `.sass` uses indentation",
          "`.scss` is for CSS, `.sass` is for Sass",
          "`.scss` is deprecated, `.sass` is modern",
          "No difference",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "How do you pass an argument to a mixin in Sass?",
        options: [
          "@mixin name($arg) { }",
          "@mixin name: $arg { }",
          "@mixin name => $arg { }",
          "@mixin name[$arg] { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question:
          "Which Sass feature allows you to loop through a list of values?",
        options: ["@for", "@while", "@each", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 24,
        question: "What does the `@else` directive do in Sass?",
        options: [
          "Starts a loop",
          "Provides an alternative condition",
          "Includes a mixin",
          "Imports a file",
        ],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "How do you interpolate a variable in a Sass string?",
        options: [
          "#{$variable}",
          "${variable}",
          "@{$variable}",
          "%{$variable}",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "What is the default value of a Sass variable if not specified?",
        options: ["null", "0", "none", "undefined"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "Which directive is used to include external Sass libraries?",
        options: ["@use", "@import", "@require", "@load"],
        correctAnswer: 0,
      },
      {
        id: 28,
        question:
          "What happens if you use `@extend` on a selector that doesn’t exist?",
        options: [
          "Sass throws an error",
          "The style is ignored",
          "The CSS compiles with no output",
          "The selector is created",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "How do you define a default value for a mixin argument in Sass?",
        options: [
          "$arg: value",
          "$arg = value",
          "$arg => value",
          "$arg default value",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What is the purpose of the `!default` flag in Sass variables?",
        options: [
          "Forces variable override",
          "Sets a value only if the variable is undefined",
          "Makes the variable global",
          "Prevents variable usage",
        ],
        correctAnswer: 1,
      },
    ],
  },

  // Sass Intermediate
  {
    id: "sass-intermediate",
    technology: "sass",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question:
          "How do you use the `@use` directive in Sass to import a module?",
        options: [
          "@use 'module';",
          "@use module;",
          "@import 'module';",
          "@use module as *;",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question:
          "What is the purpose of the `as` keyword in the `@use` directive?",
        options: [
          "To rename the module namespace",
          "To specify a file extension",
          "To apply a condition",
          "To include a mixin",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question:
          "How do you access a variable from a module imported with `@use 'module' as mod`?",
        options: [
          "$module.variable",
          "$mod.variable",
          "$variable",
          "module.$variable",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "What does the `@forward` directive do in Sass?",
        options: [
          "Exports variables to JavaScript",
          "Forwards a module’s members to other files",
          "Includes a mixin",
          "Loops through values",
        ],
        correctAnswer: 1,
      },
      {
        id: 5,
        question:
          "How do you conditionally include a mixin based on an argument?",
        options: [
          "@if $arg { @include mixin; }",
          "@include mixin if $arg;",
          "@mixin $arg { @include; }",
          "@if $arg => @include mixin;",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question:
          "What is the output of `$num: 10; div { width: $num * 2px; }` after compilation?",
        options: [
          "div { width: 20px; }",
          "div { width: 10 * 2px; }",
          "div { width: 20; }",
          "div { width: $num * 2px; }",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question:
          "How do you create a mixin that accepts multiple arguments in Sass?",
        options: [
          "@mixin name($arg1, $arg2) { }",
          "@mixin name($arg1 $arg2) { }",
          "@mixin name[$arg1, $arg2] { }",
          "@mixin name($arg1; $arg2) { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "What is the purpose of the `content` block in a mixin?",
        options: [
          "To define variables",
          "To allow custom styles to be passed into the mixin",
          "To import files",
          "To loop through values",
        ],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "How do you include a content block in a mixin?",
        options: ["@content;", "@include content;", "@block;", "@yield;"],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What does the `@each` directive do in Sass?",
        options: [
          "Iterates over a list or map",
          "Conditionally applies styles",
          "Defines a function",
          "Imports a module",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question:
          "How do you write a `@for` loop in Sass to iterate from 1 to 5?",
        options: [
          "@for $i from 1 to 5 { }",
          "@for $i from 1 through 5 { }",
          "@for $i in 1 to 5 { }",
          "@for $i = 1 to 5 { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question:
          "What is the difference between `@for ... to` and `@for ... through` in Sass?",
        options: [
          "`to` excludes the end value, `through` includes it",
          "`to` includes the end value, `through` excludes it",
          "`to` is for lists, `through` is for maps",
          "No difference",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "How do you access a value in a Sass map?",
        options: [
          "map-get($map, key)",
          "$map[key]",
          "$map.key",
          "map($map, key)",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "What is the purpose of the `!global` flag in Sass?",
        options: [
          "Makes a variable accessible outside its scope",
          "Prevents variable override",
          "Sets a default value",
          "Exports a variable to CSS",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "How do you merge two Sass maps?",
        options: [
          "map-merge($map1, $map2)",
          "$map1 + $map2",
          "merge($map1, $map2)",
          "map($map1, $map2)",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What happens when you use `@extend` inside a media query?",
        options: [
          "It works normally",
          "Sass throws an error",
          "The styles are ignored",
          "The media query is ignored",
        ],
        correctAnswer: 1,
      },
      {
        id: 17,
        question: "How do you define a placeholder selector in Sass?",
        options: [
          "%selector { }",
          "#selector { }",
          ".selector { }",
          "@selector { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "What is the benefit of using placeholder selectors with `@extend`?",
        options: [
          "They reduce compiled CSS size",
          "They allow dynamic variables",
          "They enable loops",
          "They import modules",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "How do you perform string interpolation in a Sass selector?",
        options: [
          ".#{$var} { }",
          ".${var} { }",
          ".@{$var} { }",
          ".%{$var} { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "What does the `darken($color, $amount)` function do in Sass?",
        options: [
          "Lightens a color",
          "Darkens a color",
          "Changes opacity",
          "Inverts a color",
        ],
        correctAnswer: 1,
      },
      {
        id: 21,
        question: "How do you check if a value exists in a Sass list?",
        options: [
          "index($list, $value)",
          "list-contains($list, $value)",
          "$list[$value]",
          "has($list, $value)",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is the purpose of the `@while` directive in Sass?",
        options: [
          "Conditionally applies styles",
          "Loops until a condition is false",
          "Imports modules",
          "Defines a function",
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question:
          "How do you create a function in Sass that returns a calculated value?",
        options: [
          "@function name($arg) { @return $arg * 2; }",
          "@mixin name($arg) { @return $arg * 2; }",
          "@function name($arg) { $arg * 2; }",
          "@return name($arg) { $arg * 2; }",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "What does the `if($condition, $true, $false)` function do in Sass?",
        options: [
          "Returns $true if $condition is true, otherwise $false",
          "Loops through values",
          "Merges maps",
          "Imports files",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "How do you apply a default namespace to a module with `@use`?",
        options: [
          "@use 'module' as *;",
          "@use 'module' with default;",
          "@use 'module' namespace;",
          "@use 'module' global;",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What is the purpose of the `meta` module in Sass?",
        options: [
          "Provides utility functions for inspecting Sass",
          "Handles color calculations",
          "Manages loops",
          "Imports external files",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "How do you use the `meta.call()` function in Sass?",
        options: [
          "To invoke a function dynamically",
          "To import a module",
          "To loop through a list",
          "To merge maps",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What does the `selector-nest()` function do in Sass?",
        options: [
          "Combines multiple selectors",
          "Removes a selector",
          "Checks selector validity",
          "Exports a selector",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "How do you handle vendor prefixes in Sass for cross-browser compatibility?",
        options: [
          "Use a mixin with prefixes",
          "Sass automatically adds prefixes",
          "Use @prefix directive",
          "Use @vendor directive",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What is the benefit of using `@use` over `@import` in modern Sass?",
        options: [
          "Better namespace management",
          "Faster compilation",
          "Smaller CSS output",
          "Simpler syntax",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Sass Advanced
  {
    id: "sass-advanced",
    technology: "sass",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question:
          "How does the `@use` directive with `with` clause configure module variables?",
        options: [
          "@use 'module' with ($var: value);",
          "@use 'module' configure ($var: value);",
          "@use 'module' set ($var: value);",
          "@use 'module' vars ($var: value);",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question:
          "What is the purpose of the `meta.load-css()` function in Sass?",
        options: [
          "Dynamically imports and evaluates a CSS module",
          "Loads a JavaScript file",
          "Compiles Sass to CSS",
          "Merges multiple maps",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question:
          "How do you prevent a module’s members from being forwarded with `@forward`?",
        options: [
          "Use `hide` keyword",
          "Use `private` keyword",
          "Use `exclude` keyword",
          "Use `restrict` keyword",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question:
          "What does the `meta.feature-exists()` function check in Sass?",
        options: [
          "Availability of a Sass feature",
          "Browser support for a CSS property",
          "Existence of a variable",
          "Validity of a selector",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "How do you create a custom error in Sass?",
        options: [
          "@error 'message';",
          "@throw 'message';",
          "@warn 'message';",
          "@exception 'message';",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question:
          "What is the output of `selector-append('.a', '.b')` in Sass?",
        options: [".a.b", ".a .b", ".a, .b", ".a + .b"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question:
          "How do you check the type of a value in Sass using the `meta` module?",
        options: [
          "meta.type-of($value)",
          "meta.get-type($value)",
          "meta.value-type($value)",
          "meta.check-type($value)",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question:
          "What is the purpose of the `meta.inspect()` function in Sass?",
        options: [
          "Converts a value to a string for debugging",
          "Validates a CSS property",
          "Merges two maps",
          "Loops through a list",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "How do you dynamically generate a selector using `selector-unify()`?",
        options: [
          "selector-unify('.a', '.b')",
          "selector-merge('.a', '.b')",
          "selector-combine('.a', '.b')",
          "selector-join('.a', '.b')",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What does the `math.div()` function do in Sass?",
        options: [
          "Performs division, preserving units",
          "Rounds a number",
          "Calculates a percentage",
          "Converts units",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "How do you optimize Sass compilation for large projects?",
        options: [
          "Use `@use` instead of `@import`",
          "Increase variable usage",
          "Avoid nesting selectors",
          "Use inline CSS",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What is the purpose of the `unique-id()` function in Sass?",
        options: [
          "Generates a unique identifier",
          "Creates a random color",
          "Validates a selector",
          "Merges maps",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "How do you handle deprecated Sass features in a codebase?",
        options: [
          "Use `@warn` to log deprecation",
          "Use `@error` to stop compilation",
          "Use `@debug` to trace issues",
          "Ignore warnings",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "What is the benefit of using `map.remove()` over `map-get()` in Sass?",
        options: [
          "Removes a key-value pair from a map",
          "Retrieves a value faster",
          "Merges two maps",
          "Validates map keys",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question:
          "How do you create a mixin that supports variable arguments in Sass?",
        options: [
          "@mixin name($args...) { }",
          "@mixin name($args*) { }",
          "@mixin name($args[]) { }",
          "@mixin name($args: all) { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question:
          "What does the `meta.global-variable-exists()` function check?",
        options: [
          "If a global variable is defined",
          "If a local variable is defined",
          "If a module is imported",
          "If a function exists",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "How do you use the `color.adjust()` function in Sass?",
        options: [
          "Modifies specific color properties",
          "Converts a color to grayscale",
          "Inverts a color",
          "Merges two colors",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is the purpose of the `@debug` directive in Sass?",
        options: [
          "Logs information to the console for debugging",
          "Throws an error",
          "Imports a module",
          "Optimizes compilation",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "How do you implement a custom unit conversion in Sass?",
        options: [
          "Create a function with `math.div()` and unit handling",
          "Use `unit-convert()` built-in function",
          "Use `@extend` with units",
          "Use `map-get()` for units",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "What does the `selector.is-superselector()` function do in Sass?",
        options: [
          "Checks if one selector matches or contains another",
          "Combines two selectors",
          "Validates a selector",
          "Removes a selector",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "How do you namespace a forwarded module with `@forward`?",
        options: [
          "@forward 'module' as prefix-*;",
          "@forward 'module' namespace prefix;",
          "@forward 'module' with prefix;",
          "@forward 'module' as *;",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is the purpose of the `list.slash()` function in Sass?",
        options: [
          "Joins lists with a slash separator",
          "Splits a list",
          "Merges two lists",
          "Removes an item from a list",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "How do you integrate Sass with a CSS-in-JS workflow?",
        options: [
          "Compile Sass to CSS and import in JS",
          "Use Sass directly in JS",
          "Convert Sass to JavaScript",
          "Use `@extend` in JS",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "What is the benefit of using `meta.call()` over direct function invocation?",
        options: [
          "Allows dynamic function calls",
          "Improves performance",
          "Simplifies syntax",
          "Merges maps",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "How do you handle browser-specific hacks in Sass?",
        options: [
          "Use mixins with conditional prefixes",
          "Use `@hack` directive",
          "Use `browser()` function",
          "Use `@extend` for hacks",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What does the `string.quote()` function do in Sass?",
        options: [
          "Wraps a string in quotes",
          "Removes quotes from a string",
          "Converts a string to uppercase",
          "Splits a string",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "How do you create a reusable breakpoint system in Sass?",
        options: [
          "Use a map and mixin for breakpoints",
          "Use `@extend` for breakpoints",
          "Use `breakpoint()` function",
          "Use lists for breakpoints",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is the purpose of the `math.unit()` function in Sass?",
        options: [
          "Extracts the unit of a number",
          "Converts units",
          "Rounds a number",
          "Merges units",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "How do you avoid selector bloat when using `@extend` in large projects?",
        options: [
          "Use placeholder selectors and limit `@extend` usage",
          "Use `@import` instead",
          "Use variables for selectors",
          "Use `@use` for selectors",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What is the benefit of using the Sass module system for large-scale projects?",
        options: [
          "Encourages encapsulation and reduces naming conflicts",
          "Increases compilation speed",
          "Simplifies CSS output",
          "Eliminates variables",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Bootstrap Beginner
  {
    id: "bootstrap-beginner",
    technology: "bootstrap",
    difficulty: "beginner",
    questions: [
      {
        id: 1,
        question: "What is Bootstrap primarily used for?",
        options: [
          "Server-side scripting",
          "Frontend framework for responsive design",
          "Database management",
          "Backend API development",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question:
          "Which class is used to create a responsive container in Bootstrap?",
        options: ["container", "box", "wrapper", "container-fluid"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question:
          "How many columns does Bootstrap's grid system use by default?",
        options: ["6", "8", "10", "12"],
        correctAnswer: 3,
      },
      {
        id: 4,
        question: "Which Bootstrap class is used to create a primary button?",
        options: ["btn-primary", "button-primary", "btn-blue", "primary-btn"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "What is the correct way to include Bootstrap CSS in an HTML file?",
        options: [
          "link-bootstrap",
          "bootstrap.css",
          "bootstrap.min.css",
          '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">',
        ],
        correctAnswer: 3,
      },
      {
        id: 6,
        question: "Which class is used to make text bold in Bootstrap?",
        options: ["text-bold", "font-weight-bold", "bold", "text-strong"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "What does the `col-md-6` class mean in Bootstrap?",
        options: [
          "6 columns on mobile devices",
          "6 columns on medium and larger screens",
          "6 rows on medium screens",
          "6 pixels width",
        ],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Which Bootstrap class creates a responsive navbar?",
        options: ["navbar", "nav-bar", "navigation", "menu"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "Which class is used to center an element horizontally in Bootstrap?",
        options: ["center", "mx-auto", "align-center", "text-center"],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "What is the purpose of the `row` class in Bootstrap?",
        options: [
          "To create a horizontal line",
          "To group columns in the grid system",
          "To add padding",
          "To align text",
        ],
        correctAnswer: 1,
      },
      {
        id: 11,
        question: "Which Bootstrap class is used to create a card component?",
        options: ["card", "box", "panel", "container-card"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What does the `d-none` class do in Bootstrap?",
        options: [
          "Displays an element",
          "Hides an element",
          "Centers an element",
          "Makes text bold",
        ],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "Which class is used to create a success alert in Bootstrap?",
        options: [
          "alert-success",
          "alert-green",
          "success-alert",
          "alert-primary",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "How do you make an image responsive in Bootstrap?",
        options: [
          "img-responsive",
          "img-fluid",
          "image-responsive",
          "img-full",
        ],
        correctAnswer: 1,
      },
      {
        id: 15,
        question:
          "Which class is used to add margin to all sides of an element?",
        options: ["m-3", "margin-all", "p-3", "spacing-3"],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What is the purpose of the `btn` class in Bootstrap?",
        options: [
          "To style buttons",
          "To create a badge",
          "To align text",
          "To add a border",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "Which class is used to create a large button in Bootstrap?",
        options: ["btn-lg", "btn-large", "large-btn", "btn-xl"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What does the `col` class without a size specifier do?",
        options: [
          "Takes up 1 column",
          "Takes up remaining space equally",
          "Centers the column",
          "Hides the column",
        ],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "Which class is used to create a badge in Bootstrap?",
        options: ["badge", "tag", "label", "marker"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "What is the purpose of the `container-fluid` class?",
        options: [
          "Creates a fixed-width container",
          "Creates a full-width container",
          "Centers text",
          "Adds padding",
        ],
        correctAnswer: 1,
      },
      {
        id: 21,
        question: "Which class is used to create a dropdown menu in Bootstrap?",
        options: ["dropdown", "menu", "drop-menu", "select"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What does the `text-primary` class do in Bootstrap?",
        options: [
          "Sets text to bold",
          "Sets text to the primary color",
          "Centers text",
          "Underlines text",
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question:
          "Which class is used to create a rounded button in Bootstrap?",
        options: ["btn-round", "btn-rounded", "rounded", "btn-circle"],
        correctAnswer: 2,
      },
      {
        id: 24,
        question:
          "What is the purpose of the `form-control` class in Bootstrap?",
        options: [
          "To style form inputs",
          "To align forms",
          "To create buttons",
          "To add margins",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "Which class is used to create a responsive table in Bootstrap?",
        options: [
          "table",
          "table-responsive",
          "responsive-table",
          "table-fluid",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "What does the `p-3` class do in Bootstrap?",
        options: [
          "Adds padding to all sides",
          "Adds margin to all sides",
          "Sets font size",
          "Centers an element",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "Which class is used to create a modal in Bootstrap?",
        options: ["modal", "popup", "dialog", "window"],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is the purpose of the `bg-primary` class in Bootstrap?",
        options: [
          "Sets the background to transparent",
          "Sets the background to the primary color",
          "Adds a border",
          "Centers the element",
        ],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "Which class is used to create a list group in Bootstrap?",
        options: ["list-group", "group-list", "list", "item-group"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What does the `align-items-center` class do in a flex container?",
        options: [
          "Aligns items vertically in the center",
          "Aligns items horizontally in the center",
          "Stretches items to fill the container",
          "Spaces items evenly",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Bootstrap Intermediate
  {
    id: "bootstrap-intermediate",
    technology: "bootstrap",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question:
          "Which Bootstrap class is used to make a column span 6 columns on medium screens and 12 columns on small screens?",
        options: [
          "col-md-6 col-sm-12",
          "col-6 col-12",
          "col-md-6 col-12",
          "col-sm-6 col-md-12",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "What does the `order-md-2` class do in Bootstrap?",
        options: [
          "Changes the order of a flex item to 2 on medium and larger screens",
          "Sets the margin to 2 on medium screens",
          "Aligns items to the second position",
          "Changes the column width to 2",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question:
          "Which class is used to create a sticky-top navbar in Bootstrap?",
        options: ["sticky-top", "fixed-top", "navbar-sticky", "top-sticky"],
        correctAnswer: 0,
      },
      {
        id: 4,
        question:
          "How do you disable a button in Bootstrap while maintaining its styling?",
        options: [
          "Add the `disabled` attribute",
          "Use `btn-disabled` class",
          "Set `opacity: 0.5`",
          "Use `btn-block` class",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "Which class is used to align a navbar's content to the right?",
        options: ["ms-auto", "me-auto", "ml-auto", "justify-content-end"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "What is the purpose of the `d-md-none` class in Bootstrap?",
        options: [
          "Hides an element on medium and larger screens",
          "Displays an element only on medium screens",
          "Hides an element on small screens",
          "Centers an element on medium screens",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question:
          "Which class is used to create a card with a header in Bootstrap?",
        options: ["card-header", "header-card", "card-top", "card-title"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "How do you create a responsive column offset in Bootstrap?",
        options: [
          "Use `offset-md-3`",
          "Use `col-offset-3`",
          "Use `margin-md-3`",
          "Use `push-md-3`",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "Which class is used to create a modal that fades in when opened?",
        options: ["fade", "modal-fade", "animate-modal", "modal-show"],
        correctAnswer: 0,
      },
      {
        id: 10,
        question:
          "What does the `justify-content-between` class do in a flex container?",
        options: [
          "Aligns items with space between them",
          "Centers items horizontally",
          "Aligns items to the start",
          "Stretches items to fill the container",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question:
          "Which class is used to create a collapsible element in Bootstrap?",
        options: ["collapse", "accordion", "fold", "toggle"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question:
          "What is the purpose of the `data-bs-toggle` attribute in Bootstrap?",
        options: [
          "To style buttons",
          "To trigger JavaScript behaviors like modals or collapses",
          "To set the background color",
          "To align text",
        ],
        correctAnswer: 1,
      },
      {
        id: 13,
        question:
          "Which class is used to create a breadcrumb navigation in Bootstrap?",
        options: ["breadcrumb", "nav-breadcrumb", "path", "crumb"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "How do you make a table row highlighted as active in Bootstrap?",
        options: ["active", "table-active", "row-active", "highlight"],
        correctAnswer: 1,
      },
      {
        id: 15,
        question:
          "Which class is used to create a vertically centered modal in Bootstrap?",
        options: [
          "modal-dialog-centered",
          "modal-center",
          "center-modal",
          "modal-vcenter",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What does the `flex-wrap` class do in Bootstrap?",
        options: [
          "Wraps flex items to a new line if they overflow",
          "Aligns flex items vertically",
          "Stretches flex items",
          "Centers flex items",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "Which class is used to create a progress bar in Bootstrap?",
        options: ["progress-bar", "bar", "progress", "meter"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is the purpose of the `shadow` class in Bootstrap?",
        options: [
          "Adds a border to an element",
          "Adds a box shadow to an element",
          "Darkens the background",
          "Hides an element",
        ],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "Which class is used to create a striped table in Bootstrap?",
        options: ["table-striped", "striped", "table-pattern", "row-striped"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "What does the `align-self-center` class do in a flex container?",
        options: [
          "Aligns a flex item to the center vertically",
          "Aligns all items to the center",
          "Stretches the item to fill the container",
          "Spaces items evenly",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "Which class is used to create a tooltip in Bootstrap?",
        options: ["tooltip", "popover", "hint", "info"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "What is the purpose of the `data-bs-target` attribute in Bootstrap?",
        options: [
          "To set the background color",
          "To specify the target element for a JavaScript component",
          "To align text",
          "To set the font size",
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "Which class is used to create a carousel in Bootstrap?",
        options: ["carousel", "slider", "gallery", "slideshow"],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "What does the `text-truncate` class do in Bootstrap?",
        options: [
          "Truncates text with an ellipsis if it overflows",
          "Aligns text to the left",
          "Makes text bold",
          "Underlines text",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "Which class is used to create a button group in Bootstrap?",
        options: ["btn-group", "button-group", "group-btn", "btn-cluster"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What is the purpose of the `ratio` class in Bootstrap?",
        options: [
          "To set the font size",
          "To maintain aspect ratios for embedded content",
          "To align items",
          "To add margins",
        ],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "Which class is used to create an accordion in Bootstrap?",
        options: ["accordion", "collapse-group", "fold", "toggle-group"],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What does the `border-0` class do in Bootstrap?",
        options: [
          "Removes all borders from an element",
          "Adds a border to an element",
          "Centers an element",
          "Hides an element",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "Which class is used to create a pagination component in Bootstrap?",
        options: ["pagination", "pages", "nav-pages", "page-group"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "What is the purpose of the `form-check` class in Bootstrap?",
        options: [
          "To style checkboxes and radio buttons",
          "To align form inputs",
          "To create a form button",
          "To add padding to forms",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Bootstrap Advanced
  {
    id: "bootstrap-advanced",
    technology: "bootstrap",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question:
          "How do you create a custom breakpoint in Bootstrap 5 by modifying the Sass variables?",
        options: [
          "Override `$grid-breakpoints` in `_variables.scss`",
          "Add a new class like `col-custom-6`",
          "Modify `bootstrap.css` directly",
          "Use `media-breakpoint-up` in CSS",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question:
          "Which Bootstrap utility class is used to apply a CSS `mix-blend-mode` property?",
        options: [
          "blend-mode",
          "mix-blend-mode",
          "blend",
          "No such utility exists",
        ],
        correctAnswer: 3,
      },
      {
        id: 3,
        question:
          "What is the purpose of the `data-bs-config` attribute in Bootstrap’s JavaScript components?",
        options: [
          "To style components",
          "To pass configuration options to JavaScript plugins",
          "To set accessibility attributes",
          "To trigger animations",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question:
          "How do you ensure a Bootstrap modal is accessible for screen readers?",
        options: [
          "Add `aria-labelledby` and `aria-describedby` attributes",
          'Use `role="modal"` only',
          'Set `tabindex="0"` on the modal',
          'Add `data-bs-accessible="true"`',
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "Which Sass variable controls the primary color in Bootstrap 5?",
        options: [
          "$primary",
          "$theme-colors",
          "$color-primary",
          "$brand-primary",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question:
          "What does the `position-absolute top-0 start-0` class combination do in Bootstrap?",
        options: [
          "Positions an element at the top-left corner",
          "Centers an element",
          "Aligns text to the left",
          "Sets the element to full width",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question:
          "How do you customize the number of grid columns in Bootstrap 5?",
        options: [
          "Override `$grid-columns` in Sass",
          "Add `col-custom` classes",
          "Modify `bootstrap-grid.css`",
          "Use `data-bs-columns` attribute",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question:
          "Which class is used to create a responsive aspect ratio of 16:9 in Bootstrap?",
        options: ["ratio-16x9", "aspect-16-9", "ratio-16-9", "ratio-16by9"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "What is the purpose of the `visually-hidden` class in Bootstrap?",
        options: [
          "Hides content visually but keeps it accessible to screen readers",
          "Completely hides an element",
          "Reduces opacity",
          "Aligns text",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question:
          "How do you trigger a Bootstrap tooltip programmatically using JavaScript?",
        options: [
          "Use `bootstrap.Tooltip.getOrCreateInstance(element).show()`",
          "Call `$(element).tooltip('show')`",
          'Use `data-bs-toggle="tooltip"`',
          "Add `tooltip-show` class",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question:
          "Which Bootstrap class is used to create a responsive gutters with no spacing on smaller screens?",
        options: ["g-0 g-md-3", "no-gutters", "gutter-0", "gx-0 gy-md-3"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question:
          "What is the purpose of the `data-bs-spy` attribute in Bootstrap?",
        options: [
          "To enable scrollspy for navigation",
          "To trigger modals",
          "To style buttons",
          "To set breakpoints",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "How do you override Bootstrap’s default button styles using Sass?",
        options: [
          "Modify `$btn` variables and recompile",
          "Add `!important` to CSS rules",
          "Use `btn-custom` class",
          "Edit `bootstrap.min.css`",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "Which class is used to create a card with a stretched link in Bootstrap?",
        options: ["stretched-link", "card-link", "link-stretch", "full-link"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What does the `overflow-auto` class do in Bootstrap?",
        options: [
          "Adds scrollbars when content overflows",
          "Hides overflowing content",
          "Centers content",
          "Stretches content",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question:
          "How do you create a custom Bootstrap theme with a new color?",
        options: [
          "Add a new color to `$theme-colors` in Sass",
          "Use `bg-custom` class",
          "Modify `bootstrap.css`",
          "Add `data-bs-theme` attribute",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question:
          "Which class is used to create a responsive navbar that collapses on small screens?",
        options: [
          "navbar-expand-lg",
          "navbar-collapse",
          "nav-responsive",
          "navbar-toggle",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "What is the purpose of the `data-bs-ride` attribute in a Bootstrap carousel?",
        options: [
          "To enable automatic cycling",
          "To set the slide duration",
          "To align slides",
          "To add captions",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question:
          "Which class is used to create a form with inline inputs in Bootstrap?",
        options: [
          "form-inline",
          "inline-form",
          "form-row",
          "form-group-inline",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "How do you customize the Bootstrap modal’s backdrop opacity?",
        options: [
          "Override `$modal-backdrop-opacity` in Sass",
          "Use `backdrop-opacity` class",
          "Add `data-bs-backdrop` attribute",
          "Modify `modal.css`",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question:
          "Which class is used to create a dropdown menu with a divider in Bootstrap?",
        options: [
          "dropdown-divider",
          "menu-divider",
          "dropdown-sep",
          "divider",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "What is the purpose of the `data-bs-interval` attribute in a Bootstrap carousel?",
        options: [
          "To set the duration between slides",
          "To align slides",
          "To enable looping",
          "To add captions",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question:
          "Which class is used to create a responsive table with hover effects in Bootstrap?",
        options: [
          "table-hover",
          "hover-table",
          "table-active",
          "table-responsive-hover",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "How do you disable Bootstrap’s default focus ring for accessibility?",
        options: [
          "Override `$focus-ring` variables in Sass",
          "Use `no-focus` class",
          'Set `tabindex="-1"`',
          'Add `data-bs-focus="false"`',
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "Which class is used to create a badge with a pill shape in Bootstrap?",
        options: ["rounded-pill", "badge-pill", "pill", "badge-rounded"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "What is the purpose of the `data-bs-placement` attribute in Bootstrap tooltips?",
        options: [
          "To set the tooltip’s position",
          "To enable animation",
          "To set the tooltip’s content",
          "To align the tooltip",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question:
          "Which class is used to create a list group with flush styling in Bootstrap?",
        options: [
          "list-group-flush",
          "flush-list",
          "list-flush",
          "group-flush",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "How do you enable dark mode in Bootstrap 5?",
        options: [
          'Add `data-bs-theme="dark"` to the root element',
          "Use `dark-mode` class",
          "Modify `$theme` in Sass",
          'Add `data-bs-dark="true"`',
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "Which class is used to create a responsive image with a thumbnail style in Bootstrap?",
        options: [
          "img-thumbnail",
          "thumbnail",
          "img-responsive",
          "image-thumb",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What is the purpose of the `data-bs-parent` attribute in a Bootstrap accordion?",
        options: [
          "To specify the parent accordion element",
          "To set the animation speed",
          "To align items",
          "To add padding",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // React Beginner
  {
    id: "react-beginner",
    technology: "react",
    difficulty: "beginner",
    questions: [
      {
        id: 1,
        question: "What is React?",
        options: [
          "A programming language",
          "A JavaScript library for building user interfaces",
          "A database management system",
          "A web server framework",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Which company developed React?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "What is JSX in React?",
        options: [
          "A JavaScript extension that allows HTML-like syntax",
          "A CSS framework",
          "A database query language",
          "A testing framework",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "What is a React component?",
        options: [
          "A reusable piece of UI",
          "A database table",
          "A CSS class",
          "A JavaScript function",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "How do you create a functional component in React?",
        options: [
          "function MyComponent() { return <div>Hello</div>; }",
          "class MyComponent extends React.Component",
          "const MyComponent = () => <div>Hello</div>;",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 6,
        question:
          "What is the purpose of the render() method in a class component?",
        options: [
          "To handle user events",
          "To return the JSX that should be displayed",
          "To initialize the component",
          "To clean up resources",
        ],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "What is the correct way to write a conditional in JSX?",
        options: [
          "{if (condition) { return <div>Hello</div>; }}",
          "{condition && <div>Hello</div>}",
          "if (condition) return <div>Hello</div>;",
          "All of the above",
        ],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "What is the purpose of props in React?",
        options: [
          "To store component state",
          "To pass data from parent to child components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "How do you access props in a functional component?",
        options: ["this.props", "props", "this.state", "state"],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "What is state in React?",
        options: [
          "A way to store data that can change over time",
          "A CSS property",
          "A JavaScript object",
          "A database table",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "How do you update state in a functional component?",
        options: [
          "this.setState()",
          "useState() hook",
          "setState()",
          "updateState()",
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question: "What is the correct way to use the useState hook?",
        options: [
          "const [state, setState] = useState(initialValue);",
          "const state = useState(initialValue);",
          "useState(state, setState);",
          "const [state] = useState(initialValue);",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is the purpose of the useEffect hook?",
        options: [
          "To handle user events",
          "To perform side effects in functional components",
          "To create new components",
          "To style components",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "When does useEffect run by default?",
        options: [
          "Only when the component mounts",
          "After every render",
          "Only when the component unmounts",
          "Never",
        ],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "What is the purpose of the key prop in React lists?",
        options: [
          "To style list items",
          "To help React identify which items have changed",
          "To add event handlers",
          "To set the order of items",
        ],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "What is the correct way to handle events in React?",
        options: [
          "onclick='handleClick()'",
          "onClick={handleClick}",
          "onClick='handleClick'",
          "onclick={handleClick}",
        ],
        correctAnswer: 1,
      },
      {
        id: 17,
        question: "What is the purpose of the virtual DOM in React?",
        options: [
          "To improve performance by minimizing DOM updates",
          "To create animations",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "What is the difference between controlled and uncontrolled components?",
        options: [
          "Controlled components use state, uncontrolled use refs",
          "Controlled components are faster",
          "Uncontrolled components are more secure",
          "There is no difference",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is the purpose of the ref in React?",
        options: [
          "To reference DOM elements directly",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "How do you create a ref in a functional component?",
        options: ["useRef()", "createRef()", "new Ref()", "ref()"],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is the purpose of React.Fragment?",
        options: [
          "To group multiple elements without adding extra DOM nodes",
          "To create animations",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is the shorthand syntax for React.Fragment?",
        options: [
          "<>...</>",
          "<Fragment>...</Fragment>",
          "<div>...</div>",
          "<span>...</span>",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is the purpose of the children prop?",
        options: [
          "To pass components as data to other components",
          "To create child components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "What is the correct way to pass multiple props to a component?",
        options: [
          "props={name, age, city}",
          "name='John' age={25} city='New York'",
          "props={{name: 'John', age: 25, city: 'New York'}}",
          "All of the above",
        ],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "What is the purpose of the defaultProps?",
        options: [
          "To set default values for props",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What is the purpose of PropTypes?",
        options: [
          "To validate the types of props",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is the purpose of the React.memo() function?",
        options: [
          "To memoize components and prevent unnecessary re-renders",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is the purpose of the useCallback hook?",
        options: [
          "To memoize functions and prevent unnecessary re-renders",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is the purpose of the useMemo hook?",
        options: [
          "To memoize values and prevent unnecessary calculations",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "What is the purpose of the useContext hook?",
        options: [
          "To consume context values in functional components",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // React Intermediate
  {
    id: "react-intermediate",
    technology: "react",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question: "What is the difference between useMemo and useCallback?",
        options: [
          "useMemo memoizes values, useCallback memoizes functions",
          "useMemo memoizes functions, useCallback memoizes values",
          "There is no difference",
          "useMemo is for class components, useCallback is for functional components",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "What is the purpose of React.lazy()?",
        options: [
          "To create lazy components",
          "To implement code splitting and lazy loading",
          "To optimize performance",
          "To handle errors",
        ],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "What is the Error Boundary pattern in React?",
        options: [
          "A way to catch JavaScript errors anywhere in the component tree",
          "A way to handle network errors",
          "A way to validate props",
          "A way to optimize performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "What is the purpose of React.memo()?",
        options: [
          "To memoize components and prevent unnecessary re-renders",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "What is the difference between useEffect and useLayoutEffect?",
        options: [
          "useEffect runs after paint, useLayoutEffect runs before paint",
          "useEffect runs before paint, useLayoutEffect runs after paint",
          "There is no difference",
          "useEffect is for functional components, useLayoutEffect is for class components",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "What is the purpose of the useReducer hook?",
        options: [
          "To manage complex state logic",
          "To handle user events",
          "To create new components",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is the Context API used for?",
        options: [
          "To share data between components without prop drilling",
          "To handle user events",
          "To create new components",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "What is the purpose of React.forwardRef()?",
        options: [
          "To forward refs to child components",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "What is the difference between shallow and deep comparison in React?",
        options: [
          "Shallow compares references, deep compares values",
          "Shallow compares values, deep compares references",
          "There is no difference",
          "Shallow is for objects, deep is for arrays",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What is the purpose of the useImperativeHandle hook?",
        options: [
          "To customize the instance value that is exposed to parent components",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is the purpose of React.PureComponent?",
        options: [
          "To prevent unnecessary re-renders with shallow comparison",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What is the purpose of the useDebugValue hook?",
        options: [
          "To display a label for custom hooks in React DevTools",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is the purpose of React.Fragment?",
        options: [
          "To group multiple elements without adding extra DOM nodes",
          "To create animations",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "What is the purpose of the useId hook?",
        options: [
          "To generate unique IDs for accessibility attributes",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is the purpose of React.StrictMode?",
        options: [
          "To highlight potential problems in the application",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What is the purpose of the useTransition hook?",
        options: [
          "To mark state updates as non-urgent transitions",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is the purpose of the useDeferredValue hook?",
        options: [
          "To defer updating a value until after other updates",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is the purpose of React.Suspense?",
        options: [
          "To show a fallback while components are loading",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is the purpose of the useSyncExternalStore hook?",
        options: [
          "To subscribe to external data sources",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "What is the purpose of the useInsertionEffect hook?",
        options: [
          "To inject styles into the DOM before layout effects",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is the purpose of React.Portal?",
        options: [
          "To render children into a DOM node outside the parent component",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is the purpose of the useRef hook?",
        options: [
          "To persist values between renders without causing re-renders",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is the purpose of React.memo with custom comparison?",
        options: [
          "To provide custom comparison logic for memoization",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "What is the purpose of the useCallback hook with dependencies?",
        options: [
          "To memoize functions and recreate them when dependencies change",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is the purpose of the useMemo hook with dependencies?",
        options: [
          "To memoize values and recalculate them when dependencies change",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What is the purpose of React.cloneElement?",
        options: [
          "To clone and modify React elements",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is the purpose of React.isValidElement?",
        options: [
          "To check if a value is a valid React element",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is the purpose of React.Children.map?",
        options: [
          "To iterate over React children and transform them",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is the purpose of React.Children.count?",
        options: [
          "To count the number of children in a React component",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "What is the purpose of React.Children.toArray?",
        options: [
          "To convert React children to a flat array",
          "To create new components",
          "To handle user events",
          "To style components",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // React Advanced
  {
    id: "react-advanced",
    technology: "react",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question: "What is the purpose of React Concurrent Features?",
        options: [
          "To enable concurrent rendering and improve user experience",
          "To handle multiple API calls simultaneously",
          "To create parallel components",
          "To optimize bundle size",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question:
          "What is the difference between React 18's automatic batching and manual batching?",
        options: [
          "Automatic batching works in all scenarios, manual batching requires flushSync",
          "Manual batching is faster than automatic batching",
          "Automatic batching only works in event handlers",
          "There is no difference",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "What is the purpose of the useSyncExternalStore hook?",
        options: [
          "To subscribe to external data sources with concurrent features support",
          "To create synchronous components",
          "To handle external API calls",
          "To optimize performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "What is the purpose of the useInsertionEffect hook?",
        options: [
          "To inject styles into the DOM before layout effects fire",
          "To insert new components into the DOM",
          "To handle CSS-in-JS libraries",
          "To optimize rendering",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the purpose of React Server Components?",
        options: [
          "To render components on the server and reduce client-side JavaScript",
          "To create server-side only components",
          "To handle server-side routing",
          "To optimize API calls",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "What is the purpose of the useTransition hook in React 18?",
        options: [
          "To mark state updates as non-urgent and enable concurrent rendering",
          "To handle page transitions",
          "To create smooth animations",
          "To optimize performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is the purpose of the useDeferredValue hook?",
        options: [
          "To defer updating a value until after other updates have completed",
          "To delay component rendering",
          "To handle slow API responses",
          "To create loading states",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "What is the purpose of React.Suspense for data fetching?",
        options: [
          "To show fallback UI while data is being fetched",
          "To handle loading states",
          "To create skeleton screens",
          "To optimize network requests",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is the purpose of the startTransition API?",
        options: [
          "To mark updates as non-urgent transitions",
          "To start page transitions",
          "To handle route changes",
          "To create animations",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What is the purpose of React's new root API (createRoot)?",
        options: [
          "To enable concurrent features in React 18",
          "To create multiple root elements",
          "To handle routing",
          "To optimize performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is the purpose of the flushSync API?",
        options: [
          "To force synchronous updates when needed",
          "To flush the event loop",
          "To clear the component tree",
          "To optimize rendering",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What is the purpose of React's new automatic batching?",
        options: [
          "To automatically batch state updates for better performance",
          "To handle multiple API calls",
          "To create batch operations",
          "To optimize memory usage",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is the purpose of the useId hook?",
        options: [
          "To generate unique IDs for accessibility attributes",
          "To create unique component keys",
          "To handle form validation",
          "To optimize rendering",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "What is the purpose of React's new concurrent rendering?",
        options: [
          "To enable rendering to be interrupted and resumed",
          "To create parallel components",
          "To handle multiple threads",
          "To optimize performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is the purpose of the useOpaqueIdentifier hook?",
        options: [
          "To create stable identifiers for React elements",
          "To handle form validation",
          "To create unique keys",
          "To optimize rendering",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What is the purpose of React's new streaming SSR?",
        options: [
          "To stream server-rendered content to the client",
          "To handle real-time updates",
          "To create live data feeds",
          "To optimize network requests",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is the purpose of the useMutableSource hook?",
        options: [
          "To subscribe to external data sources with concurrent features",
          "To create mutable state",
          "To handle external stores",
          "To optimize performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is the purpose of React's new selective hydration?",
        options: [
          "To hydrate components as they become interactive",
          "To handle partial page loads",
          "To create progressive loading",
          "To optimize performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is the purpose of the useCache hook?",
        options: [
          "To cache expensive computations and data",
          "To handle browser caching",
          "To create memory caches",
          "To optimize performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "What is the purpose of React's new concurrent features in Suspense?",
        options: [
          "To enable concurrent rendering with Suspense boundaries",
          "To handle multiple loading states",
          "To create parallel loading",
          "To optimize performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is the purpose of the useOptimistic hook?",
        options: [
          "To show optimistic updates before server confirmation",
          "To handle optimistic UI updates",
          "To create instant feedback",
          "To optimize user experience",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "What is the purpose of React's new concurrent features in Error Boundaries?",
        options: [
          "To handle errors in concurrent rendering",
          "To create error recovery",
          "To handle partial failures",
          "To optimize error handling",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is the purpose of the useActionState hook?",
        options: [
          "To manage state for server actions",
          "To handle form submissions",
          "To create action handlers",
          "To optimize performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "What is the purpose of React's new concurrent features in Context?",
        options: [
          "To enable concurrent rendering with Context providers",
          "To handle multiple contexts",
          "To create parallel contexts",
          "To optimize performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is the purpose of the useFormStatus hook?",
        options: [
          "To track the status of form submissions",
          "To handle form validation",
          "To create form handlers",
          "To optimize form performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "What is the purpose of React's new concurrent features in Refs?",
        options: [
          "To handle refs in concurrent rendering",
          "To create stable refs",
          "To handle multiple refs",
          "To optimize ref performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is the purpose of the useFormState hook?",
        options: [
          "To manage form state with server actions",
          "To handle form validation",
          "To create form handlers",
          "To optimize form performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question:
          "What is the purpose of React's new concurrent features in Portals?",
        options: [
          "To handle portals in concurrent rendering",
          "To create multiple portals",
          "To handle portal updates",
          "To optimize portal performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is the purpose of the use hook?",
        options: [
          "To consume promises and context in components",
          "To create custom hooks",
          "To handle async operations",
          "To optimize performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What is the purpose of React's new concurrent features in Memoization?",
        options: [
          "To handle memoization in concurrent rendering",
          "To create stable memoization",
          "To handle multiple memoized values",
          "To optimize memoization performance",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Angular Beginner
  {
    id: "angular-beginner",
    technology: "angular",
    difficulty: "beginner",
    questions: [
      {
        id: 1,
        question: "What is Angular?",
        options: [
          "A JavaScript library for building user interfaces",
          "A TypeScript-based web application framework",
          "A CSS framework for styling",
          "A database management system",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Which command is used to create a new Angular project?",
        options: [
          "ng new project-name",
          "angular create project-name",
          "npm create angular project-name",
          "create-angular project-name",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "What is a component in Angular?",
        options: [
          "A service that handles data",
          "A building block of an Angular application with a template and logic",
          "A module that organizes code",
          "A directive for DOM manipulation",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Which decorator is used to define a component in Angular?",
        options: ["@Component", "@Service", "@Injectable", "@Directive"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the purpose of Angular CLI?",
        options: [
          "To manage CSS styles",
          "To provide command-line tools for Angular development",
          "To handle database operations",
          "To manage user authentication",
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Which file contains the main application module in Angular?",
        options: ["main.ts", "app.component.ts", "app.module.ts", "index.html"],
        correctAnswer: 2,
      },
      {
        id: 7,
        question: "What is data binding in Angular?",
        options: [
          "A way to connect data between component and template",
          "A method to store data in localStorage",
          "A technique for database queries",
          "A way to compress data",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question:
          "Which syntax is used for property binding in Angular templates?",
        options: ["{{ }}", "[ ]", "( )", "*ngFor"],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "What is the purpose of *ngFor directive?",
        options: [
          "To create conditional rendering",
          "To loop through arrays and create elements",
          "To handle form validation",
          "To manage routing",
        ],
        correctAnswer: 1,
      },
      {
        id: 10,
        question:
          "Which directive is used for conditional rendering in Angular?",
        options: ["*ngFor", "*ngIf", "*ngSwitch", "*ngClass"],
        correctAnswer: 1,
      },
      {
        id: 11,
        question: "What is a service in Angular?",
        options: [
          "A component that displays data",
          "A class that provides functionality across components",
          "A template for HTML rendering",
          "A module for routing",
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question:
          "Which decorator is used to make a class injectable as a service?",
        options: ["@Component", "@Injectable", "@Directive", "@Pipe"],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "What is dependency injection in Angular?",
        options: [
          "A way to import modules",
          "A design pattern where dependencies are provided to a class",
          "A method to export components",
          "A technique for data binding",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "Which method is used to navigate between routes in Angular?",
        options: ["navigate()", "goTo()", "router.navigate()", "navigateTo()"],
        correctAnswer: 2,
      },
      {
        id: 15,
        question: "What is the purpose of Angular Router?",
        options: [
          "To manage component styles",
          "To handle navigation between different views",
          "To store application data",
          "To manage form validation",
        ],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "Which file is used to define routes in Angular?",
        options: [
          "app.component.ts",
          "app.routing.ts",
          "main.ts",
          "index.html",
        ],
        correctAnswer: 1,
      },
      {
        id: 17,
        question: "What is the purpose of Angular Forms?",
        options: [
          "To style components",
          "To handle user input and form validation",
          "To manage routing",
          "To store data",
        ],
        correctAnswer: 1,
      },
      {
        id: 18,
        question: "Which module needs to be imported for reactive forms?",
        options: [
          "FormsModule",
          "ReactiveFormsModule",
          "HttpClientModule",
          "RouterModule",
        ],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "What is the purpose of Angular Pipes?",
        options: [
          "To create components",
          "To transform data in templates",
          "To handle routing",
          "To manage services",
        ],
        correctAnswer: 1,
      },
      {
        id: 20,
        question: "Which pipe is used to format dates in Angular?",
        options: ["date", "currency", "uppercase", "json"],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is the purpose of Angular Modules?",
        options: [
          "To create components",
          "To organize and bundle related functionality",
          "To handle routing",
          "To manage styles",
        ],
        correctAnswer: 1,
      },
      {
        id: 22,
        question: "Which decorator is used to define a module in Angular?",
        options: ["@Component", "@NgModule", "@Injectable", "@Directive"],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "What is the purpose of Angular Directives?",
        options: [
          "To create services",
          "To extend HTML with custom behavior",
          "To manage routing",
          "To handle data binding",
        ],
        correctAnswer: 1,
      },
      {
        id: 24,
        question: "Which directive is used to apply CSS classes conditionally?",
        options: ["*ngIf", "*ngFor", "*ngClass", "*ngSwitch"],
        correctAnswer: 2,
      },
      {
        id: 25,
        question: "What is the purpose of Angular HttpClient?",
        options: [
          "To manage routing",
          "To make HTTP requests to APIs",
          "To handle form validation",
          "To create components",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "Which module needs to be imported to use HttpClient?",
        options: [
          "FormsModule",
          "HttpClientModule",
          "RouterModule",
          "CommonModule",
        ],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "What is the purpose of Angular Lifecycle Hooks?",
        options: [
          "To manage routing",
          "To execute code at specific moments in component lifecycle",
          "To handle form validation",
          "To create services",
        ],
        correctAnswer: 1,
      },
      {
        id: 28,
        question:
          "Which lifecycle hook is called after component initialization?",
        options: ["ngOnInit", "ngOnDestroy", "ngOnChanges", "ngAfterViewInit"],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is the purpose of Angular Guards?",
        options: [
          "To style components",
          "To control access to routes",
          "To handle form validation",
          "To manage data binding",
        ],
        correctAnswer: 1,
      },
      {
        id: 30,
        question: "Which interface is implemented by route guards?",
        options: [
          "CanActivate",
          "CanDeactivate",
          "CanLoad",
          "All of the above",
        ],
        correctAnswer: 3,
      },
    ],
  },

  // Angular Intermediate
  {
    id: "angular-intermediate",
    technology: "angular",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question:
          "What is the difference between Template-driven and Reactive forms in Angular?",
        options: [
          "Template-driven forms are synchronous, Reactive forms are asynchronous",
          "Template-driven forms use two-way data binding, Reactive forms use explicit form control management",
          "Template-driven forms are faster, Reactive forms are slower",
          "There is no difference between them",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "What is the purpose of Angular Resolvers?",
        options: [
          "To resolve component dependencies",
          "To pre-fetch data before route activation",
          "To resolve template compilation errors",
          "To resolve service injection conflicts",
        ],
        correctAnswer: 1,
      },
      {
        id: 3,
        question:
          "What is the difference between ngOnInit and constructor in Angular?",
        options: [
          "ngOnInit is called before constructor",
          "Constructor is for dependency injection, ngOnInit is for initialization logic",
          "They are identical in functionality",
          "Constructor is deprecated in favor of ngOnInit",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "What is Angular Change Detection and how does it work?",
        options: [
          "A process that checks for changes in component data and updates the DOM",
          "A method to detect changes in external APIs",
          "A tool to detect changes in TypeScript files",
          "A process to detect changes in CSS styles",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is OnPush change detection strategy?",
        options: [
          "A strategy that pushes changes to the server",
          "A change detection strategy that only runs when input properties change or events are triggered",
          "A strategy that pushes data to child components",
          "A strategy that pushes changes to parent components",
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "What is the purpose of Angular Interceptors?",
        options: [
          "To intercept HTTP requests and responses for cross-cutting concerns",
          "To intercept user clicks on buttons",
          "To intercept form submissions",
          "To intercept route changes",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is Angular Lazy Loading?",
        options: [
          "Loading components slowly to improve performance",
          "Loading feature modules on-demand to reduce initial bundle size",
          "Loading data asynchronously",
          "Loading CSS styles dynamically",
        ],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "What is the purpose of Angular Guards and what types exist?",
        options: [
          "CanActivate, CanDeactivate, CanLoad, Resolve",
          "CanActivate, CanDeactivate, CanLoad",
          "CanActivate, CanDeactivate",
          "CanActivate only",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is Angular Dependency Injection and how does it work?",
        options: [
          "A pattern where dependencies are provided to a class through constructor parameters",
          "A method to inject CSS styles into components",
          "A way to inject HTML templates",
          "A pattern to inject data into services",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question:
          "What is the difference between @Injectable() and @Injectable({ providedIn: 'root' })?",
        options: [
          "No difference, they are identical",
          "@Injectable() creates a singleton, @Injectable({ providedIn: 'root' }) creates multiple instances",
          "@Injectable({ providedIn: 'root' }) creates a singleton, @Injectable() creates multiple instances",
          "@Injectable() is deprecated",
        ],
        correctAnswer: 2,
      },
      {
        id: 11,
        question: "What is Angular ViewChild and how is it used?",
        options: [
          "A decorator to access child components, directives, or DOM elements",
          "A service to manage child components",
          "A directive to create child views",
          "A pipe to transform child data",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What is the purpose of Angular ContentChild?",
        options: [
          "To access projected content from parent component",
          "To access child components",
          "To access DOM elements",
          "To access services",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is Angular Content Projection and how does it work?",
        options: [
          "A way to project content from parent component into child component using <ng-content>",
          "A way to project data from services",
          "A way to project styles from parent to child",
          "A way to project routes between components",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "What is the purpose of Angular Custom Directives?",
        options: [
          "To extend HTML with custom behavior and DOM manipulation",
          "To create custom components",
          "To create custom services",
          "To create custom pipes",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question:
          "What is the difference between Structural and Attribute directives?",
        options: [
          "Structural directives change DOM structure (*ngIf, *ngFor), Attribute directives change element appearance or behavior",
          "Structural directives are faster than Attribute directives",
          "Attribute directives are deprecated",
          "There is no difference",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What is Angular Custom Pipes and how are they created?",
        options: [
          "A way to transform data in templates using @Pipe decorator",
          "A way to create custom components",
          "A way to create custom services",
          "A way to create custom directives",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is the purpose of Angular FormArray?",
        options: [
          "To manage dynamic form controls in an array",
          "To create arrays in templates",
          "To manage arrays in services",
          "To create arrays in components",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is Angular FormBuilder and how is it used?",
        options: [
          "A service that provides methods to create form controls, groups, and arrays",
          "A directive to build forms",
          "A pipe to transform form data",
          "A component to display forms",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is the purpose of Angular AsyncPipe?",
        options: [
          "To handle asynchronous data streams and automatically subscribe/unsubscribe",
          "To create asynchronous services",
          "To handle asynchronous routing",
          "To create asynchronous components",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "What is Angular RxJS and how is it used?",
        options: [
          "A library for reactive programming using Observables",
          "A library for routing",
          "A library for forms",
          "A library for HTTP requests only",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is the difference between Observable and Promise?",
        options: [
          "Observables can emit multiple values over time, Promises emit a single value",
          "Promises are faster than Observables",
          "Observables are deprecated in favor of Promises",
          "There is no difference",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is Angular Subject and how is it used?",
        options: [
          "A special type of Observable that can multicast values to multiple subscribers",
          "A type of service",
          "A type of component",
          "A type of directive",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is the purpose of Angular BehaviorSubject?",
        options: [
          "A Subject that stores the last emitted value and provides it to new subscribers",
          "A Subject that behaves like a Promise",
          "A Subject that only emits once",
          "A Subject that emits errors",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "What is Angular State Management and what are common patterns?",
        options: [
          "Managing application state using services, NgRx, or Akita",
          "Managing component state only",
          "Managing route state only",
          "Managing form state only",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is NgRx and how does it work?",
        options: [
          "A state management library using Redux pattern with Actions, Reducers, and Store",
          "A routing library",
          "A form validation library",
          "A HTTP client library",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What is the purpose of Angular Effects in NgRx?",
        options: [
          "To handle side effects like HTTP requests in response to actions",
          "To create visual effects in components",
          "To handle form effects",
          "To create routing effects",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is Angular Selectors in NgRx?",
        options: [
          "Functions that extract specific pieces of state from the store",
          "CSS selectors for styling",
          "Route selectors for navigation",
          "Form selectors for validation",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is Angular Testing and what tools are commonly used?",
        options: [
          "Jasmine, Karma, and Angular Testing Utilities for unit and integration testing",
          "Only Jasmine for testing",
          "Only Karma for testing",
          "Only Angular Testing Utilities",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is the purpose of Angular TestBed?",
        options: [
          "To create a testing environment that mimics the Angular runtime",
          "To create production builds",
          "To create development builds",
          "To create component templates",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What is Angular Performance Optimization and what techniques are used?",
        options: [
          "OnPush strategy, lazy loading, trackBy functions, and OnDestroy for memory management",
          "Only OnPush strategy",
          "Only lazy loading",
          "Only trackBy functions",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Angular Advanced
  {
    id: "angular-advanced",
    technology: "angular",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question: "What is Angular Ivy and what are its key benefits?",
        options: [
          "A new rendering engine with smaller bundle sizes, faster compilation, and better tree-shaking",
          "A new state management library",
          "A new routing system",
          "A new testing framework",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "What is Angular Universal and how does it work?",
        options: [
          "A server-side rendering solution that runs Angular applications on the server",
          "A universal component library",
          "A universal testing framework",
          "A universal build tool",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "What is Angular Elements and how is it used?",
        options: [
          "A way to package Angular components as custom elements for use in any web application",
          "A way to create HTML elements",
          "A way to manage DOM elements",
          "A way to create CSS elements",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "What is Angular Schematics and what can it do?",
        options: [
          "A code generation tool that can create, modify, and refactor Angular applications",
          "A diagramming tool for Angular architecture",
          "A testing tool for Angular components",
          "A deployment tool for Angular applications",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "What is Angular CDK (Component Dev Kit) and its main features?",
        options: [
          "A set of tools for building custom components with accessibility, behavior, and theming",
          "A development kit for creating Angular CLI commands",
          "A kit for creating Angular services",
          "A kit for creating Angular pipes",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question:
          "What is Angular Material and how does it integrate with CDK?",
        options: [
          "A UI component library built on top of Angular CDK with Material Design principles",
          "A material design CSS framework",
          "A material design icon library",
          "A material design color palette",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is Angular PWA (Progressive Web App) support?",
        options: [
          "Built-in support for creating Progressive Web Apps with service workers and app manifests",
          "A way to create mobile apps",
          "A way to create desktop apps",
          "A way to create hybrid apps",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "What is Angular Zone.js and how does it work?",
        options: [
          "A library that patches browser APIs to detect asynchronous operations and trigger change detection",
          "A library for managing time zones",
          "A library for creating zones in applications",
          "A library for managing geographical zones",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is Angular's Ahead-of-Time (AOT) compilation?",
        options: [
          "Compiling Angular templates and components at build time for better performance",
          "Compiling Angular code at runtime",
          "Compiling Angular code in the browser",
          "Compiling Angular code on the server",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What is Angular's Just-in-Time (JIT) compilation?",
        options: [
          "Compiling Angular templates and components at runtime in the browser",
          "Compiling Angular code at build time",
          "Compiling Angular code on the server",
          "Compiling Angular code during development only",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is Angular's Tree Shaking and how does it work?",
        options: [
          "A process that removes unused code from the final bundle to reduce size",
          "A process that organizes code in a tree structure",
          "A process that creates a tree of components",
          "A process that manages component hierarchy",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What is Angular's Bundle Analyzer and how is it used?",
        options: [
          "A tool to analyze bundle size and identify optimization opportunities",
          "A tool to analyze component performance",
          "A tool to analyze routing performance",
          "A tool to analyze service performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is Angular's Web Workers support?",
        options: [
          "Running Angular applications in web workers for better performance",
          "Creating worker threads in Angular",
          "Managing worker processes in Angular",
          "Creating background tasks in Angular",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "What is Angular's Micro Frontend architecture?",
        options: [
          "Breaking large applications into smaller, independently deployable frontend applications",
          "Creating microservices for frontend",
          "Creating small frontend components",
          "Creating minimal frontend applications",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is Angular's Module Federation?",
        options: [
          "A way to share modules between different Angular applications at runtime",
          "A way to create federated modules",
          "A way to manage module dependencies",
          "A way to create module hierarchies",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What is Angular's Standalone Components feature?",
        options: [
          "Components that can be used without being declared in a module",
          "Components that work independently",
          "Components that don't need dependencies",
          "Components that are self-contained",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is Angular's Signal-based reactivity?",
        options: [
          "A new reactivity system using signals for fine-grained change detection",
          "A system for managing signal processing",
          "A system for handling audio signals",
          "A system for managing network signals",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is Angular's Control Flow syntax (@if, @for, @switch)?",
        options: [
          "New template syntax for conditional rendering and loops without structural directives",
          "New syntax for component control",
          "New syntax for service control",
          "New syntax for module control",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is Angular's Built-in Control Flow and its benefits?",
        options: [
          "Native template control flow with better performance and type safety",
          "Built-in form control flow",
          "Built-in routing control flow",
          "Built-in service control flow",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "What is Angular's View Transitions API?",
        options: [
          "A new API for creating smooth transitions between different views",
          "An API for managing view state",
          "An API for creating view animations",
          "An API for managing view lifecycle",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is Angular's Hydration and why is it important?",
        options: [
          "The process of making server-rendered content interactive on the client",
          "The process of adding water to components",
          "The process of refreshing components",
          "The process of updating components",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is Angular's Partial Hydration?",
        options: [
          "Hydrating only specific parts of the application for better performance",
          "Partially updating components",
          "Partially rendering components",
          "Partially loading components",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is Angular's Experimental APIs and how are they used?",
        options: [
          "New features in development that can be enabled for testing and feedback",
          "APIs that are deprecated",
          "APIs that are unstable",
          "APIs that are experimental only",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "What is Angular's Performance Budgets?",
        options: [
          "Configurable limits on bundle size and performance metrics to prevent regressions",
          "Budget allocation for Angular projects",
          "Budget management for Angular teams",
          "Budget tracking for Angular development",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is Angular's Differential Loading?",
        options: [
          "Loading different JavaScript bundles for different browsers based on ES2015 support",
          "Loading different components for different users",
          "Loading different modules for different environments",
          "Loading different services for different platforms",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What is Angular's Build Optimizer?",
        options: [
          "A tool that optimizes the production build by removing unnecessary code and improving performance",
          "A tool that optimizes development builds",
          "A tool that optimizes test builds",
          "A tool that optimizes debug builds",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is Angular's Source Maps and their importance?",
        options: [
          "Files that map compiled code back to original source code for debugging",
          "Maps that show component hierarchy",
          "Maps that show service dependencies",
          "Maps that show module relationships",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is Angular's Environment Configuration?",
        options: [
          "Managing different configurations for development, staging, and production environments",
          "Managing component environments",
          "Managing service environments",
          "Managing module environments",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is Angular's Custom Builders and how are they created?",
        options: [
          "Custom Angular CLI builders for extending build processes and adding new commands",
          "Custom component builders",
          "Custom service builders",
          "Custom module builders",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "What is Angular's Advanced Testing Patterns?",
        options: [
          "Complex testing scenarios including integration tests, e2e tests, and performance testing",
          "Basic testing patterns only",
          "Simple testing patterns only",
          "Unit testing patterns only",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Git Beginner
  {
    id: "git-beginner",
    technology: "git",
    difficulty: "beginner",
    questions: [
      {
        id: 1,
        question: "What is Git?",
        options: [
          "A distributed version control system for tracking changes in source code",
          "A programming language",
          "A web development framework",
          "A database management system",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which command is used to initialize a new Git repository?",
        options: ["git init", "git start", "git create", "git new"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "What is the purpose of git add command?",
        options: [
          "To stage changes for commit",
          "To add new files to the repository",
          "To add remote repositories",
          "To add branches",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "Which command is used to commit staged changes?",
        options: ["git commit", "git save", "git push", "git submit"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the purpose of git status command?",
        options: [
          "To show the current state of the working directory and staging area",
          "To show the commit history",
          "To show remote repositories",
          "To show branch information",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Which command is used to view the commit history?",
        options: ["git log", "git history", "git show", "git list"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is a Git branch?",
        options: [
          "A parallel version of the repository that allows independent development",
          "A backup of the repository",
          "A compressed version of the repository",
          "A remote copy of the repository",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which command is used to create a new branch?",
        options: ["git branch", "git create", "git new", "git add"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "Which command is used to switch to a different branch?",
        options: ["git checkout", "git switch", "git change", "git move"],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What is the purpose of git merge command?",
        options: [
          "To combine changes from different branches",
          "To create a new branch",
          "To delete a branch",
          "To rename a branch",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is a remote repository in Git?",
        options: [
          "A version of the repository hosted on a server or another computer",
          "A local backup of the repository",
          "A compressed version of the repository",
          "A read-only version of the repository",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "Which command is used to add a remote repository?",
        options: [
          "git remote add",
          "git add remote",
          "git connect",
          "git link",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is the purpose of git push command?",
        options: [
          "To upload local commits to a remote repository",
          "To download commits from a remote repository",
          "To create a new branch",
          "To delete a branch",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "What is the purpose of git pull command?",
        options: [
          "To download and merge changes from a remote repository",
          "To upload changes to a remote repository",
          "To create a new branch",
          "To delete a branch",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is a Git commit?",
        options: [
          "A snapshot of the repository at a specific point in time",
          "A backup of the repository",
          "A compressed version of the repository",
          "A remote copy of the repository",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What is the purpose of git clone command?",
        options: [
          "To create a local copy of a remote repository",
          "To create a new repository",
          "To delete a repository",
          "To backup a repository",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is the staging area in Git?",
        options: [
          "An intermediate area where changes are prepared before committing",
          "A backup area for files",
          "A temporary storage area",
          "A remote storage area",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "Which command is used to see the differences between files?",
        options: ["git diff", "git compare", "git show", "git list"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is the purpose of git reset command?",
        options: [
          "To undo changes and move the HEAD pointer",
          "To create a new branch",
          "To delete a branch",
          "To rename a branch",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "What is HEAD in Git?",
        options: [
          "A pointer to the current commit in the repository",
          "The main branch of the repository",
          "The remote repository",
          "The staging area",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is the default branch name in Git?",
        options: ["main", "master", "primary", "default"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Which command is used to see all branches?",
        options: ["git branch", "git branches", "git list", "git show"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is the purpose of git stash command?",
        options: [
          "To temporarily save changes without committing them",
          "To create a new branch",
          "To delete a branch",
          "To merge branches",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Which command is used to apply stashed changes?",
        options: [
          "git stash pop",
          "git stash apply",
          "git stash restore",
          "git stash get",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is a Git tag?",
        options: [
          "A reference to a specific commit, often used for marking release points",
          "A branch in the repository",
          "A remote repository",
          "A backup of the repository",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "Which command is used to create a tag?",
        options: ["git tag", "git create tag", "git add tag", "git new tag"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is the purpose of .gitignore file?",
        options: [
          "To specify files and directories that Git should ignore",
          "To store Git configuration",
          "To store commit messages",
          "To store branch information",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is a Git conflict?",
        options: [
          "When Git cannot automatically merge changes from different branches",
          "When Git cannot connect to a remote repository",
          "When Git cannot create a new branch",
          "When Git cannot delete a branch",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "Which command is used to see the current branch?",
        options: ["git branch", "git current", "git active", "git show"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "What is the purpose of git config command?",
        options: [
          "To configure Git settings and preferences",
          "To create a new repository",
          "To delete a repository",
          "To backup a repository",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Git Intermediate
  {
    id: "git-intermediate",
    technology: "git",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question: "What is the difference between git merge and git rebase?",
        options: [
          "Merge creates a merge commit, rebase replays commits on top of another branch",
          "Merge is faster than rebase",
          "Rebase is only for local branches",
          "There is no difference between them",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "What is a fast-forward merge in Git?",
        options: [
          "A merge where the target branch can be moved forward without creating a merge commit",
          "A merge that happens automatically",
          "A merge that only works with remote branches",
          "A merge that deletes the source branch",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "What is the purpose of git cherry-pick?",
        options: [
          "To apply specific commits from one branch to another",
          "To delete specific commits",
          "To rename commits",
          "To merge all commits from a branch",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "What is git bisect and how is it used?",
        options: [
          "A tool to find the commit that introduced a bug using binary search",
          "A tool to split commits",
          "A tool to merge branches",
          "A tool to delete branches",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "What is the difference between git reset --soft, --mixed, and --hard?",
        options: [
          "--soft keeps changes staged, --mixed unstages changes, --hard discards all changes",
          "They are all the same",
          "--hard is the safest option",
          "--soft discards all changes",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "What is git reflog and why is it useful?",
        options: [
          "A log of all HEAD movements, useful for recovering lost commits",
          "A log of all branches",
          "A log of all remote repositories",
          "A log of all tags",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is the purpose of git submodules?",
        options: [
          "To include one Git repository as a subdirectory of another repository",
          "To create smaller repositories",
          "To backup repositories",
          "To compress repositories",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "What is git worktree and how does it work?",
        options: [
          "A feature that allows multiple working directories for the same repository",
          "A feature to create multiple repositories",
          "A feature to backup repositories",
          "A feature to compress repositories",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is the difference between git fetch and git pull?",
        options: [
          "Fetch downloads changes without merging, pull downloads and merges changes",
          "Fetch is faster than pull",
          "Pull only works with remote branches",
          "There is no difference",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What is git hooks and what are they used for?",
        options: [
          "Scripts that run automatically at certain points in the Git workflow",
          "Tools to create branches",
          "Tools to merge branches",
          "Tools to delete branches",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is the purpose of git blame?",
        options: [
          "To show who last modified each line of a file and when",
          "To show all commits in a repository",
          "To show all branches in a repository",
          "To show all tags in a repository",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What is git clean and how is it used?",
        options: [
          "To remove untracked files and directories from the working directory",
          "To clean up commit history",
          "To clean up branches",
          "To clean up remote repositories",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is the purpose of git archive?",
        options: [
          "To create an archive of files from a named tree",
          "To backup the entire repository",
          "To compress the repository",
          "To create a new repository",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "What is git bundle and how is it used?",
        options: [
          "To package a repository into a single file for transfer",
          "To create a backup of the repository",
          "To compress the repository",
          "To create a new branch",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is the difference between git revert and git reset?",
        options: [
          "Revert creates new commits to undo changes, reset moves the HEAD pointer",
          "Revert is faster than reset",
          "Reset only works with local branches",
          "There is no difference",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What is git filter-branch and what is it used for?",
        options: [
          "To rewrite Git history by applying filters to each commit",
          "To create new branches",
          "To merge branches",
          "To delete branches",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is the purpose of git notes?",
        options: [
          "To add additional information to commits without modifying the commit",
          "To create new commits",
          "To modify existing commits",
          "To delete commits",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is git replace and how does it work?",
        options: [
          "To replace one object with another without changing the history",
          "To replace branches",
          "To replace remote repositories",
          "To replace tags",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is the purpose of git gc (garbage collection)?",
        options: [
          "To clean up unnecessary files and optimize the repository",
          "To create new commits",
          "To merge branches",
          "To delete branches",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "What is git fsck and what does it check?",
        options: [
          "To verify the connectivity and validity of objects in the repository",
          "To check file permissions",
          "To check branch names",
          "To check remote repositories",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is the purpose of git show?",
        options: [
          "To display various types of objects (commits, tags, trees, blobs)",
          "To show all branches",
          "To show all commits",
          "To show all files",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is git describe and how is it used?",
        options: [
          "To give an object a human readable name based on an available ref",
          "To describe branches",
          "To describe commits",
          "To describe files",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is the purpose of git ls-tree?",
        options: [
          "To list the contents of a tree object",
          "To list all branches",
          "To list all commits",
          "To list all files",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "What is git cat-file and what does it do?",
        options: [
          "To provide content or type and size information for repository objects",
          "To create new files",
          "To modify existing files",
          "To delete files",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is the purpose of git update-ref?",
        options: [
          "To update the object name stored in a ref safely",
          "To update file contents",
          "To update commit messages",
          "To update branch names",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What is git symbolic-ref and how is it used?",
        options: [
          "To read, modify and delete symbolic refs",
          "To create new branches",
          "To merge branches",
          "To delete branches",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is the purpose of git for-each-ref?",
        options: [
          "To output information on each ref",
          "To create new refs",
          "To modify existing refs",
          "To delete refs",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is git pack-refs and why is it useful?",
        options: [
          "To pack loose refs into a single file for efficiency",
          "To create new refs",
          "To modify existing refs",
          "To delete refs",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is the purpose of git rev-parse?",
        options: [
          "To parse revision and path specifiers and output corresponding object names",
          "To create new revisions",
          "To modify existing revisions",
          "To delete revisions",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "What is git merge-base and how is it used?",
        options: [
          "To find as good common ancestors as possible for a merge",
          "To create new merges",
          "To modify existing merges",
          "To delete merges",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Git Advanced
  {
    id: "git-advanced",
    technology: "git",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question:
          "What is Git's object model and what are the four main object types?",
        options: [
          "Blob, Tree, Commit, and Tag objects",
          "File, Directory, Branch, and Remote objects",
          "Head, Ref, Branch, and Tag objects",
          "Working, Staging, Local, and Remote objects",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "What is the Git index and how does it work internally?",
        options: [
          "A binary file that stores staged changes and metadata about the working tree",
          "A text file that lists all tracked files",
          "A database that stores commit history",
          "A cache that stores remote repository information",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question:
          "What is Git's three-way merge algorithm and how does it work?",
        options: [
          "It compares the common ancestor with both branches to create a merge commit",
          "It automatically merges all changes without conflicts",
          "It only merges files that haven't changed",
          "It creates a new branch for each merge",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "What is Git's packfile format and why is it important?",
        options: [
          "A compressed format that stores multiple objects efficiently to reduce repository size",
          "A format for storing branch information",
          "A format for storing commit messages",
          "A format for storing remote repository data",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "What is Git's delta compression and how does it optimize storage?",
        options: [
          "It stores only the differences between similar objects to reduce space",
          "It compresses all files using gzip",
          "It removes duplicate files automatically",
          "It stores only the latest version of each file",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question:
          "What is Git's SHA-1 hash collision resistance and its implications?",
        options: [
          "The theoretical possibility of two different objects having the same hash, which could corrupt the repository",
          "The ability to have multiple commits with the same message",
          "The ability to have multiple branches with the same name",
          "The ability to have multiple files with the same content",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question:
          "What is Git's reflog expiration and how can it affect data recovery?",
        options: [
          "Reflog entries expire after a certain time, potentially making some commits unrecoverable",
          "Reflog entries never expire",
          "Reflog entries expire only for deleted branches",
          "Reflog entries expire only for remote branches",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question:
          "What is Git's garbage collection process and when does it run?",
        options: [
          "It removes unreachable objects and optimizes the repository, running automatically or manually",
          "It only runs when explicitly called with git gc",
          "It runs every time you commit",
          "It runs only when pushing to remote",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "What is Git's loose object format and when are objects stored as loose?",
        options: [
          "Individual files for each object, used for recent objects before they're packed",
          "A compressed format for all objects",
          "A format only for large files",
          "A format only for binary files",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question:
          "What is Git's multi-pack index and how does it improve performance?",
        options: [
          "An index that allows Git to efficiently search across multiple packfiles",
          "An index that stores all commit information",
          "An index that stores all branch information",
          "An index that stores all tag information",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question:
          "What is Git's commit-graph and how does it optimize repository operations?",
        options: [
          "A file that stores precomputed commit information to speed up operations like git log",
          "A file that stores all commit messages",
          "A file that stores all commit authors",
          "A file that stores all commit dates",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What is Git's partial clone feature and how does it work?",
        options: [
          "A feature that allows cloning only part of a repository to reduce bandwidth and storage",
          "A feature that clones only the latest commit",
          "A feature that clones only specific branches",
          "A feature that clones only specific files",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is Git's shallow clone and what are its limitations?",
        options: [
          "A clone with limited history depth, but with restrictions on operations like push and merge",
          "A clone that only includes the working directory",
          "A clone that only includes the latest commit",
          "A clone that only includes specific branches",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "What is Git's narrow clone and how does it differ from partial clone?",
        options: [
          "A clone that includes only specific paths or directories from the repository",
          "A clone that includes only the latest commits",
          "A clone that includes only specific branches",
          "A clone that includes only specific file types",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is Git's bundle format and when is it useful?",
        options: [
          "A single file containing a complete repository, useful for offline transfers or backups",
          "A compressed format for individual files",
          "A format for storing commit history only",
          "A format for storing branch information only",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question:
          "What is Git's replace mechanism and how can it be used for history rewriting?",
        options: [
          "A mechanism to substitute one object for another without changing the original history",
          "A mechanism to delete objects from history",
          "A mechanism to merge objects",
          "A mechanism to split objects",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question:
          "What is Git's notes system and how can it extend commit information?",
        options: [
          "A system to attach additional information to commits without modifying the commit itself",
          "A system to modify commit messages",
          "A system to modify commit authors",
          "A system to modify commit dates",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is Git's mailmap feature and how does it work?",
        options: [
          "A feature to map different email addresses and names to a canonical identity",
          "A feature to send emails about commits",
          "A feature to store email addresses in commits",
          "A feature to validate email addresses",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question:
          "What is Git's attribute system and how can it customize Git behavior?",
        options: [
          "A system to set attributes on files that control how Git treats them",
          "A system to set attributes on commits",
          "A system to set attributes on branches",
          "A system to set attributes on tags",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "What is Git's clean and smudge filters and how do they work?",
        options: [
          "Filters that transform file content during checkin (clean) and checkout (smudge)",
          "Filters that clean up commit messages",
          "Filters that clean up branch names",
          "Filters that clean up tag names",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question:
          "What is Git's merge driver system and how can it be customized?",
        options: [
          "A system to define custom merge strategies for specific file types or patterns",
          "A system to define custom commit strategies",
          "A system to define custom push strategies",
          "A system to define custom pull strategies",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "What is Git's diff driver system and how can it be customized?",
        options: [
          "A system to define custom diff algorithms for specific file types",
          "A system to define custom merge algorithms",
          "A system to define custom commit algorithms",
          "A system to define custom push algorithms",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question:
          "What is Git's credential system and how does it manage authentication?",
        options: [
          "A system to securely store and manage credentials for remote repositories",
          "A system to store commit credentials",
          "A system to store branch credentials",
          "A system to store tag credentials",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "What is Git's protocol v2 and how does it improve performance?",
        options: [
          "A more efficient protocol that reduces round trips and improves performance for large repositories",
          "A protocol that only works with SSH",
          "A protocol that only works with HTTPS",
          "A protocol that only works with local repositories",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "What is Git's LFS (Large File Storage) and how does it work?",
        options: [
          "An extension that stores large files outside the repository and tracks them with pointers",
          "A system that compresses large files",
          "A system that splits large files into smaller chunks",
          "A system that stores large files in a separate database",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "What is Git's worktree feature and how can it improve workflow?",
        options: [
          "A feature that allows multiple working directories for the same repository, enabling parallel work on different branches",
          "A feature that creates multiple repositories",
          "A feature that creates multiple remotes",
          "A feature that creates multiple clones",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is Git's sparse-checkout feature and how does it work?",
        options: [
          "A feature that allows checking out only specific parts of the repository",
          "A feature that checks out only the latest commit",
          "A feature that checks out only specific branches",
          "A feature that checks out only specific file types",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question:
          "What is Git's maintenance command and how does it optimize repositories?",
        options: [
          "A command that runs various maintenance tasks to optimize repository performance and storage",
          "A command that only cleans up branches",
          "A command that only cleans up commits",
          "A command that only cleans up tags",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "What is Git's scalar tool and how does it improve large repository performance?",
        options: [
          "A tool that optimizes Git for large repositories by enabling various performance features",
          "A tool that scales repository size",
          "A tool that scales commit history",
          "A tool that scales branch count",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What is Git's multi-pack bitmap and how does it improve performance?",
        options: [
          "A bitmap index that spans multiple packfiles to speed up reachability queries",
          "A bitmap that stores all commit information",
          "A bitmap that stores all branch information",
          "A bitmap that stores all tag information",
        ],
        correctAnswer: 0,
      },
    ],
  },
  // Node.js Beginner
  {
    id: "nodejs-beginner",
    technology: "nodejs",
    difficulty: "beginner",
    questions: [
      {
        id: 1,
        question: "What is Node.js?",
        options: [
          "A JavaScript runtime built on Chrome's V8 JavaScript engine",
          "A JavaScript framework for frontend development",
          "A database management system",
          "A CSS preprocessor",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "What is the Node.js event loop?",
        options: [
          "A mechanism that handles asynchronous operations in Node.js",
          "A loop that runs forever",
          "A way to create infinite loops",
          "A debugging tool",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "What is npm?",
        options: [
          "Node Package Manager - a package manager for Node.js",
          "Node Process Manager",
          "Node Performance Monitor",
          "Node Project Manager",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "How do you create a simple HTTP server in Node.js?",
        options: [
          "Using the built-in http module",
          "Using the built-in server module",
          "Using the built-in web module",
          "Using the built-in request module",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the purpose of require() in Node.js?",
        options: [
          "To import modules and files",
          "To export modules",
          "To create new modules",
          "To delete modules",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "What is the purpose of module.exports in Node.js?",
        options: [
          "To export functions, objects, or values from a module",
          "To import functions from other modules",
          "To create new modules",
          "To delete modules",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is a callback function in Node.js?",
        options: [
          "A function that is passed as an argument to another function and executed later",
          "A function that calls itself",
          "A function that returns a value",
          "A function that creates new functions",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "What is the fs module used for in Node.js?",
        options: [
          "File system operations like reading and writing files",
          "Network operations",
          "Database operations",
          "Math operations",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is the path module used for in Node.js?",
        options: [
          "Working with file and directory paths",
          "Working with network paths",
          "Working with database paths",
          "Working with memory paths",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question:
          "What is the difference between synchronous and asynchronous operations in Node.js?",
        options: [
          "Synchronous blocks execution, asynchronous doesn't block",
          "Synchronous is faster than asynchronous",
          "Asynchronous is faster than synchronous",
          "There is no difference",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is the purpose of process.argv in Node.js?",
        options: [
          "To access command line arguments passed to the script",
          "To access environment variables",
          "To access file system information",
          "To access network information",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What is the purpose of process.env in Node.js?",
        options: [
          "To access environment variables",
          "To access command line arguments",
          "To access file system information",
          "To access network information",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is the purpose of __dirname in Node.js?",
        options: [
          "To get the directory name of the current module",
          "To get the file name of the current module",
          "To get the path of the current module",
          "To get the size of the current module",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "What is the purpose of __filename in Node.js?",
        options: [
          "To get the filename of the current module",
          "To get the directory name of the current module",
          "To get the path of the current module",
          "To get the size of the current module",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is the purpose of the url module in Node.js?",
        options: [
          "To parse and format URLs",
          "To make HTTP requests",
          "To create web servers",
          "To handle file uploads",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What is the purpose of the querystring module in Node.js?",
        options: [
          "To parse and format URL query strings",
          "To parse JSON data",
          "To parse XML data",
          "To parse CSV data",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is the purpose of the os module in Node.js?",
        options: [
          "To get operating system information",
          "To get network information",
          "To get file system information",
          "To get database information",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is the purpose of the util module in Node.js?",
        options: [
          "To provide utility functions for various purposes",
          "To provide networking functions",
          "To provide file system functions",
          "To provide database functions",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is the purpose of the crypto module in Node.js?",
        options: [
          "To provide cryptographic functionality",
          "To provide file system functionality",
          "To provide networking functionality",
          "To provide database functionality",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "What is the purpose of the stream module in Node.js?",
        options: [
          "To handle streaming data",
          "To handle file operations",
          "To handle network operations",
          "To handle database operations",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is the purpose of the buffer module in Node.js?",
        options: [
          "To handle binary data",
          "To handle text data",
          "To handle JSON data",
          "To handle XML data",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is the purpose of the events module in Node.js?",
        options: [
          "To handle events and event-driven programming",
          "To handle file operations",
          "To handle network operations",
          "To handle database operations",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is the purpose of the child_process module in Node.js?",
        options: [
          "To spawn child processes",
          "To create new threads",
          "To create new modules",
          "To create new servers",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "What is the purpose of the cluster module in Node.js?",
        options: [
          "To create child processes that share server ports",
          "To create new threads",
          "To create new modules",
          "To create new databases",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is the purpose of the timers module in Node.js?",
        options: [
          "To schedule functions to be called at a later time",
          "To measure execution time",
          "To create timestamps",
          "To handle time zones",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What is the purpose of the assert module in Node.js?",
        options: [
          "To write tests and make assertions",
          "To create assertions in production code",
          "To handle errors",
          "To handle exceptions",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is the purpose of the vm module in Node.js?",
        options: [
          "To compile and run JavaScript code in a virtual machine context",
          "To create virtual machines",
          "To manage memory",
          "To manage processes",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is the purpose of the zlib module in Node.js?",
        options: [
          "To provide compression and decompression functionality",
          "To provide encryption functionality",
          "To provide hashing functionality",
          "To provide encoding functionality",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is the purpose of the readline module in Node.js?",
        options: [
          "To read data from a readable stream one line at a time",
          "To read files line by line",
          "To read network data line by line",
          "To read database data line by line",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "What is the purpose of the repl module in Node.js?",
        options: [
          "To create a Read-Eval-Print Loop (REPL) session",
          "To create a web server",
          "To create a database connection",
          "To create a file system interface",
        ],
        correctAnswer: 0,
      },
    ],
  },
  // Node.js Intermediate
  {
    id: "nodejs-intermediate",
    technology: "nodejs",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question:
          "What is the difference between process.nextTick() and setImmediate()?",
        options: [
          "process.nextTick() has higher priority and runs before setImmediate()",
          "setImmediate() has higher priority and runs before process.nextTick()",
          "They have the same priority",
          "process.nextTick() is deprecated",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "What is the purpose of the EventEmitter class in Node.js?",
        options: [
          "To create objects that can emit and listen to events",
          "To create HTTP servers",
          "To create file streams",
          "To create database connections",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "What is the purpose of the Stream API in Node.js?",
        options: [
          "To handle data streams efficiently without loading everything into memory",
          "To handle HTTP requests",
          "To handle file operations",
          "To handle database operations",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question:
          "What is the difference between readable, writable, duplex, and transform streams?",
        options: [
          "Readable: read data, Writable: write data, Duplex: both, Transform: modify data while passing through",
          "They are all the same",
          "Readable is the fastest",
          "Transform is deprecated",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the purpose of the cluster module in Node.js?",
        options: [
          "To create child processes that share server ports for load balancing",
          "To create multiple servers",
          "To create multiple databases",
          "To create multiple file systems",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question:
          "What is the purpose of the worker_threads module in Node.js?",
        options: [
          "To run JavaScript in parallel using threads",
          "To create web workers",
          "To create child processes",
          "To create clusters",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is the purpose of the async_hooks module in Node.js?",
        options: [
          "To track asynchronous resources and their lifecycle",
          "To create async functions",
          "To handle async errors",
          "To manage async queues",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "What is the purpose of the perf_hooks module in Node.js?",
        options: [
          "To measure performance and timing of operations",
          "To create performance tests",
          "To optimize code automatically",
          "To create benchmarks",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is the purpose of the inspector module in Node.js?",
        options: [
          "To provide debugging and profiling capabilities",
          "To inspect files",
          "To inspect databases",
          "To inspect networks",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What is the purpose of the trace_events module in Node.js?",
        options: [
          "To trace and monitor application events",
          "To trace file operations",
          "To trace network operations",
          "To trace database operations",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question:
          "What is the purpose of the diagnostics_channel module in Node.js?",
        options: [
          "To create named channels for diagnostic data",
          "To diagnose network issues",
          "To diagnose file system issues",
          "To diagnose database issues",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What is the purpose of the test_runner module in Node.js?",
        options: [
          "To run tests and provide testing utilities",
          "To create test files",
          "To create test databases",
          "To create test networks",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is the purpose of the wasi module in Node.js?",
        options: [
          "To run WebAssembly System Interface (WASI) programs",
          "To create web applications",
          "To create system interfaces",
          "To create web services",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "What is the purpose of the webstreams module in Node.js?",
        options: [
          "To provide Web Streams API implementation",
          "To create web servers",
          "To create web clients",
          "To create web applications",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is the purpose of the permission module in Node.js?",
        options: [
          "To manage permissions for file system and network access",
          "To manage user permissions",
          "To manage database permissions",
          "To manage system permissions",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What is the purpose of the test module in Node.js?",
        options: [
          "To provide testing utilities and assertions",
          "To create test files",
          "To create test databases",
          "To create test networks",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is the purpose of the punycode module in Node.js?",
        options: [
          "To encode and decode Punycode strings",
          "To encode and decode URLs",
          "To encode and decode JSON",
          "To encode and decode XML",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "What is the purpose of the string_decoder module in Node.js?",
        options: [
          "To decode Buffer objects into strings",
          "To encode strings into buffers",
          "To compress strings",
          "To decompress strings",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is the purpose of the tls module in Node.js?",
        options: [
          "To implement TLS/SSL protocols for secure communication",
          "To create secure file systems",
          "To create secure databases",
          "To create secure networks",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "What is the purpose of the net module in Node.js?",
        options: [
          "To create TCP servers and clients",
          "To create HTTP servers",
          "To create file servers",
          "To create database servers",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is the purpose of the dgram module in Node.js?",
        options: [
          "To create UDP servers and clients",
          "To create TCP servers",
          "To create HTTP servers",
          "To create file servers",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is the purpose of the https module in Node.js?",
        options: [
          "To create HTTPS servers and make HTTPS requests",
          "To create HTTP servers",
          "To create TCP servers",
          "To create UDP servers",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is the purpose of the http2 module in Node.js?",
        options: [
          "To create HTTP/2 servers and clients",
          "To create HTTP/1.1 servers",
          "To create HTTPS servers",
          "To create TCP servers",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "What is the purpose of the querystring module in Node.js?",
        options: [
          "To parse and format URL query strings",
          "To parse JSON data",
          "To parse XML data",
          "To parse CSV data",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is the purpose of the punycode module in Node.js?",
        options: [
          "To encode and decode Punycode strings for internationalized domain names",
          "To encode and decode URLs",
          "To encode and decode JSON",
          "To encode and decode XML",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "What is the purpose of the string_decoder module in Node.js?",
        options: [
          "To decode Buffer objects into strings using a specific character encoding",
          "To encode strings into buffers",
          "To compress strings",
          "To decompress strings",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is the purpose of the tls module in Node.js?",
        options: [
          "To implement TLS/SSL protocols for secure communication over networks",
          "To create secure file systems",
          "To create secure databases",
          "To create secure networks",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is the purpose of the net module in Node.js?",
        options: [
          "To create TCP servers and clients for network communication",
          "To create HTTP servers",
          "To create file servers",
          "To create database servers",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is the purpose of the dgram module in Node.js?",
        options: [
          "To create UDP servers and clients for datagram communication",
          "To create TCP servers",
          "To create HTTP servers",
          "To create file servers",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "What is the purpose of the https module in Node.js?",
        options: [
          "To create HTTPS servers and make HTTPS requests with SSL/TLS encryption",
          "To create HTTP servers",
          "To create TCP servers",
          "To create UDP servers",
        ],
        correctAnswer: 0,
      },
    ],
  },
  // Node.js Advanced
  {
    id: "nodejs-advanced",
    technology: "nodejs",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question:
          "What is the V8 JavaScript engine and how does it work in Node.js?",
        options: [
          "Google's open-source JavaScript engine that compiles JavaScript to machine code",
          "A JavaScript framework",
          "A JavaScript library",
          "A JavaScript runtime",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question:
          "What is the libuv library and what role does it play in Node.js?",
        options: [
          "A C++ library that provides asynchronous I/O operations and the event loop",
          "A JavaScript library",
          "A Python library",
          "A Java library",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question:
          "What is the Node.js event loop and how does it handle different phases?",
        options: [
          "A single-threaded loop that processes callbacks in different phases: timers, pending callbacks, idle, poll, check, close",
          "A multi-threaded loop",
          "A synchronous loop",
          "A blocking loop",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "What is the purpose of the Node.js C++ addon API?",
        options: [
          "To create native addons using C++ that can be loaded into Node.js",
          "To create JavaScript modules",
          "To create Python modules",
          "To create Java modules",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the purpose of the Node.js N-API (Node-API)?",
        options: [
          "A stable API for building native addons that works across Node.js versions",
          "A JavaScript API",
          "A Python API",
          "A Java API",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question:
          "What is the purpose of the Node.js worker_threads module and how does it differ from child_process?",
        options: [
          "Worker threads share memory and are lighter than child processes which are separate processes",
          "They are identical",
          "Child processes are lighter than worker threads",
          "Worker threads are deprecated",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question:
          "What is the purpose of the Node.js async_hooks module and how can it be used for tracking?",
        options: [
          "To track asynchronous resources and their lifecycle for debugging and monitoring",
          "To create async functions",
          "To handle async errors",
          "To manage async queues",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question:
          "What is the purpose of the Node.js perf_hooks module and how can it be used for performance monitoring?",
        options: [
          "To measure performance and timing of operations using high-resolution timestamps",
          "To create performance tests",
          "To optimize code automatically",
          "To create benchmarks",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "What is the purpose of the Node.js inspector module and how can it be used for debugging?",
        options: [
          "To provide debugging and profiling capabilities using the Chrome DevTools protocol",
          "To inspect files",
          "To inspect databases",
          "To inspect networks",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question:
          "What is the purpose of the Node.js trace_events module and how can it be used for tracing?",
        options: [
          "To trace and monitor application events using the Chrome tracing format",
          "To trace file operations",
          "To trace network operations",
          "To trace database operations",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question:
          "What is the purpose of the Node.js diagnostics_channel module and how can it be used for diagnostics?",
        options: [
          "To create named channels for diagnostic data that can be subscribed to by diagnostic tools",
          "To diagnose network issues",
          "To diagnose file system issues",
          "To diagnose database issues",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question:
          "What is the purpose of the Node.js test_runner module and how can it be used for testing?",
        options: [
          "To run tests and provide testing utilities with built-in test runner capabilities",
          "To create test files",
          "To create test databases",
          "To create test networks",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "What is the purpose of the Node.js wasi module and how can it be used for WebAssembly?",
        options: [
          "To run WebAssembly System Interface (WASI) programs in Node.js",
          "To create web applications",
          "To create system interfaces",
          "To create web services",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "What is the purpose of the Node.js webstreams module and how can it be used for streaming?",
        options: [
          "To provide Web Streams API implementation for modern streaming operations",
          "To create web servers",
          "To create web clients",
          "To create web applications",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question:
          "What is the purpose of the Node.js permission module and how can it be used for security?",
        options: [
          "To manage permissions for file system and network access in a secure way",
          "To manage user permissions",
          "To manage database permissions",
          "To manage system permissions",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question:
          "What is the purpose of the Node.js test module and how can it be used for testing?",
        options: [
          "To provide testing utilities and assertions with modern testing capabilities",
          "To create test files",
          "To create test databases",
          "To create test networks",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question:
          "What is the purpose of the Node.js punycode module and how can it be used for internationalization?",
        options: [
          "To encode and decode Punycode strings for internationalized domain names (IDN)",
          "To encode and decode URLs",
          "To encode and decode JSON",
          "To encode and decode XML",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "What is the purpose of the Node.js string_decoder module and how can it be used for encoding?",
        options: [
          "To decode Buffer objects into strings using a specific character encoding safely",
          "To encode strings into buffers",
          "To compress strings",
          "To decompress strings",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question:
          "What is the purpose of the Node.js tls module and how can it be used for secure communication?",
        options: [
          "To implement TLS/SSL protocols for secure communication over networks",
          "To create secure file systems",
          "To create secure databases",
          "To create secure networks",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "What is the purpose of the Node.js net module and how can it be used for network programming?",
        options: [
          "To create TCP servers and clients for low-level network communication",
          "To create HTTP servers",
          "To create file servers",
          "To create database servers",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question:
          "What is the purpose of the Node.js dgram module and how can it be used for UDP communication?",
        options: [
          "To create UDP servers and clients for datagram communication",
          "To create TCP servers",
          "To create HTTP servers",
          "To create file servers",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "What is the purpose of the Node.js https module and how can it be used for secure HTTP?",
        options: [
          "To create HTTPS servers and make HTTPS requests with SSL/TLS encryption",
          "To create HTTP servers",
          "To create TCP servers",
          "To create UDP servers",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question:
          "What is the purpose of the Node.js http2 module and how can it be used for HTTP/2?",
        options: [
          "To create HTTP/2 servers and clients with multiplexing and server push capabilities",
          "To create HTTP/1.1 servers",
          "To create HTTPS servers",
          "To create TCP servers",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "What is the purpose of the Node.js querystring module and how can it be used for URL parsing?",
        options: [
          "To parse and format URL query strings with proper encoding and decoding",
          "To parse JSON data",
          "To parse XML data",
          "To parse CSV data",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "What is the purpose of the Node.js punycode module and how can it be used for IDN?",
        options: [
          "To encode and decode Punycode strings for internationalized domain names (IDN) support",
          "To encode and decode URLs",
          "To encode and decode JSON",
          "To encode and decode XML",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "What is the purpose of the Node.js string_decoder module and how can it be used for safe decoding?",
        options: [
          "To decode Buffer objects into strings using a specific character encoding without data loss",
          "To encode strings into buffers",
          "To compress strings",
          "To decompress strings",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question:
          "What is the purpose of the Node.js tls module and how can it be used for SSL/TLS?",
        options: [
          "To implement TLS/SSL protocols for secure communication over networks with certificate management",
          "To create secure file systems",
          "To create secure databases",
          "To create secure networks",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question:
          "What is the purpose of the Node.js net module and how can it be used for TCP programming?",
        options: [
          "To create TCP servers and clients for low-level network communication with socket management",
          "To create HTTP servers",
          "To create file servers",
          "To create database servers",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "What is the purpose of the Node.js dgram module and how can it be used for UDP programming?",
        options: [
          "To create UDP servers and clients for datagram communication with socket management",
          "To create TCP servers",
          "To create HTTP servers",
          "To create file servers",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What is the purpose of the Node.js https module and how can it be used for secure HTTP programming?",
        options: [
          "To create HTTPS servers and make HTTPS requests with SSL/TLS encryption and certificate management",
          "To create HTTP servers",
          "To create TCP servers",
          "To create UDP servers",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // TypeScript Beginner
  {
    id: "typescript-beginner",
    technology: "typescript",
    difficulty: "beginner",
    questions: [
      {
        id: 1,
        question: "What is TypeScript?",
        options: [
          "A superset of JavaScript that adds static typing",
          "A completely different programming language",
          "A JavaScript framework",
          "A database management system",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "What file extension is used for TypeScript files?",
        options: [".js", ".ts", ".tsx", ".typescript"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question:
          "How do you declare a variable with a specific type in TypeScript?",
        options: [
          "let name: string = 'John'",
          "let name = 'John' as string",
          "let name = string('John')",
          "let name = 'John'",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question:
          "What is the correct way to define a function parameter type?",
        options: [
          "function greet(name: string) { }",
          "function greet(name as string) { }",
          "function greet(name = string) { }",
          "function greet(name) { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "Which of the following is a basic TypeScript type?",
        options: ["string", "array", "object", "all of the above"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "How do you define an array of numbers in TypeScript?",
        options: [
          "let numbers: number[] = [1, 2, 3]",
          "let numbers: array<number> = [1, 2, 3]",
          "let numbers: [number] = [1, 2, 3]",
          "let numbers = [1, 2, 3]",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is the purpose of the 'any' type in TypeScript?",
        options: [
          "To allow any type of value",
          "To create arrays",
          "To define functions",
          "To handle errors",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "How do you define an interface in TypeScript?",
        options: [
          "interface Person { name: string; age: number; }",
          "class Person { name: string; age: number; }",
          "type Person = { name: string; age: number; }",
          "struct Person { name: string; age: number; }",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "What is the correct way to make a property optional in an interface?",
        options: [
          "name?: string",
          "name: string?",
          "name: optional string",
          "name: string | undefined",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "How do you define a union type in TypeScript?",
        options: [
          "let value: string | number",
          "let value: string || number",
          "let value: string & number",
          "let value: string + number",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is the purpose of type assertions in TypeScript?",
        options: [
          "To tell TypeScript about a type when it can't infer it",
          "To create new types",
          "To validate types at runtime",
          "To convert between types",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "How do you use type assertion?",
        options: [
          "let value = <string>someValue",
          "let value = someValue as string",
          "Both A and B",
          "let value = string(someValue)",
        ],
        correctAnswer: 2,
      },
      {
        id: 13,
        question: "What is a generic in TypeScript?",
        options: [
          "A way to create reusable components that work with multiple types",
          "A type that can be any value",
          "A function that returns any type",
          "A way to define interfaces",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "How do you define a generic function?",
        options: [
          "function identity<T>(arg: T): T { return arg; }",
          "function identity(arg: any): any { return arg; }",
          "function identity<T>(arg: any): T { return arg; }",
          "function identity(arg: T): T { return arg; }",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is the 'void' type used for?",
        options: [
          "Functions that don't return a value",
          "Variables that can't be assigned",
          "Empty objects",
          "Null values",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "How do you define a tuple in TypeScript?",
        options: [
          "let tuple: [string, number] = ['hello', 10]",
          "let tuple: [string][number] = ['hello', 10]",
          "let tuple: string, number = ['hello', 10]",
          "let tuple: array<string, number> = ['hello', 10]",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is the 'never' type in TypeScript?",
        options: [
          "A type that represents values that never occur",
          "A type for null values",
          "A type for undefined values",
          "A type for empty objects",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "How do you define an enum in TypeScript?",
        options: [
          "enum Color { Red, Green, Blue }",
          "const Color = { Red: 0, Green: 1, Blue: 2 }",
          "type Color = 'Red' | 'Green' | 'Blue'",
          "interface Color { Red: number; Green: number; Blue: number; }",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is the purpose of the 'readonly' modifier?",
        options: [
          "To make properties immutable after initialization",
          "To make properties private",
          "To make properties optional",
          "To make properties static",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "How do you define a readonly property?",
        options: [
          "readonly name: string",
          "name: readonly string",
          "name: string readonly",
          "const name: string",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is the difference between 'interface' and 'type'?",
        options: [
          "Interfaces can be extended, types can be combined",
          "Types are faster than interfaces",
          "Interfaces are only for objects, types are for everything",
          "There is no difference",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "How do you extend an interface?",
        options: [
          "interface Employee extends Person { }",
          "interface Employee implements Person { }",
          "interface Employee = Person & { }",
          "interface Employee: Person { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is the purpose of the 'strict' mode in TypeScript?",
        options: [
          "To enable stricter type checking",
          "To make compilation faster",
          "To reduce bundle size",
          "To enable experimental features",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "How do you define a function type?",
        options: [
          "type Func = (x: number) => string",
          "type Func = function(x: number): string",
          "type Func = (x: number) -> string",
          "type Func = function(x: number) => string",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is the purpose of the 'unknown' type?",
        options: [
          "A safer alternative to 'any' that requires type checking",
          "A type for undefined values",
          "A type for null values",
          "A type for empty objects",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "How do you check if a value is of a specific type?",
        options: [
          "if (typeof value === 'string')",
          "if (value is string)",
          "if (value instanceof string)",
          "if (value === string)",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is the purpose of the 'satisfies' operator?",
        options: [
          "To ensure a value matches a type without widening the type",
          "To convert between types",
          "To validate types at runtime",
          "To create new types",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "How do you use the 'satisfies' operator?",
        options: [
          "const config = { port: 3000 } satisfies Config",
          "const config = { port: 3000 } as Config",
          "const config = { port: 3000 } < Config",
          "const config = { port: 3000 } : Config",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is the purpose of the 'const' assertion?",
        options: [
          "To make an object deeply readonly",
          "To create constants",
          "To prevent reassignment",
          "To optimize performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "How do you use const assertion?",
        options: [
          "const colors = ['red', 'green', 'blue'] as const",
          "const colors = ['red', 'green', 'blue'] const",
          "const colors = readonly ['red', 'green', 'blue']",
          "const colors = ['red', 'green', 'blue']",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // TypeScript Intermediate
  {
    id: "typescript-intermediate",
    technology: "typescript",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question: "What is a mapped type in TypeScript?",
        options: [
          "A type that transforms properties of an existing type",
          "A type that maps values to keys",
          "A type that creates arrays from objects",
          "A type that converts strings to numbers",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question:
          "How do you create a mapped type that makes all properties optional?",
        options: [
          "type Partial<T> = { [P in keyof T]?: T[P] }",
          "type Partial<T> = { [P in T]?: P }",
          "type Partial<T> = { P?: T[P] for P in keyof T }",
          "type Partial<T> = { [keyof T]?: T[keyof T] }",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "What is a conditional type in TypeScript?",
        options: [
          "A type that depends on a condition using the ternary operator",
          "A type that only works in certain conditions",
          "A type that requires a boolean check",
          "A type that changes based on runtime conditions",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "How do you write a conditional type?",
        options: [
          "type NonNullable<T> = T extends null | undefined ? never : T",
          "type NonNullable<T> = T is null | undefined ? never : T",
          "type NonNullable<T> = T == null | undefined ? never : T",
          "type NonNullable<T> = T === null | undefined ? never : T",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the 'infer' keyword used for in conditional types?",
        options: [
          "To extract and infer types from other types",
          "To infer types at runtime",
          "To create new types automatically",
          "To convert between types",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question:
          "How do you use 'infer' to extract the return type of a function?",
        options: [
          "type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any",
          "type ReturnType<T> = T extends (...args: any[]) => R ? R : any",
          "type ReturnType<T> = T extends function => infer R ? R : any",
          "type ReturnType<T> = T extends (...args) => infer R ? R : any",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is a template literal type in TypeScript?",
        options: [
          "A type that uses template literal syntax to create string types",
          "A type that creates HTML templates",
          "A type that uses string interpolation",
          "A type that creates dynamic strings",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "How do you create a template literal type?",
        options: [
          "type EventName<T extends string> = `${T}Changed`",
          "type EventName<T extends string> = T + 'Changed'",
          "type EventName<T extends string> = T & 'Changed'",
          "type EventName<T extends string> = T | 'Changed'",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is a utility type in TypeScript?",
        options: [
          "A built-in type that transforms other types",
          "A type that provides utility functions",
          "A type that optimizes performance",
          "A type that handles common patterns",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What does the 'Pick' utility type do?",
        options: [
          "Creates a type with only selected properties from another type",
          "Picks random properties from a type",
          "Selects the first property from a type",
          "Creates a type with all properties except selected ones",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "How do you use the 'Pick' utility type?",
        options: [
          "type UserInfo = Pick<User, 'name' | 'email'>",
          "type UserInfo = Pick<User, ['name', 'email']>",
          "type UserInfo = Pick<User, 'name' & 'email'>",
          "type UserInfo = Pick<User, 'name' + 'email'>",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What does the 'Omit' utility type do?",
        options: [
          "Creates a type with all properties except the specified ones",
          "Omits the first property from a type",
          "Creates a type with only the specified properties",
          "Removes all properties from a type",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "How do you use the 'Omit' utility type?",
        options: [
          "type UserWithoutId = Omit<User, 'id'>",
          "type UserWithoutId = Omit<User, ['id']>",
          "type UserWithoutId = Omit<User, 'id' & 'createdAt'>",
          "type UserWithoutId = Omit<User, 'id' + 'createdAt'>",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "What is the 'Record' utility type used for?",
        options: [
          "To create an object type with specific key and value types",
          "To record function calls",
          "To create array types",
          "To define database records",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "How do you use the 'Record' utility type?",
        options: [
          "type UserMap = Record<string, User>",
          "type UserMap = Record<User, string>",
          "type UserMap = Record<string & User>",
          "type UserMap = Record<string | User>",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What is the 'Exclude' utility type used for?",
        options: [
          "To exclude specific types from a union type",
          "To exclude properties from an object type",
          "To exclude values from an array type",
          "To exclude functions from a type",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "How do you use the 'Exclude' utility type?",
        options: [
          "type NonNull = Exclude<string | null | undefined, null | undefined>",
          "type NonNull = Exclude<string | null | undefined, [null, undefined]>",
          "type NonNull = Exclude<string | null | undefined, null & undefined>",
          "type NonNull = Exclude<string | null | undefined, null + undefined>",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is the 'Extract' utility type used for?",
        options: [
          "To extract specific types from a union type",
          "To extract properties from an object type",
          "To extract values from an array type",
          "To extract functions from a type",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "How do you use the 'Extract' utility type?",
        options: [
          "type StringOnly = Extract<string | number | boolean, string>",
          "type StringOnly = Extract<string | number | boolean, [string]>",
          "type StringOnly = Extract<string | number | boolean, string & number>",
          "type StringOnly = Extract<string | number | boolean, string + number>",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "What is the 'Required' utility type used for?",
        options: [
          "To make all optional properties required",
          "To make all properties optional",
          "To make all properties readonly",
          "To make all properties nullable",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "How do you use the 'Required' utility type?",
        options: [
          "type RequiredUser = Required<User>",
          "type RequiredUser = Required<User, 'name' | 'email'>",
          "type RequiredUser = Required<User, ['name', 'email']>",
          "type RequiredUser = Required<User, 'name' & 'email'>",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is the 'Readonly' utility type used for?",
        options: [
          "To make all properties readonly",
          "To make all properties optional",
          "To make all properties required",
          "To make all properties nullable",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "How do you use the 'Readonly' utility type?",
        options: [
          "type ReadonlyUser = Readonly<User>",
          "type ReadonlyUser = Readonly<User, 'name' | 'email'>",
          "type ReadonlyUser = Readonly<User, ['name', 'email']>",
          "type ReadonlyUser = Readonly<User, 'name' & 'email'>",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "What is the 'Parameters' utility type used for?",
        options: [
          "To extract the parameter types of a function type",
          "To extract the return type of a function",
          "To extract the property types of an object",
          "To extract the element types of an array",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "How do you use the 'Parameters' utility type?",
        options: [
          "type FuncParams = Parameters<(x: number, y: string) => void>",
          "type FuncParams = Parameters<function(x: number, y: string): void>",
          "type FuncParams = Parameters<(x: number, y: string) -> void>",
          "type FuncParams = Parameters<function(x: number, y: string) => void>",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What is the 'InstanceType' utility type used for?",
        options: [
          "To extract the instance type of a constructor function",
          "To extract the type of an instance variable",
          "To extract the return type of a function",
          "To extract the parameter types of a function",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "How do you use the 'InstanceType' utility type?",
        options: [
          "type MyInstance = InstanceType<typeof MyClass>",
          "type MyInstance = InstanceType<MyClass>",
          "type MyInstance = InstanceType<new MyClass()>",
          "type MyInstance = InstanceType<MyClass.constructor>",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is the 'ThisType' utility type used for?",
        options: [
          "To specify the 'this' context in object literals",
          "To specify the type of 'this' in functions",
          "To specify the type of the current object",
          "To specify the type of the parent object",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "How do you use the 'ThisType' utility type?",
        options: [
          "const obj: ThisType<{ x: number }> = { method() { return this.x; } }",
          "const obj: ThisType<{ x: number }> = { method() { return x; } }",
          "const obj: ThisType<{ x: number }> = { method() { return this; } }",
          "const obj: ThisType<{ x: number }> = { method() { return obj.x; } }",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "What is the 'Uppercase' utility type used for?",
        options: [
          "To convert string literal types to uppercase",
          "To convert all strings to uppercase",
          "To create uppercase constants",
          "To validate uppercase strings",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // TypeScript Advanced
  {
    id: "typescript-advanced",
    technology: "typescript",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question: "What is a distributive conditional type in TypeScript?",
        options: [
          "A conditional type that distributes over union types",
          "A type that distributes values across arrays",
          "A type that handles distributed systems",
          "A type that manages data distribution",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "How do you prevent distribution in conditional types?",
        options: [
          "By wrapping the type parameter in square brackets: [T]",
          "By using the 'never' type",
          "By using the 'any' type",
          "By using the 'unknown' type",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "What is a recursive type in TypeScript?",
        options: [
          "A type that references itself in its definition",
          "A type that calls functions recursively",
          "A type that creates infinite loops",
          "A type that handles recursive data structures",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "How do you define a recursive type for a linked list?",
        options: [
          "type LinkedList<T> = { value: T; next: LinkedList<T> | null }",
          "type LinkedList<T> = { value: T; next: LinkedList<T> }",
          "type LinkedList<T> = { value: T; next: T[] }",
          "type LinkedList<T> = { value: T; next: any }",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is a branded type in TypeScript?",
        options: [
          "A type with a unique property that prevents mixing with similar types",
          "A type that represents a brand name",
          "A type that handles branding in applications",
          "A type that creates unique identifiers",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "How do you create a branded type for UserId?",
        options: [
          "type UserId = string & { readonly brand: unique symbol }",
          "type UserId = string & { brand: symbol }",
          "type UserId = string & { readonly brand: string }",
          "type UserId = string & { brand: unique symbol }",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is a phantom type in TypeScript?",
        options: [
          "A type parameter that is not used in the type definition but provides compile-time safety",
          "A type that doesn't exist at runtime",
          "A type that creates ghost objects",
          "A type that handles phantom data",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "How do you create a phantom type for a Result type?",
        options: [
          "type Result<T, E> = { success: T } | { error: E }",
          "type Result<T, E> = { data: T; error?: E }",
          "type Result<T, E> = { value: T } | { error: E }",
          "type Result<T, E> = { result: T } | { failure: E }",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is a higher-order type in TypeScript?",
        options: [
          "A type that takes other types as parameters",
          "A type that represents higher-order functions",
          "A type that handles complex operations",
          "A type that manages type hierarchies",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question:
          "How do you create a higher-order type that maps over arrays?",
        options: [
          "type MapArray<T, U> = T extends Array<infer A> ? Array<U> : never",
          "type MapArray<T, U> = T extends Array<A> ? Array<U> : never",
          "type MapArray<T, U> = T extends Array ? Array<U> : never",
          "type MapArray<T, U> = T extends any[] ? U[] : never",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is a type-level programming technique in TypeScript?",
        options: [
          "Using the type system to perform computations at compile time",
          "Programming with types instead of values",
          "Creating types that represent algorithms",
          "Using types to validate program logic",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "How do you implement a type-level Fibonacci sequence?",
        options: [
          "type Fibonacci<N extends number, A extends number[] = [1], B extends number[] = [1]> = N extends 0 ? A['length'] : Fibonacci<Minus<N, 1>, B, [...A, ...B]>",
          "type Fibonacci<N> = N extends 0 ? 0 : N extends 1 ? 1 : Add<Fibonacci<Minus<N, 1>>, Fibonacci<Minus<N, 2>>>>",
          "type Fibonacci<N> = N extends 0 | 1 ? N : Add<Fibonacci<Minus<N, 1>>, Fibonacci<Minus<N, 2>>>>",
          "type Fibonacci<N> = N extends number ? N : never",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is a type assertion function in TypeScript?",
        options: [
          "A function that validates and narrows types at runtime",
          "A function that converts between types",
          "A function that creates type assertions",
          "A function that validates type definitions",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "How do you create a type assertion function?",
        options: [
          "function isString(value: unknown): value is string { return typeof value === 'string' }",
          "function isString(value: any): boolean { return typeof value === 'string' }",
          "function isString(value: unknown): boolean { return typeof value === 'string' }",
          "function isString(value: any): value is string { return typeof value === 'string' }",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is a discriminated union type in TypeScript?",
        options: [
          "A union type with a common property that distinguishes between variants",
          "A union type that discriminates against certain values",
          "A union type that handles discriminated data",
          "A union type that creates type discrimination",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "How do you create a discriminated union for API responses?",
        options: [
          "type ApiResponse<T> = { status: 'success'; data: T } | { status: 'error'; message: string }",
          "type ApiResponse<T> = { success: T } | { error: string }",
          "type ApiResponse<T> = { type: 'success'; data: T } | { type: 'error'; message: string }",
          "type ApiResponse<T> = { result: T } | { failure: string }",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is a type predicate in TypeScript?",
        options: [
          "A function that returns a type predicate to narrow types",
          "A type that predicts future values",
          "A type that validates predictions",
          "A type that handles conditional logic",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "How do you use a type predicate with 'in' operator?",
        options: [
          "function hasProperty<T, K extends string>(obj: T, key: K): obj is T & Record<K, unknown> { return key in obj }",
          "function hasProperty<T, K extends string>(obj: T, key: K): boolean { return key in obj }",
          "function hasProperty<T, K extends string>(obj: T, key: K): obj is T { return key in obj }",
          "function hasProperty<T, K extends string>(obj: T, key: K): obj is Record<K, unknown> { return key in obj }",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is a type-level state machine in TypeScript?",
        options: [
          "A type system that enforces state transitions at compile time",
          "A type that represents a state machine",
          "A type that handles state management",
          "A type that creates state transitions",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "How do you implement a type-level state machine?",
        options: [
          "type StateMachine<S extends string, E extends string> = { state: S; event: E }",
          "type StateMachine<S, E> = { current: S; transitions: Record<S, E[]> }",
          "type StateMachine<S extends string> = { state: S; allowedTransitions: Record<S, string[]> }",
          "type StateMachine<S, E> = { state: S; event: E; next: StateMachine<S, E> }",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is a type-level parser in TypeScript?",
        options: [
          "A type system that parses strings into structured types",
          "A type that represents a parser",
          "A type that handles parsing logic",
          "A type that creates parse trees",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "How do you create a type-level parser for CSV strings?",
        options: [
          "type CSVParser<S extends string> = S extends `${infer Head},${infer Tail}` ? [Head, ...CSVParser<Tail>] : [S]",
          "type CSVParser<S> = S extends string ? string[] : never",
          "type CSVParser<S extends string> = S extends `${infer T},${infer R}` ? [T, ...CSVParser<R>] : [S]",
          "type CSVParser<S> = S extends `${string},${string}` ? string[] : [S]",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is a type-level arithmetic in TypeScript?",
        options: [
          "Performing mathematical operations using the type system",
          "Creating types that represent numbers",
          "Using types for calculations",
          "Implementing math functions with types",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "How do you implement type-level addition?",
        options: [
          "type Add<A extends number, B extends number> = [...TupleOf<A>, ...TupleOf<B>]['length']",
          "type Add<A, B> = A extends number ? B extends number ? number : never : never",
          "type Add<A extends number, B extends number> = A + B",
          "type Add<A, B> = number",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is a type-level validation in TypeScript?",
        options: [
          "Using the type system to validate data structures at compile time",
          "Creating types that validate input",
          "Using types for runtime validation",
          "Implementing validation logic with types",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "How do you create a type-level validator for email addresses?",
        options: [
          "type IsEmail<S extends string> = S extends `${string}@${string}.${string}` ? true : false",
          "type IsEmail<S> = S extends string ? boolean : never",
          "type IsEmail<S extends string> = S extends `${infer Local}@${infer Domain}` ? true : false",
          "type IsEmail<S> = S extends `${string}@${string}` ? true : false",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is a type-level router in TypeScript?",
        options: [
          "A type system that routes requests based on URL patterns",
          "A type that represents routing logic",
          "A type that handles URL parsing",
          "A type that creates route definitions",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "How do you implement a type-level router?",
        options: [
          "type Router<Routes extends Record<string, any>> = { [K in keyof Routes]: Routes[K] }",
          "type Router<Routes> = Routes extends Record<string, any> ? Routes : never",
          "type Router<Routes extends Record<string, any>> = { route: keyof Routes; params: Routes[keyof Routes] }",
          "type Router<Routes> = { [K in keyof Routes]: { path: K; handler: Routes[K] } }",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is a type-level database schema in TypeScript?",
        options: [
          "A type system that represents database schemas and enforces relationships",
          "A type that represents database tables",
          "A type that handles database operations",
          "A type that creates schema definitions",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "How do you create a type-level database schema?",
        options: [
          "type Schema = { users: { id: number; name: string; email: string }; posts: { id: number; userId: number; title: string } }",
          "type Schema<T> = T extends Record<string, any> ? T : never",
          "type Schema = Record<string, Record<string, any>>",
          "type Schema<T extends Record<string, any>> = { [K in keyof T]: T[K] }",
        ],
        correctAnswer: 0,
      },
    ],
  },
];
