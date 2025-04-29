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
    ],
  },
];
