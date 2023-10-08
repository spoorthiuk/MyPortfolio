const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://spoorthiuk.github.io/portfolio',
  title: 'About Me',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Spoorthi Uday Karakaraddi',
  role: 'Software Engineer • Data Scientist • Machine Learning Engineer',
  description:
    'Student at Arizona State University pursuing Master of Science in Computer Science with Big Data concentration. AI and ML entusiast, eager to explore the transformative potential of AI in building cutting edge software solutions.',
  resume: 'https://drive.google.com/file/d/1GaHBzZjBhgtmFVtIWRGo5fW601aMiiGB/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/spoorthiuk2703/',
    github: 'https://github.com/spoorthiuk/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Image Describer with CNN and LSTM',
    description:
      'This project helps visually impaired people perceive images',
    stack: ['Python', 'LSTM', 'CNN'],
    sourceCode: 'https://github.com/spoorthiuk/Image-Describer',
    livePreview: 'https://github.com/spoorthiuk/Image-Describer',
    Blog: 'https://spoorthiuday27.medium.com/seeing-beyond-pixels-building-an-image-describer-with-cnn-and-lstm-ab565fe5e33e',
  },
  {
    name: 'Data Processor - Analyze, Process and visualize data',
    description:
      'This project helps visually impaired people perceive images',
    stack: ['Python', 'Flask', 'Data Preprocessing'],
    sourceCode: 'https://github.com/spoorthiuk/Image-Describer',
    livePreview: 'https://github.com',
  },
  {
    name: 'GPS Position Prediction and Correction using Kalman Filter',
    description:
      'Reducing the error in GPS measurements using Kalman Filter and an IMU',
    stack: ['Python', 'Embedded C', 'Raspberry Pi'],
    sourceCode: 'https://github.com/spoorthiuk/GPS-position-prediction-and-correction-using-Kalman-Filter',
    Blog: 'https://github.com/spoorthiuk/GPS-position-prediction-and-correction-using-Kalman-Filter',
  },
]

const programLan = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python', 'R', 'SQL', 'C/ C++', 'Matlab', 'HTML', 'Flask', 'Go', 'Java', 'JavaScript', 'CSS'
]
const databases = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'MySQL','PostgresSQL','MongoDB',
]

const tools = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Apache Spark','Tableau','Git', 'GitHub', 'Bash', 'Jupyter Notebooks', 'tensorFlow', 'Seaborn', 'Pandas', 'Jira', 'Postman', 'MS Excel'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'spoorthiudayk@gmail.com',
}

export { header, about, projects, programLan, databases, tools, contact}
