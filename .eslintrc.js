module.exports = {
	root: true, // Make sure eslint picks up the config at the root of the directory
	parser: '@typescript-eslint/parser',
	parserOptions: {
	  ecmaVersion: 2020, // Use the latest ecmascript standard
	  sourceType: 'module', // Allows using import/export statements
	  ecmaFeatures: {
		jsx: true // Enable JSX since we're using React
	  }
	},
	settings: {
	  react: {
		version: 'detect' // Automatically detect the react version
	  }
	},
	env: {
	  browser: true, // Enables browser globals like window and document
	  amd: true, // Enables require() and define() as global variables as per the amd spec.
	  node: true // Enables Node.js global variables and Node.js scoping.
	},
	extends: [
	  'eslint:recommended',
	  'plugin:react/recommended',
	  'plugin:jsx-a11y/recommended',
	  'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
	  'plugin:@typescript-eslint/eslint-recommended',
	  'plugin:@typescript-eslint/recommended'
	],
	rules: {
	  'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source,
	  'react/react-in-jsx-scope': 'off',
	  'react/prop-types': 'off',
	  'react/display-name': 'off',
	  '@typescript-eslint/explicit-function-return-type': 'off',
	  '@typescript-eslint/ban-types': 'off',
	  'jsx-a11y/anchor-is-valid': [
		'error',
		{
		  components: ['Link'],
		  specialLink: ['hrefLeft', 'hrefRight'],
		  aspects: ['invalidHref', 'preferButton']
		}
	  ],
	  'import/order': [
		'error',
		{
		  groups: ['builtin', 'external', 'internal'],
		  pathGroups: [
			{
			  pattern: 'react',
			  group: 'external',
			  position: 'before'
			}
		  ],
		  pathGroupsExcludedImportTypes: ['react'],
		  'newlines-between': 'always',
		  alphabetize: {
			order: 'asc',
			caseInsensitive: true
		  }
		}
	  ],
	  'no-console': 1, // Warning to reduce console logs used throughout app,
	  'max-lines': ['error', { max: 250, skipComments: true }],
	  'max-statements': ['error', { max: 25 }],
	  'no-empty-function': 'off',
	  'jsx-a11y/no-autofocus': 'off'
	},
	plugins: ['import']
  };
  