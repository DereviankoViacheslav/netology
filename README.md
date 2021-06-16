## Запустить проект

git clone

cd <path_to_project>

git checkout hw_1_2

npm install

npm link

### Посмотреть год/месяц/дату

simple-date current

simple-date current --year (-y)

simple-date current --month (-m)

simple-date current --date (-d)

### Посмотреть год/месяц/дату в будущем

simple-date add --year (-y)

simple-date add --month (-m)

simple-date add --date (-d)

#### пример:

simple-date add -d 1 -m 2 -y 3

### Посмотреть год/месяц/дату в прошлом

simple-date sub --year (-y)

simple-date sub --month (-m)

simple-date sub --date (-d)

#### пример:

simple-date sub -d 1 -m 2 -y 3

### Игра "Угадай число"

pick-number

### Удалить линки

npm unlink
