import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import vuePlugin from 'eslint-plugin-vue'
import prettierPlugin from 'eslint-plugin-prettier'
import checkFilePlugin from 'eslint-plugin-check-file'
import prettierConfig from 'eslint-config-prettier/flat'

export default tseslint.config(
  {
    ignores: ['node_modules/**', 'dist/**', '**/*.json'],
  },
  js.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  ...vuePlugin.configs['flat/recommended'],
  {
    files: ['src/**/*.{ts,vue}'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        parser: tseslint.parser,
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'enum',
          format: ['PascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['PascalCase'],
        },
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
          prefix: ['T'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
        },
      ],
    },
  },
  {
    files: ['**/*.scss'],
    processor: 'check-file/eslint-processor-check-file',
  },
  {
    files: ['src/**/*.*'],
    plugins: {
      prettier: prettierPlugin,
      'check-file': checkFilePlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'check-file/no-index': [
        'error',
        {
          ignoreMiddleExtensions: true,
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/*/': 'CAMEL_CASE',
        },
      ],
      'check-file/filename-naming-convention': [
        'error',
        {
          'src/components/*.vue': 'PASCAL_CASE',
          'src/composables/*.ts': 'CAMEL_CASE',
          'src/data/*.json': 'SNAKE_CASE',
          'src/helpers/*.ts': 'CAMEL_CASE',
          'src/services/*.ts': 'PASCAL_CASE',
        },
      ],
    },
  },
  prettierConfig
)
