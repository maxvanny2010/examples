npm i -g jsdoc
npm i -d jsdoc

#### tags:

[allowUnknownTags]: разрешает использование неизвестных тегов.
[dictionaries]: указывает на словарь для анализа тегов, в данном случае, это словарь JSDoc для документирования
JavaScript кода.

#### source:

[include]: указывает на директорию src, где находятся исходные файлы.
[includePattern]: регулярное выражение для включения файлов с расширениями .js или .docx.
[excludePattern]: регулярное выражение для исключения файлов, начинающихся с символа подчеркивания (_).

#### opts:

[destination]: указывает директорию ./docs/, где будут сохраняться сгенерированные документы.
[recurse]: включает рекурсивный поиск файлов в указанной директории.
[template]: указывает на шаблон для генерации документации.

#### plugins:

[plugins/markdown]: подключает плагин для обработки Markdown файлов.

#### templates:

[cleverLinks, monospaceLinks, includeDate]: различные настройки для шаблонов, такие как включение дат или использование
специальных ссылок.