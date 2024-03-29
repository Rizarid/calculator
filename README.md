# Конструктор калькулятора
Тестовое задание компании Sendsay. Посмотреть рабочую версию можно на [DEMO](https://rizarid.github.io/calculator/) странице.

## Запуск проекта
Склонируйте репазиторий:
```
git clone git@github.com:Rizarid/calculator.git
```
Установите зависимости:
```
cd calculator
npm i
```
Для запуска на локальном сервере выполните команду:
```
npm start
```
Для сборки проекта запустите команду:
```
npm run build
```

## Задание
> **Задача**: вам нужно сделать drag-and-drop конструктор, с помощью которого можно собрать калькулятор
> 

### Что нужно сделать?

Нужно написать SPA приложение на React'e и выложить его на github.

### [Интерфейс, который должен получиться](https://www.figma.com/file/pdYzuOkvXY3Q00YRAMsLuz/Calculator-Constructor?node-id=613%3A1089)

### **Основная часть экрана - холст**

На холст можно бросать компоненты из палитры. Все элементы, брошенные на холст, располагаются вертикально.

При перетаскивании должна подсветиться зона, куда вставится элемент

Элемент удаляется с холста по dblclick

### **Сайдбар с набором компонентов**.

Их всего 4:

- дисплей (на холсте он может находиться только в самом верху),
- цифровой блок с кнопками от `0` до `9` и `,` (дробь)
- кнопки операций: `x`, `/`, `+`, `-`
- и отдельно кнопка `=`

Все компоненты одинаковой ширины.

Каждый элемент можно бросить на холст только один раз, Затем они становятся неактивными (визуально - opacity 50%).

### **Переключатель между режимом конструктора и runtime**

Это может быть обычный свитчер в углу экрана.

- в режиме конструктора можно собирать интерфейс, но при нажатии на кнопки, они ничего не делают.
- в режиме runtime перетаскивать ничего нельзя (можно полностью скрывать сайдбар), но работает калькулятор (или то что собрали).Нажимаем на кнопки и видим результат на дисплее.

### **Стэк**:

- TypeScript, React
- redux / redux-thunk / redux toolkit / redux-saga - на ваше усмотрение
- css framework - на ваше усмотрение
- eslint