# Gerador de Senhas React Native

Este projeto é um aplicativo React Native simples que gera senhas aleatórias e permite que o usuário as copie para a área de transferência.

## Funcionalidades

* **Geração de Senha:** Um botão "Gerar senha" cria uma senha aleatória.
* **Copiar para a Área de Transferência:** A senha gerada é exibida em um campo de texto, e ao tocar nesse campo, a senha é copiada para a área de transferência.
* **Interface Amigável:** A interface utiliza fontes personalizadas (Darker Grotesque) e ícones para uma experiência de usuário agradável.

## Requisitos

* Node.js e npm (ou Yarn) instalados.
* Expo CLI instalado (`npm install -g expo-cli`).
* Um emulador ou dispositivo físico para executar o aplicativo.

## Como Executar

1.  **Clone o Repositório (se aplicável):**
    * Clone-o para sua máquina local.

2.  **Instale as Dependências:**
    * Navegue até o diretório do projeto no terminal.
    * Execute `npm install` ou `yarn install` para instalar as dependências do projeto.

3.  **Execute o Aplicativo:**
    * Execute `expo start` para iniciar o servidor Expo.
    * Você pode escanear o código QR com o aplicativo Expo Go em seu dispositivo móvel ou usar um emulador.

## Estrutura do Código

* **`App.js`:**
    * Este é o componente principal do aplicativo.
    * Gerencia o estado da senha (`pass`) e as funções para gerar e copiar a senha.
    * Renderiza a interface do usuário, incluindo o botão de geração, o campo de texto da senha e o ícone de copiar.
    * Utiliza bibliotecas como expo-clipboard e fontawesome para copiar o texto e utilizar icones.
    * Utiliza a biblioteca expo-google-fonts para utilizar a fonte Darker Grotesque.
* **`services/passwordService.js`:**
    * Este arquivo contém a função `generatePass()` que gera a senha aleatória.
* **`assets/logo.png`:**
    * Contém o logo do aplicativo.
* **`app.json`:**
    * Arquivo de configuração do Expo.
* **`package.json`:**
    * Lista de dependências e scripts do projeto.

## Explicação do Código

* **`useState`:** É usado para gerenciar o estado da senha (`pass`).
* **`handleGenerateButton()`:** Gera uma nova senha chamando `generatePass()` e atualiza o estado `pass`.
* **`handleCopyButton()`:** Copia a senha para a área de transferência usando `Clipboard.setStringAsync(pass)`.
* **`useFonts`:** Carrega as fontes personalizadas Darker Grotesque.
* **`StyleSheet`:** Define os estilos para os componentes da interface do usuário.
* **`TextInput`:** Exibe a senha gerada e permite que o usuário a copie.
* **`TouchableOpacity`:** Torna os botões interativos.
* **`FontAwesomeIcon`:** Exibe o ícone de copiar.

## Personalização

* Você pode personalizar o estilo do aplicativo modificando o objeto `styles` em `App.js`.
* A função `generatePass()` em `services/passwordService.js` pode ser modificada para alterar a complexidade e o comprimento das senhas geradas.
* A logo pode ser alterada substituindo o arquivo `assets/logo.png`.

## Dependências

* `expo-status-bar`: Para gerenciar a barra de status.
* `react-native`: A biblioteca principal do React Native.
* `expo-google-fonts/darker-grotesque`: Para usar as fontes Darker Grotesque.
* `expo-clipboard`: Para copiar texto para a área de transferência.
* `@fortawesome/react-native-fontawesome`: Para utilizar icones do fontawesome.
* `@fortawesome/free-regular-svg-icons/faPaste`: Para utilizar o icone de colar.