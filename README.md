# Repositório de Teste Automatizado com Playwright - qrPet
Este repositório contém um exemplo de automação de testes utilizando o Playwright, demonstrando a funcionalidade de geração de código. Ele foi criado como parte de um artigo publicado no blog [4future](https://4future.com.br/index.php/2024/08/21/o-gerador-de-codigos-do-playwright/), onde exploramos as capacidades do Playwright e como ele pode ser utilizado para acelerar o desenvolvimento de testes end-to-end.

## Sobre o qrPet
O [qrPet](https://qrpet.vercel.app/) é uma aplicação desenvolvida como um projeto pessoal, onde usuários podem se cadastrar e criar perfis para seus animais de estimação. A plataforma gera um QR code para cada pet, que direciona para uma página com as informações do animal e os dados de contato do dono. Esse QR code é útil em caso de perda do pet, permitindo que quem o encontrar possa facilmente contatar o dono.

## O que este repositório contém?
Este repositório contém um exemplo prático de automação de teste para a funcionalidade de login no sistema qrPet. O código foi gerado utilizando o recurso de geração de código do Playwright, o que permite capturar interações com a interface do usuário e transformá-las automaticamente em um script de teste.

## Estrutura do Repositório
login.spec.ts: Arquivo de teste onde foi implementado o exemplo prático de automação.
playwright.config.ts: Arquivo de configuração do Playwright, configurado para rodar os testes de forma eficaz.

### Como Executar os Testes
Clone o repositório:

```bash
git clone https://github.com/seu-usuario/qrpet-playwright-test.git
```
Navegue até a pasta do projeto:

```bash
cd qrpet-playwright-test
```

Instale as dependências:

```bash
npm npm install
npx playwright install --with-deps
```
Execute o teste:

```bash
npx playwright test
```
## Artigo no 4future
Este repositório é parte de um artigo no blog [4future](https://4future.com.br/index.php/2024/08/21/o-gerador-de-codigos-do-playwright/), onde exploramos a funcionalidade de geração de código do Playwright em detalhes. Confira o artigo para entender melhor como esse teste foi criado e como o Playwright pode ajudar a simplificar o processo de automação.
