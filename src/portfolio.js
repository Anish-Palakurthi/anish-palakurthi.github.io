const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://anishpalakurthi.com',
  title: 'AP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Anish Palakurthi',
  role: 'Student at UT Austin',
  description:
    'Interested in systems, machine learning, and building cool things.',
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
    name: 'Deep-RL for DVFS',
    description:
      'Developed a Deep-Q Network as a Linux kernel patch to dynamically adjust processor clock speed and supply voltage using deep reinforcement learning. Published paper on research efforts in the space.',
    stack: ['C', 'stress-ng', 'k-test', 'Linux'],
    // sourceCode: 'https://github.com/anish-palakurthi/CellSampleIdentifier',
    livePreview: 'https://drive.google.com/file/d/13IJ9pubQ60-lnC0nsTSYuv24C_hNyYWH/view?usp=sharing',
  },
  {
    name: 'Poke-Gan',
    description:
      'Wasserstein Generative Adversarial Networks use generator and discriminator networks to morph D-dimensional noise vectors into indistinguishable samples. The networks compete in generating accurate Pokémon and discriminating new from real.',
    stack: ['TensorFlow', 'Python'],
    // sourceCode: 'https://github.com/anish-palakurthi/RainfallPredictor',
    livePreview: 'https://shorturl.at/ejCL9',
  },
  {
    name: 'Pascal Compiler',
    description:
      'Designed and implemented a compiler to generate x86 instructions from Pascal files.',
    stack: ['C', 'yacc', 'lex'],
    // sourceCode: 'https://github.com/anish-palakurthi/APIStockPage',
    livePreview: 'https://github.com/anish-palakurthi/pascal_x86_compiler',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Rust',
  'Java',
  'React',
  'TypeScript',
  'C',
  'C++',
  'SQL',
  'Docker',
  'git',
  'WebAssembly'


]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'anish.palakurthi@utexas.edu',
}

export { header, about, projects, skills, contact }
