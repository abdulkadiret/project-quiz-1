module.exports = [
  {
    name: 'html',
    text: 'What does HTML stand for?',
    qType: 'radio',
    answers: [
      {
        _id: 1,
        text: 'Hyper text markup language',
        isCorrect: true,
      },
      {
        _id: 2,
        text: 'Home tool markup language',
        isCorrect: false,
      },
      {
        _id: 3,
        text: 'Hyperlinks text markup language',
        isCorrect: false,
      },
      {
        _id: 4,
        text: 'Hyperlinks text language',
        isCorrect: false,
      },
    ],
  },
  {
    name: 'html',
    text: 'Choose the correct HTML element for the largest heading:',
    qType: 'radio',
    answers: [
      {
        _id: 1,
        text: 'heading',
        isCorrect: false,
      },
      {
        _id: 2,
        text: 'h1',
        isCorrect: true,
      },
      {
        _id: 3,
        text: 'head',
        isCorrect: false,
      },
      {
        _id: 4,
        text: 'h6',
        isCorrect: false,
      },
    ],
  },
  {
    name: 'html',
    text: 'What is the correct HTML element for inserting a line break?',
    qType: 'radio',
    answers: [
      {
        _id: 1,
        text: 'break',
        isCorrect: false,
      },
      {
        _id: 2,
        text: 'br',
        isCorrect: true,
      },
      {
        _id: 3,
        text: 'hr',
        isCorrect: false,
      },
      {
        _id: 4,
        text: 'ir',
        isCorrect: false,
      },
    ],
  },
  {
    name: 'html',
    text: 'What is the correct HTML for adding a background color?',
    qType: 'radio',
    answers: [
      {
        _id: 1,
        text: '<background>yellow</background>',
        isCorrect: false,
      },
      {
        _id: 2,
        text: "<body style='background-color:yellow';>",
        isCorrect: true,
      },
      {
        _id: 3,
        text: "<body style='color:yellow';>",
        isCorrect: false,
      },
      {
        _id: 4,
        text: "<body by='yellow'>",
        isCorrect: false,
      },
    ],
  },
  {
    name: 'html',
    text: 'What is the correct HTML for creating a hyperlink?',
    qType: 'radio',
    answers: [
      {
        _id: 1,
        text: "<a name='http://www.w3school.com'>W3School.com</a>",
        isCorrect: false,
      },
      {
        _id: 2,
        text: "<a href='http://www.w3school.com'>W3School.com</a>",
        isCorrect: true,
      },
      {
        _id: 3,
        text: "<a src='http://www.w3school.com'>W3School.com</a>",
        isCorrect: false,
      },
      {
        _id: 4,
        text: "<a url='http://www.w3school.com'>W3School.com</a>",
        isCorrect: false,
      },
    ],
  },

  {
    name: 'css',
    text: 'What is the correct HTML for referring to an external style sheet?',
    qType: 'radio',
    answers: [
      {
        _id: 1,
        text: "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
        isCorrect: true,
      },
      {
        _id: 2,
        text: '<stylesheet>mystyle.css</stylesheet>',
        isCorrect: false,
      },
      {
        _id: 3,
        text: "<style src='mystyle.css'>",
        isCorrect: false,
      },
      {
        _id: 4,
        text: "<style name='mystyle.css'>",
        isCorrect: false,
      },
    ],
  },

  {
    name: 'css',
    text: 'Which HTML tag is used to define an internal style sheet?',
    qType: 'radio',
    answers: [
      {
        _id: 1,
        text: 'class',
        isCorrect: false,
      },
      {
        _id: 2,
        text: '<css>',
        isCorrect: false,
      },
      {
        _id: 3,
        text: '<style>',
        isCorrect: true,
      },
      {
        _id: 4,
        text: '<script>',
        isCorrect: false,
      },
    ],
  },

  {
    name: 'css',
    text: 'How do you change the text color of an element?',
    qType: 'radio',
    answers: [
      {
        _id: 1,
        text: 'text-color:',
        isCorrect: false,
      },
      {
        _id: 2,
        text: 'background-color',
        isCorrect: false,
      },
      {
        _id: 3,
        text: 'color',
        isCorrect: true,
      },
      {
        _id: 4,
        text: 'font-color',
        isCorrect: false,
      },
    ],
  },
  {
    name: 'css',
    text: 'Which is the correct CSS syntax?',
    qType: 'radio',
    answers: [
      {
        _id: 1,
        text: '{body;color:black;}',
        isCorrect: false,
      },
      {
        _id: 2,
        text: 'body:color=black;',
        isCorrect: false,
      },
      {
        _id: 3,
        text: '{body:color=black;}',
        isCorrect: false,
      },
      {
        _id: 4,
        text: 'body {color:black;}',
        isCorrect: true,
      },
    ],
  },
  {
    name: 'css',
    text: 'How do you insert a comment in a CSS file?',
    qType: 'checkbox',
    answers: [
      {
        _id: 1,
        text: '/* this is a comment */',
        isCorrect: true,
      },
      {
        _id: 2,
        text: '// this is a comment',
        isCorrect: false,
      },
      {
        _id: 3,
        text: '// this is a comment //',
        isCorrect: false,
      },
      {
        _id: 4,
        text: '<!-- this is a comment -->',
        isCorrect: true,
      },
    ],
  },
  {
    name: 'js',
    text: 'Inside which HTML element do we put the JavaScript??',
    qType: 'radio',
    answers: [
      {
        _id: 1,
        text: '<script>',
        isCorrect: true,
      },
      {
        _id: 2,
        text: '<scripting>',
        isCorrect: false,
      },
      {
        _id: 3,
        text: '<style>',
        isCorrect: false,
      },
      {
        _id: 4,
        text: '<js>',
        isCorrect: false,
      },
    ],
  },
  {
    name: 'js',
    text:
      "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
    qType: 'radio',
    answers: [
      {
        _id: 1,
        text: "document.getElementById('demo').innerHTML='Hello World!;",
        isCorrect: true,
      },
      {
        _id: 2,
        text: "document.getElement('p').innerHTML='Hello World!;",
        isCorrect: false,
      },
      {
        _id: 3,
        text: "document.getElementByName('p').innerHTML='Hello World!;",
        isCorrect: false,
      },
      {
        _id: 4,
        text: "demo.innerHTML='Hello World!;",
        isCorrect: false,
      },
    ],
  },
  {
    name: 'js',
    text:
      ' Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?',
    qType: 'radio',
    answers: [
      {
        _id: 1,
        text: 'concat()',
        isCorrect: false,
      },
      {
        _id: 2,
        text: 'every()',
        isCorrect: false,
      },
      {
        _id: 3,
        text: 'some()',
        isCorrect: false,
      },
      {
        _id: 4,
        text: 'filter()',
        isCorrect: true,
      },
    ],
  },
  {
    name: 'js',
    text:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    qType: 'radio',
    answers: [
      {
        _id: 1,
        text: "<script name='xxx.js'>",
        isCorrect: false,
      },
      {
        _id: 2,
        text: "<script src='xxx.js'>",
        isCorrect: true,
      },
      {
        _id: 3,
        text: "<script href='xxx.js'>",
        isCorrect: false,
      },
      {
        _id: 4,
        text: "<script url='xxx.js'>",
        isCorrect: false,
      },
    ],
  },
  {
    name: 'js',
    text: 'How do you create a function in JavaScript?',
    qType: 'radio',
    answers: [
      {
        _id: 1,
        text: 'function = myFunction()',
        isCorrect: false,
      },
      {
        _id: 2,
        text: 'function myFunction()',
        isCorrect: true,
      },
      {
        _id: 3,
        text: 'function:myFunction()',
        isCorrect: false,
      },
      {
        _id: 4,
        text: 'function myFunction =()',
        isCorrect: false,
      },
    ],
  },
];
