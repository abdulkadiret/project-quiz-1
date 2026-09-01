module.exports = [
  {
    category: 'html',
    questionText: 'What does HTML stand for?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'Hyper text markup language',
        isCorrect: true,
      },
      {
        optionId: 2,
        optionText: 'Home tool markup language',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: 'Hyperlinks text markup language',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: 'Hyperlinks text language',
        isCorrect: false,
      },
    ],
  },
  {
    category: 'html',
    questionText: 'Choose the correct HTML element for the largest heading:',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'heading',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: 'h1',
        isCorrect: true,
      },
      {
        optionId: 3,
        optionText: 'head',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: 'h6',
        isCorrect: false,
      },
    ],
  },
  {
    category: 'html',
    questionText:
      'What is the correct HTML element for inserting a line break?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'break',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: 'br',
        isCorrect: true,
      },
      {
        optionId: 3,
        optionText: 'hr',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: 'ir',
        isCorrect: false,
      },
    ],
  },
  {
    category: 'html',
    questionText: 'What is the correct HTML for adding a background color?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: '<background>yellow</background>',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: "<body style='background-color:yellow';>",
        isCorrect: true,
      },
      {
        optionId: 3,
        optionText: "<body style='color:yellow';>",
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: "<body by='yellow'>",
        isCorrect: false,
      },
    ],
  },
  {
    category: 'html',
    questionText: 'What is the correct HTML for creating a hyperlink?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: "<a name='http://www.w3school.com'>W3School.com</a>",
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: "<a href='http://www.w3school.com'>W3School.com</a>",
        isCorrect: true,
      },
      {
        optionId: 3,
        optionText: "<a src='http://www.w3school.com'>W3School.com</a>",
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: "<a url='http://www.w3school.com'>W3School.com</a>",
        isCorrect: false,
      },
    ],
  },

  {
    category: 'css',
    questionText:
      'What is the correct HTML for referring to an external style sheet?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText:
          "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
        isCorrect: true,
      },
      {
        optionId: 2,
        optionText: '<stylesheet>mystyle.css</stylesheet>',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: "<style src='mystyle.css'>",
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: "<style name='mystyle.css'>",
        isCorrect: false,
      },
    ],
  },

  {
    category: 'css',
    questionText: 'Which HTML tag is used to define an internal style sheet?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'class',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: '<css>',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: '<style>',
        isCorrect: true,
      },
      {
        optionId: 4,
        optionText: '<script>',
        isCorrect: false,
      },
    ],
  },

  {
    category: 'css',
    questionText: 'How do you change the text color of an element?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'text-color:',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: 'background-color',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: 'color',
        isCorrect: true,
      },
      {
        optionId: 4,
        optionText: 'font-color',
        isCorrect: false,
      },
    ],
  },
  {
    category: 'css',
    questionText: 'Which is the correct CSS syntax?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: '{body;color:black;}',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: 'body:color=black;',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: '{body:color=black;}',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: 'body {color:black;}',
        isCorrect: true,
      },
    ],
  },
  {
    category: 'css',
    questionText: 'How do you insert a comment in a CSS file?',
    questionType: 'checkbox',
    options: [
      {
        optionId: 1,
        optionText: '/* this is a comment */',
        isCorrect: true,
      },
      {
        optionId: 2,
        optionText: '// this is a comment',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: '// this is a comment //',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: '<!-- this is a comment -->',
        isCorrect: true,
      },
    ],
  },
  {
    category: 'js',
    questionText: 'Inside which HTML element do we put the JavaScript??',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: '<script>',
        isCorrect: true,
      },
      {
        optionId: 2,
        optionText: '<scripting>',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: '<style>',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: '<js>',
        isCorrect: false,
      },
    ],
  },
  {
    category: 'js',
    questionText:
      "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: "document.getElementById('demo').innerHTML='Hello World!;",
        isCorrect: true,
      },
      {
        optionId: 2,
        optionText: "document.getElement('p').innerHTML='Hello World!;",
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: "document.getElementByName('p').innerHTML='Hello World!;",
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: "demo.innerHTML='Hello World!;",
        isCorrect: false,
      },
    ],
  },
  {
    category: 'js',
    questionText:
      ' Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'concat()',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: 'every()',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: 'some()',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: 'filter()',
        isCorrect: true,
      },
    ],
  },
  {
    category: 'js',
    questionText:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: "<script name='xxx.js'>",
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: "<script src='xxx.js'>",
        isCorrect: true,
      },
      {
        optionId: 3,
        optionText: "<script href='xxx.js'>",
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: "<script url='xxx.js'>",
        isCorrect: false,
      },
    ],
  },
  {
    category: 'js',
    questionText: 'How do you create a function in JavaScript?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'function = myFunction()',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: 'function myFunction()',
        isCorrect: true,
      },
      {
        optionId: 3,
        optionText: 'function:myFunction()',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: 'function myFunction =()',
        isCorrect: false,
      },
    ],
  },
  {
    category: 'node',
    questionText: 'What npm stands for?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'Node Package Manager',
        isCorrect: true,
      },
      {
        optionId: 2,
        optionText: 'Node Project Manager',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: 'New Project Manager',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: 'New Package Manager',
        isCorrect: false,
      },
    ],
  },
  {
    category: 'node',
    questionText: 'Node.js runs on __________',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'Client',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: 'Server',
        isCorrect: true,
      },
      {
        optionId: 3,
        optionText: 'Both, server and client',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: 'None of the above',
        isCorrect: false,
      },
    ],
  },

  {
    category: 'node',
    questionText: 'Node.js is ________ by default.',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'Synchronous',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: 'Multi-threaded',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: 'Asynchronous',
        isCorrect: true,
      },
      {
        optionId: 4,
        optionText: 'None of the above',
        isCorrect: false,
      },
    ],
  },

  {
    category: 'node',
    questionText:
      'Which of the following core module is used to create a web server in Node.js?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'fs',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: 'url',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: 'connect',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: 'http',
        isCorrect: true,
      },
    ],
  },

  {
    category: 'node',
    questionText: 'How to import module in Node.js?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'Using require() function.',
        isCorrect: true,
      },
      {
        optionId: 2,
        optionText: 'Using module.import',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: 'Using include() function',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: 'Using app.use() function',
        isCorrect: false,
      },
    ],
  },

  {
    category: 'react',
    questionText: 'Which of the following is true when you call setState()?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'Reloads the component',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: 'Executes asynchronously',
        isCorrect: true,
      },
      {
        optionId: 3,
        optionText: 'Updates data alone',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: 'Updates the Real DOM',
        isCorrect: false,
      },
    ],
  },
  {
    category: 'react',
    questionText: 'what Is used to pass data to a component from outside?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'setState',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: 'state',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: 'propTypes',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: 'props',
        isCorrect: true,
      },
    ],
  },
  {
    category: 'react',
    questionText: 'What is the attribute used to declare a CSS class in a JSX?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: 'classname',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: 'class',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: 'className',
        isCorrect: true,
      },
      {
        optionId: 4,
        optionText: 'cssClass',
        isCorrect: false,
      },
    ],
  },
  {
    category: 'react',
    questionText:
      'How do you write an inline style specifying the font-size:12px and color:red; in JSX?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: "style={{font-size:12,color:'red'}}",
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: "style={{fontSize:'12px',color:'red'}}",
        isCorrect: true,
      },
      {
        optionId: 3,
        optionText: "style={fontSize:'12px',color:'red'}",
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: "style={{font-size:12px,color:'red'}}",
        isCorrect: false,
      },
    ],
  },
  {
    category: 'react',
    questionText:
      'Which of the following is correct syntax for a button click event handler, foo?',
    questionType: 'radio',
    options: [
      {
        optionId: 1,
        optionText: '<button onclick={this.foo()}>',
        isCorrect: false,
      },
      {
        optionId: 2,
        optionText: '<button onclick={this.foo}>',
        isCorrect: false,
      },
      {
        optionId: 3,
        optionText: '<button onClick={this.foo()}>',
        isCorrect: false,
      },
      {
        optionId: 4,
        optionText: '<button onClick={this.foo}>',
        isCorrect: true,
      },
    ],
  },
];
