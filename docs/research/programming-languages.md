# Языки программирования: первая линия атласа

Добавлены 15 новых событий и 8 связей. Семь существующих карточек Simula, Smalltalk и C++ включены в новую тему без дублирования. Переписывание Unix на C получило вторую тему — языки. Все новые записи остаются draft.

## Что показывает линия

Языки возникают для разных задач: численных расчётов, деловых данных, обучения, работы с символами, доказательств, системного и веб-программирования. Линия не изображает единую лестницу, где каждый следующий язык лучше предыдущего.

## Новые события

| Дата | Карточка / ID | Источники |
| --- | --- | --- |
| 1957 | Fortran и оптимизирующий компилятор · `fortran-debut` | [IBM · История Fortran](https://www.ibm.com/history/fortran) |
| 1958 | Начало реализации Lisp · `lisp-implementation` | [Джон Маккарти · History of Lisp](https://www-formal.stanford.edu/jmc/lisp/lisp.html) |
| 1959 | Первый проект COBOL · `cobol-draft` | [Smithsonian · First Draft of the Programming Language COBOL](https://www.si.edu/object/first-draft-programming-language-cobol%3Anmah_1389377) |
| 1960-05 | Публикация отчёта ALGOL 60 · `algol60-report` | [Петер Наур и комитет · Report on the Algorithmic Language ALGOL 60](https://doi.org/10.1145/367236.367262); [CHM Software Preservation Group · История стандартов ALGOL](https://softwarepreservation.computerhistory.org/ALGOL/standards.html) |
| 1964-05-01 | Первые успешные программы BASIC · `dartmouth-basic` | [Dartmouth · BASIC at Dartmouth](https://www.dartmouth.edu/basicfifty/basic.html) |
| 1967 | Первый компилятор BCPL · `bcpl-compiler` | [Мартин Ричардс · How BCPL Evolved from CPL](https://www.cl.cam.ac.uk/~mr10/cpl2bcpl.pdf) |
| 1969–1970 | Томпсон создаёт B · `b-language` | [Деннис Ритчи · The Development of the C Language](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/chist.html) |
| 1970-11 | Технический отчёт о Pascal · `pascal-report` | [Никлаус Вирт · The Programming Language Pascal · 1970](https://www.research-collection.ethz.ch/items/514c7df1-8a1c-46c3-af34-2b7938131aeb); [Никлаус Вирт · Summary of Projects, 1962–1999](https://people.inf.ethz.ch/wirth/projects.html) |
| 1971–1973 | От B к языку C · `c-language-development` | [Деннис Ритчи · The Development of the C Language](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/chist.html) |
| 1972 | Ранний Prolog · `prolog-origin` | [CHM Software Preservation Group · Prolog Historical Sources](https://softwarepreservation.computerhistory.org/prolog/) |
| 1973 | ML как метаязык LCF · `ml-lcf` | [Маккуин, Харпер, Реппи · The History of Standard ML](https://www.cs.cmu.edu/~rwh/papers/history/main.pdf) |
| 1975-12 | Первый отчёт Scheme · `scheme-first-report` | [Сассман и Стил · Scheme: An Interpreter for Extended Lambda Calculus](https://research.scheme.org/lambda-papers/lambda-papers-scheme-report.html) |
| 1991-02 | Первая публичная версия Python · `python-first-public` | [Гвидо ван Россум · Python’s Early Days](https://legacy.python.org/doc/essays/ppt/jpf001/tsld006.htm); [Python · General FAQ: Why Was Python Created?](https://docs.python.org/3/faq/general.html#why-was-python-created-in-the-first-place) |
| 1995 | Публичный дебют Java · `java-public-debut` | [Oracle · A Brief History of Java](https://education.oracle.com/file/general/4955_BriefHistoryOfJava_7.pdf); [Джеймс Гослинг · Свидетельство об истории Java](https://www.justice.gov/atr/statement-dr-james-gosling-us-v-microsoft-corp-and-state-new-york-ex-rel-v-microsoft-corp); [Аллен Вирфс-Брок и Брендан Айк · JavaScript: The First 20 Years](https://www.wirfs-brock.com/allen/jshopl.pdf) |
| 1995-12-04 | Анонс JavaScript · `javascript-announcement` | [Аллен Вирфс-Брок и Брендан Айк · JavaScript: The First 20 Years](https://www.wirfs-brock.com/allen/jshopl.pdf) |

## Основания новых связей

- algol60-report → simula-i: Ранняя Simula разрабатывалась с опорой на ALGOL 60. Это языковая преемственность, а не утверждение, что объекты уже были готовы в ALGOL.
- algol60-report → pascal-report: Pascal продолжает алгоритмическую традицию ALGOL через работу Вирта. Между карточками пропущены ALGOL W и другие промежуточные проекты.
- bcpl-compiler → b-language: Томпсон использовал BCPL как основу для проектирования B.
- b-language → c-language-development: C возникает при преобразовании B: добавляются типы и меняется реализация.
- c-language-development → unix-c: Развитие C позволяет переписать на нём ядро Unix в 1973. Разработка языка и перенос системы показаны разными событиями.
- c-language-development → c-with-classes: C with Classes расширяет C средствами организации программы под влиянием Simula. Это соединение двух языковых линий.
- lisp-implementation → scheme-first-report: Авторы Scheme прямо описывают его как Lisp-подобный язык; при этом указывают также влияние Actors.
- scheme-first-report → javascript-announcement: В ранний JavaScript вошли Scheme-подобные подходы к функциям как значениям. Это влияние отдельных идей, а не реализация Scheme под другим именем.

## Редакционные решения

- Символическое программирование Lisp показано с начала реализации 1958; статья 1960 не считается началом всех идей.
- COBOL — коллективная работа. Отдельные участники не назначены единоличными авторами без оснований.
- ALGOL 60 датирован исходным отчётом мая 1960; Revised Report 1963 не смешивается с ним. Полный оригинал отчёта по DOI при разборе не прочитан; библиография сверена по архиву.
- BCPL: набросок 1966 и первый компилятор 1967 — разные вехи.
- Развитие C показано периодом 1971–1973, отдельно от переписывания Unix и последующей стандартизации языка.
- Pascal и Scheme датированы конкретными отчётами; даты публикации, начала работы и реализации не сливаются.
- Ранний ML при LCF не называется готовым Standard ML.
- Python: начало реализации 1989, публичная версия в феврале 1991.
- Java: дебют 1995 отделён от JDK 1.0 1996. JavaScript: прототип, LiveScript, анонс нового имени и выпуск различаются; карточка фиксирует анонс 4 декабря 1995.
- Сходство синтаксиса не считается доказательством прямого влияния. Связь Scheme → JavaScript относится к функциям и идиомам, а не ко всей семантике языка.
- Ограничение «с 1995 удалить» применено ранее к линии Кремниевой долины. Новые события Java и JavaScript относятся к языкам; удалённые карточки AMD не восстановлены.
- Один объект базы может относиться к нескольким темам. На карте он показан один раз в основной линии; фильтры учитывают все его темы.

## Что осталось для следующих расширений

Машинный код и ранние ассемблеры; Plankalkül; A-0 и FLOW-MATIC; CPL и ALGOL W; PL/I, APL, Forth, SQL, Ada, Objective-C, Self, Erlang, Haskell, Perl и Ruby; стандарты ANSI C и ECMAScript; языки XXI века. Их отсутствие означает ограниченный объём первой выборки, не оценку исторической важности.

## Хранение

Тема lang и записи используют существующий формат niti/v1: Markdown с YAML, постоянные ID, отдельные люди, организации, источники и связи. Сборка создаёт статические JS/JSON; серверной базы нет. Проверка структуры не заменяет историческую рецензию.
