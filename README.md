## Descrição

API para uma aplicação de quiz.

## Instalação

```bash
$ npm install
```

## Executando aplicação

```bash
$ npm run start:dev
```

## Banco de dados

O banco de dados utilizado é o MySQL, já hospedado na plataforma PlanetScale.
As credenciais para conexão ao banco de dados estão no arquivo .env.
Para uma conexão local, basta alterar o arquivo .env.

## Dados

Os dados inseridos inicialmente, estão apresentados na query abaixo:

```bash
INSERT INTO book (description) VALUES ('Português');
INSERT INTO book (description) VALUES ('Inglês');
INSERT INTO book (description) VALUES ('Espanhhol');

INSERT INTO grade (description) VALUES ('1 Serie');
INSERT INTO grade (description) VALUES ('2 Serie');
INSERT INTO grade (description) VALUES ('3 Serie');
INSERT INTO grade (description) VALUES ('4 Serie');
INSERT INTO grade (description) VALUES ('5 Serie');

INSERT INTO task (question, grade_id, book_id) VALUES ('O que significa a sigla CPU?',1,1);
INSERT INTO task (question, grade_id, book_id) VALUES ('Qual das seguintes empresas é conhecida por seus dispositivos móveis, como o iPhone e o iPad?',1,1);
INSERT INTO task (question, grade_id, book_id) VALUES ('O que é um firewall em relação à segurança cibernética?',1,1);
INSERT INTO task (question, grade_id, book_id) VALUES ('O que é um loop em programação?',1,1);
INSERT INTO task (question, grade_id, book_id) VALUES ('O que significa a sigla HTML em termos de programação para a web?',1,1);

INSERT INTO answer (description, is_correct, task_id) VALUES ('Central Processing Unit',true,1);
INSERT INTO answer (description, is_correct, task_id) VALUES ('Computer Processing Unit',false,1);
INSERT INTO answer (description, is_correct, task_id) VALUES ('Core Processing Unit',false,1);
INSERT INTO answer (description, is_correct, task_id) VALUES ('Cabeça Pensante Unilateral',false,1);

INSERT INTO answer (description, is_correct, task_id) VALUES ('Apple',true,2);
INSERT INTO answer (description, is_correct, task_id) VALUES ('Samsung',false,2);
INSERT INTO answer (description, is_correct, task_id) VALUES ('Microsoft',false,2);
INSERT INTO answer (description, is_correct, task_id) VALUES ('Nokia',false,2);

INSERT INTO answer (description, is_correct, task_id) VALUES ('Uma barreira de segurança que monitora e controla o tráfego de rede.',true,3);
INSERT INTO answer (description, is_correct, task_id) VALUES ('Um dispositivo que protege contra sobrecargas de energia.',false,3);
INSERT INTO answer (description, is_correct, task_id) VALUES ('Um programa que verifica e remove vírus de um computador.',false,3);
INSERT INTO answer (description, is_correct, task_id) VALUES ('Um goleiro profissional.',false,3);

INSERT INTO answer (description, is_correct, task_id) VALUES ('Uma sequência de instruções que é executada repetidamente.',true,4);
INSERT INTO answer (description, is_correct, task_id) VALUES ('Um erro de sintaxe no código.',false,4);
INSERT INTO answer (description, is_correct, task_id) VALUES ('Uma função que retorna um valor específico.',false,4);
INSERT INTO answer (description, is_correct, task_id) VALUES ('Resetar o computador.',false,4);

INSERT INTO answer (description, is_correct, task_id) VALUES ('HyperText Markup Language',true,5);
INSERT INTO answer (description, is_correct, task_id) VALUES ('Home Tool Markup Language',false,5);
INSERT INTO answer (description, is_correct, task_id) VALUES ('Hyperlink and Text Markup Language',false,5);
INSERT INTO answer (description, is_correct, task_id) VALUES ('HyperV and Text Markup Language',false,5);
```
