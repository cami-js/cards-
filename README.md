# Descripción del Proyecto


Este proyecto es una aplicación de React que muestra cartas de monstruos obtenidas de la API de Yu-Gi-Oh!. Permite ver las tres primeras cartas de monstruos y muestra el nombre, la imagen y la descripción de cada carta.


## Componentes


### `App.js`


El componente `App.js` es el componente principal de la aplicación. Es responsable de envolver todos los componentes con el contexto proporcionado por `CardContextProvider`.


### `Card.js`


El componente `Card.js` es el encargado de mostrar las cartas de monstruos en la aplicación. Utiliza el contexto `CardContext` para acceder a los datos de las cartas y renderiza las tres primeras cartas en forma de tarjetas.


### `CardContextProvider.js`


El componente `CardContextProvider.js` es un proveedor de contexto que proporciona el contexto `CardContext` a toda la aplicación. Utiliza el hook `useState` y el hook `useEffect` para obtener los datos de las cartas de la API de Yu-Gi-Oh! y los almacena en el estado. Luego, proporciona este estado a través del contexto `CardContext` para que otros componentes puedan acceder a él.


### `cardContext.js`


El archivo `cardContext.js` define el contexto `CardContext` utilizado en la aplicación. Este contexto se utiliza para compartir los datos de las cartas entre los componentes de la aplicación.


## Instalación


1. Clonar este repositorio:
   ```
   git clone https://github.com/cami-js/cards-.git
   ```

2. Instala las dependencias del proyecto:
   ```
   npm install
   ```

3. Inicia la aplicación:
   ```
   npm run dev
   ```
 
 
