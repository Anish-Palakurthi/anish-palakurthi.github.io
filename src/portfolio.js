const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://anish-palakurthi.github.io/',
  title: 'AP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Anish Palakurthi',
  role: 'Student at UT Austin',
  description:
    'Interested in venture capital, machine learning, and climate/bio deep tech.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/anish-palakurthi/',
    github: 'https://github.com/anish-palakurthi',
    medium: 'https://medium.com/@anish.palakurthi_19568'
  },
  profilePicture: 'src/assets/images/profilepicture.jpg'
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'The Big Bang Theory Episode Recommender',
    description:
      'Built a content-based recommender system to recommend episodes of The Big Bang Theory based on user input.',
    stack: ['Python', 'scikit-learn', 'Gensim', 'Latent Dirichlet Allocation', 'K-Means Clustering', 'SpaCy'],
    // sourceCode: 'https://github.com/anish-palakurthi/CellSampleIdentifier',
    livePreview: 'https://github.com/anish-palakurthi/thebigbangtheoryproj',
  },
  {
    name: 'Rainfall Predictor',
    description:
      'Trained a Convolutional Neural Network to predict if there will be rain the following day based on select weather parameters.',
    stack: ['Pytorch', 'Pandas', 'scikit-learn'],
    // sourceCode: 'https://github.com/anish-palakurthi/RainfallPredictor',
    livePreview: 'https://github.com/anish-palakurthi/RainfallPredictor',
  },
  {
    name: 'Self Driving Car',
    description:
      'Retrofitted toy car with Adafruit Feather 32u4, designed wiring, printed PCB board, and soldered microcontroller to motors/sensors to drive autonomously.',
    stack: ['C++', 'Arduino'],
    // sourceCode: 'https://github.com/anish-palakurthi/APIStockPage',
    livePreview: 'https://drive.google.com/file/d/1rcBwl_TuCFlNTcllMXzG1oFueUPaXVFD/view?usp=sharing',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Pandas',
  'Java',
  'C',
  'SQL',
  'React',
  'JavaScript',
  'Keras',
  'scikit-learn',
  'Tailwind',
  'Postman',
  'Microsoft Azure',
  'git',
  'Docker',
  'Flask',
  'MSSQL',
  'Firestore',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'anish.palakurthi@utexas.edu',
}

export { header, about, projects, skills, contact }
