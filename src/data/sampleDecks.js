export const sampleDecks = [
  {
    id: 'deck-seg3125',
    title: 'BIO 1130 Cell Biology Essentials',
    category: 'Biology',
    description:
      'Review organelles, membranes, and transport processes before your next cell biology quiz.',
    createdAt: '2026-03-13T09:00:00.000Z',
    updatedAt: '2026-03-20T15:30:00.000Z',
    lastStudiedAt: '2026-03-21T20:10:00.000Z',
    studyCount: 2,
    cards: [
      {
        id: 'card-heur-1',
        front: 'What is the main function of the mitochondrion?',
        back: 'It produces ATP through cellular respiration.',
        order: 1,
      },
      {
        id: 'card-heur-2',
        front: 'What structure controls movement into and out of the cell?',
        back: 'The plasma membrane.',
        order: 2,
      },
      {
        id: 'card-heur-3',
        front: 'What does the nucleus store?',
        back: 'The cell’s genetic material in the form of DNA.',
        order: 3,
      },
      {
        id: 'card-heur-4',
        front: 'What process moves water across a semipermeable membrane?',
        back: 'Osmosis.',
        order: 4,
      },
    ],
  },
  {
    id: 'deck-csi3140',
    title: 'CSI 3140 Database Foundations',
    category: 'Databases',
    description:
      'Practice core terms for data modeling, keys, relationships, and normalization before Lab 9.',
    createdAt: '2026-03-10T12:00:00.000Z',
    updatedAt: '2026-03-19T18:15:00.000Z',
    lastStudiedAt: '2026-03-20T13:20:00.000Z',
    studyCount: 1,
    cards: [
      {
        id: 'card-db-1',
        front: 'What is a primary key?',
        back: 'A column or set of columns that uniquely identifies each row in a table.',
        order: 1,
      },
      {
        id: 'card-db-2',
        front: 'What does a many-to-many relationship require in a relational schema?',
        back: 'A junction table that stores the foreign keys for both related tables.',
        order: 2,
      },
      {
        id: 'card-db-3',
        front: 'What is normalization used for?',
        back: 'To reduce redundancy and improve data integrity by organizing attributes into well-structured tables.',
        order: 3,
      },
      {
        id: 'card-db-4',
        front: 'What is a foreign key?',
        back: 'A field that references a primary key in another table to enforce relationships.',
        order: 4,
      },
    ],
  },
  {
    id: 'deck-psy1101',
    title: 'PSY 1101 Cognitive Psychology',
    category: 'Psychology',
    description:
      'Memorize core definitions about memory, attention, and learning for your upcoming midterm.',
    createdAt: '2026-03-09T08:30:00.000Z',
    updatedAt: '2026-03-18T11:45:00.000Z',
    lastStudiedAt: null,
    studyCount: 0,
    cards: [
      {
        id: 'card-psy-1',
        front: 'What is working memory?',
        back: 'A limited-capacity system used to hold and manipulate information over short periods.',
        order: 1,
      },
      {
        id: 'card-psy-2',
        front: 'What is selective attention?',
        back: 'Focusing cognitive resources on one stimulus while filtering out competing information.',
        order: 2,
      },
      {
        id: 'card-psy-3',
        front: 'What is encoding?',
        back: 'The process of transforming information into a format that can be stored in memory.',
        order: 3,
      },
      {
        id: 'card-psy-4',
        front: 'What is retrieval practice?',
        back: 'Actively recalling information from memory to strengthen long-term retention.',
        order: 4,
      },
    ],
  },
  {
    id: 'deck-mat1320',
    title: 'MAT 1320 Differential Calculus',
    category: 'Mathematics',
    description:
      'Sharpen definitions and formulas for limits, derivatives, and optimization problems.',
    createdAt: '2026-03-08T10:15:00.000Z',
    updatedAt: '2026-03-17T16:00:00.000Z',
    lastStudiedAt: null,
    studyCount: 0,
    cards: [
      {
        id: 'card-math-1',
        front: 'What is the derivative of x^2?',
        back: '2x.',
        order: 1,
      },
      {
        id: 'card-math-2',
        front: 'What does a limit describe?',
        back: 'The value a function approaches as the input approaches a given point.',
        order: 2,
      },
      {
        id: 'card-math-3',
        front: 'What is an optimization problem?',
        back: 'A problem that asks for the maximum or minimum value of a quantity under constraints.',
        order: 3,
      },
      {
        id: 'card-math-4',
        front: 'What does f’(x) represent geometrically?',
        back: 'The slope of the tangent line to the function at x.',
        order: 4,
      },
    ],
  },
]
