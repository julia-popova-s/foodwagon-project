![Preview](/public/preview.jpg)

В данном проекте реализован функционал интернет-магазина, в котором пользователи могут выбирать рестораны, искать любимые блюда и добавлять их в корзину. Авторизация/регистрация пользователя осуществляется с помощью email и пароля, после чего пользователь перенаправляется на главную страницу.

## Технологии:
- **React**
- **Redux Toolkit** (хранение данных)
- **React Router** (навигация)
- **Axios + Fetch** (отправка запроса на бэкенд)
- React Hooks (хуки)
- Prettier (форматирование кода)
- CSS-Modules / SCSS (стилизация)
- React Content Loader (скелетон)
- React Pagination (пагинация)
- Lodash.Debounce (отсрочка запросов)
- Firebase (авторизация)

## Подготовка

Перед началом работы убедитесь, что на вашем компьютере установлены Node.js и npm.

## Клонирование репозитория

1. Склонируйте репозиторий проекта на свой компьютер с помощью следующей команды:

```bash
git clone https://github.com/julia-popova-s/foodwagon_project.git
```

Для более подробной информации по работе с Git через консоль, обратитесь к статье [Работа с git через консоль](https://htmlacademy.ru/blog/git/git-console).

2. Перейдите в папку проекта

```bash
cd foodwagon_project
```

## Установка зависимостей

3.Установите необходимые зависимости проекта с помощью следующей команды:

```bash
npm install
```

## Запуск проект

4.  Запустите проект в режиме разработки

```bash
npm run dev
```

## Доступные скрипты

- `dev`: Запускает проект в режиме разработки с помощью Webpack.

- `predeploy`: Собирает проект для production-режима.

- `lint`: Выполняет проверку и исправление ошибок кода проекта с помощью ESLint.

## Настройка ESLint и Prettier

Для автоматической проверки и форматирования кода проекта используются конфигурации ESLint и Prettier. Для настройки автоматического применения исправлений при сохранении файлов в вашей среде разработки (IDE), следуйте указаниям ниже.

## Visual Studio Code (VSCode):

### ESLint:

1. В файле настроек VSCode (File > Preferences > Settings) добавьте следующую строку:

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

Теперь при сохранении файлов в VSCode, ESLint будет автоматически применять исправления.

### Prettier:

1. В файле настроек VSCode (File > Preferences > Settings) добавьте следующие строки:

```json
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
},
"[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
},
"[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
}
```

Теперь при сохранении файлов в VSCode, Prettier будет автоматически форматировать их в соответствии с настройками.

## WebStorm:

### ESLint:

В настройках WebStorm перейдите в раздел Languages & Frameworks > JavaScript > Code Quality Tools > ESLint и отметьте опцию "Auto-fix on Save". Это позволит ESLint автоматически применять исправления при сохранении файлов в WebStorm.

### Prettier:

В настройках WebStorm перейдите в раздел Languages & Frameworks > JavaScript > Prettier и отметьте опцию "Run on save for files".
Это настроит Prettier на автоматическое форматирование файлов в соответствии с настройками при сохранении в WebStorm.

## Использование других пакетных менеджеров

Если вы предпочитаете использовать другие менеджеры пакетов, такие как Yarn или PNPM, следуйте указанным ниже шагам:

### Yarn

1. Установите Yarn на свой компьютер, используя инструкции из [официальной документации](https://yarnpkg.com/getting-started/install).
2. Склонируйте репозиторий проекта на свой компьютер.
3. Перейдите в папку проекта.
4. Установите зависимости проекта с помощью команды `yarn install`.
5. Запустите проект с помощью команды `yarn dev`.

Все скрипты остаются такими же, как и в случае использования npm.

### PNPM

1. Установите PNPM на свой компьютер, используя инструкции из [официальной документации](https://pnpm.io/installation).
2. Склонируйте репозиторий проекта на свой компьютер.
3. Перейдите в папку проекта.
4. Установите зависимости проекта с помощью команды `pnpm install`.
5. Запустите проект с помощью команды `pnpm run dev`.

Все скрипты остаются такими же, как и в случае использования npm.

Независимо от выбранного менеджера пакетов, вы можете использовать все предоставленные скрипты без изменений.
