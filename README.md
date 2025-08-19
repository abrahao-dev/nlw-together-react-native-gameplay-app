# 🎮 GamePlay

<div align="center">
  <img src="assets/icon.png" alt="GamePlay Logo" width="120"/>

  **Conecte-se e organize suas jogatinas!**

  [![React Native](https://img.shields.io/badge/React%20Native-0.63.2-blue.svg)](https://reactnative.dev/)
  [![Expo](https://img.shields.io/badge/Expo-42.0.1-black.svg)](https://expo.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-4.0.0-blue.svg)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

## 📋 Sobre o Projeto

**GamePlay** é um aplicativo mobile desenvolvido em React Native com integração ao Discord, que permite aos usuários criar grupos para jogar seus games favoritos com amigos. O projeto foi desenvolvido durante a **Mission: React Native** da **<nlw/> Together**, evento realizado entre 20 e 27 de junho de 2021.

### 🎯 Funcionalidades

- ✅ **Autenticação com Discord** - Login integrado com a plataforma Discord
- ✅ **Interface Moderna** - Design responsivo e intuitivo
- ✅ **Navegação Fluida** - Sistema de navegação entre telas
- ✅ **Perfil de Usuário** - Exibição de informações do usuário logado
- ✅ **Tema Escuro** - Interface com tema dark para melhor experiência
- ✅ **Fontes Customizadas** - Tipografia personalizada com Inter e Rajdhani

## 🚀 Tecnologias Utilizadas

### Core
- **[React Native](https://reactnative.dev/)** - Framework para desenvolvimento mobile
- **[Expo](https://expo.dev/)** - Plataforma de desenvolvimento e build
- **[TypeScript](https://www.typescriptlang.org/)** - Linguagem de programação tipada

### Navegação
- **[React Navigation](https://reactnavigation.org/)** - Sistema de navegação entre telas
- **[Stack Navigator](https://reactnavigation.org/docs/stack-navigator/)** - Navegação em pilha

### UI/UX
- **[Expo Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/)** - Fontes personalizadas (Inter e Rajdhani)
- **[Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)** - Gradientes visuais
- **[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)** - Gestos e interações

### Desenvolvimento
- **[Babel](https://babeljs.io/)** - Transpilador JavaScript
- **[Expo App Loading](https://docs.expo.dev/versions/latest/sdk/app-loading/)** - Tela de carregamento

## 📱 Screenshots

### Tela de Login
- Interface de autenticação com Discord
- Ilustração atrativa
- Design responsivo

### Tela Principal
- Perfil do usuário
- Saudação personalizada
- Interface limpa e moderna

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) (para Android) ou [Xcode](https://developer.apple.com/xcode/) (para iOS)

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/nlw-together-react-native-gameplay-app.git
   cd nlw-together-react-native-gameplay-app
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto**
   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Escaneie o QR Code**
   - Use o app **Expo Go** no seu dispositivo móvel
   - Escaneie o QR Code que aparecerá no terminal
   - Ou pressione `a` para abrir no Android ou `i` para iOS

### Scripts Disponíveis

```bash
npm start          # Inicia o servidor de desenvolvimento
npm run android    # Executa no Android
npm run ios        # Executa no iOS
npm run web        # Executa na web
```

## 📁 Estrutura do Projeto

```
nlw-together-react-native-gameplay-app/
├── src/
│   ├── @types/           # Definições de tipos TypeScript
│   ├── assets/           # Imagens e recursos visuais
│   ├── components/       # Componentes reutilizáveis
│   │   ├── Avatar/       # Componente de avatar
│   │   ├── Background/   # Componente de fundo
│   │   ├── ButtonIcon/   # Botão com ícone
│   │   └── Profile/      # Componente de perfil
│   ├── global/           # Estilos globais e temas
│   ├── routes/           # Configuração de navegação
│   └── screens/          # Telas da aplicação
│       ├── Home/         # Tela principal
│       └── SignIn/       # Tela de login
├── assets/               # Assets do Expo
├── App.tsx              # Componente principal
└── package.json         # Dependências e scripts
```

## 🎨 Design System

### Design UI/UX
- **[Figma Design](https://www.figma.com/community/file/991338130828322960)** - Arte completa do projeto no Figma Community

### Cores
- **Primary**: Azul escuro (#0D133D)
- **Secondary**: Vermelho (#E51C44)
- **Background**: Transparente com gradiente
- **Text**: Branco (#FFFFFF)

### Tipografia
- **Inter**: Fontes regulares e médias
- **Rajdhani**: Fontes médias e bold

## 🔧 Configuração do Ambiente

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
# Discord OAuth2 Configuration
DISCORD_CLIENT_ID=seu_client_id_aqui
DISCORD_REDIRECT_URI=seu_redirect_uri_aqui
```

### Configuração do Discord
1. Acesse o [Discord Developer Portal](https://discord.com/developers/applications)
2. Crie uma nova aplicação
3. Configure as URLs de redirecionamento
4. Copie o Client ID para o arquivo `.env`

## 📦 Build e Deploy

### Build para Produção

```bash
# Android
expo build:android

# iOS
expo build:ios
```

### Publicação no Expo

```bash
expo publish
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Matheus Alvares**
- GitHub: [@mamalvares](https://github.com/mamalvares)
- LinkedIn: [Matheus Alvares](https://www.linkedin.com/in/matheus-alvares/)

## 🙏 Agradecimentos

- **[Rocketseat](https://rocketseat.com.br/)** pela organização do evento NLW Together
- **[Tiago Luchtenberg](https://github.com/tluchtenberg)** pelo ensino e mentoria
- Comunidade React Native pela documentação e suporte

---

<div align="center">
  <p>Desenvolvido com ❤️ durante a <strong>NLW Together</strong></p>
  <p>Mission: React Native | 20-27 de junho de 2021</p>
</div>

