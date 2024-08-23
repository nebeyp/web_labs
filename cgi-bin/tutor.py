# #вывод в таблицу
# import cgi, sys
# form = cgi.FieldStorage()         # извлечь данные из формы
# print("Content-type: text/html")  # плюс пустая строка

# html1 = """
# <TITLE>таблица с анкетой</TITLE>
# <H1></H1>
# <table border =2> <tr>  <td>Имя поля</td><td>Значение</td>  </tr>
# """

# # печать заголовка таблицы
# print (html1)


# ll = ['имя','размер обуви','должность', 'Любимый язык программирования','комментарий']

# data = ['','','','','']; i=0
# for field in ('name', 'shoesize', 'job', 'language', 'comment'):
#     if not field in form:
#         data[i] = '(unknown)'
#     else:

#         if not isinstance(form[field], list):
#             data[i] = form[field].value
#         else:
#             values = [x.value for x in form[field]]
#             data[i] = ', '.join(values)
#     i+=1

# for i in range(5):
#    print ('<tr><td> %s </td> <td> %s </td></tr>'% (ll[i], data[i]))

# print (' </table>')


import cgi

# Определяем тип контента как HTML
print("Content-type: text/html")
print()

try:
    # Открываем файл со стилями и считываем его содержимое
    with open("style_response.css", "r") as f:
        css_style = f.read()

    # Выводим стили в тег <style>
    print(f"<style>{css_style}</style>")
except Exception as e:
    print(f"Ошибка при открытии файла со стилями: {e}")

# Выводим начало HTML-кода
print("<html><head><title>Результаты анкеты</title></head><body>")

# Печатаем заголовок и начало таблицы
print("<h1>Результаты анкеты</h1>")
print("<table>")
print("<tr><th>Имя поля</th><th>Значение</th></tr>")

# Получаем данные из формы
form = cgi.FieldStorage()

# Список полей формы
fields = ['surname', 'name', 'patronymic', 'proglvl', 'activity', 'language', 'comment', 'password']
data = {}

# Обработка данных формы
for field in fields:
    if not field in form:
        data[field] = '(unknown)'
    else:
        if not isinstance(form[field], list):
            data[field] = form[field].value
        else:
            values = [x.value for x in form[field]]
            data[field] = ', '.join(values)

# Выводим данные в виде таблицы
for field in fields:
    print(f"<tr><td>{field.capitalize()}</td><td>{data[field]}</td></tr>")

# Заканчиваем таблицу и HTML-код
print("</table>")
print("</body></html>")