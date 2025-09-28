/*
Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Проверьте, что айди в респонсе === 201
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
*/

import { use } from "react";

const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

async function createTodo(userId, title, completed) {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify({
                userId,
                title,
                completed
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        if (data.id !== 201) {
            throw new Error(`Unexpected ID: ${data.id}`);
        }

        return data;
    }
    catch (error) {
        console.error('Error while creating todo:', error);
    }
    finally {
        console.log('Completed');
    }
}

createTodo({userId: 1, title: 'New Todo', completed: false})
