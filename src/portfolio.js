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
    'Passionate about writing, venture capital, psychology of sports, and productive environments. Interested in data engineering, machine learning, management consulting, and traditional and quantitative finance.',
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
    name: 'Rainfall Predictor',
    description:
      'Trained a Convolutional Neural Network to predict if there will be rain the following day based on select weather parameters.',
    stack: ['Pytorch', 'Pandas', 'Jupyter Notebook', 'scikit-learn'],
    // sourceCode: 'https://github.com/anish-palakurthi/RainfallPredictor',
    livePreview: 'https://github.com/anish-palakurthi/RainfallPredictor',
  },
  {
    name: 'Tumor Identifier',
    description:
      'Visualizes data and uses scikit-learn self-fitting Decision Tree to predict if tumor is benign or malignant.',
    stack: ['Pandas', 'Jupyter Notebook', 'scikit-learn'],
    // sourceCode: 'https://github.com/anish-palakurthi/CellSampleIdentifier',
    livePreview: 'https://github.com/anish-palakurthi/CellSampleIdentifier',
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
  'Java',
  'JavaScript',
  'React',
  'C',
  'SQL',
  'Pandas',
  'Flask',
  'TensorFlow',
  'Postman',
  'Git',
  'AzureDevOps',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'anish.palakurthi@utexas.edu',
}

export { header, about, projects, skills, contact }
