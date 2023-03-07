import { useState } from "react";
import Image from "./store/Image";
import { observer } from "mobx-react-lite";

//завернем компонент App в функцию observer чтобы react понимал что его нужно перерендерить
const App = observer(() => {

  //стейт-переменная с ссылкой на картинку пользователя
  const [url, setUrl] = useState('');
    
  const handleEditButtonClick = () => {
    Image.change(url);
    setUrl('');
  };

  //задаем данные
  function handleChangeUrl(e) {
    const value = e.target.value;
    setUrl(value);
  };
  
  return (

    <main>
      
      <header className="main__header">
        <h1>Приложение для просмотра изображений</h1>
      </header>

      <section>
        <p>(тест MobX)</p>
        <img src={Image.src} alt='Картинка пользователя' className="photo-grid__image"/>
        <p className="main__text">Вставьте ссылку на изображение</p>
        <input placeholder='Ваша ссылка' value={url} onChange={handleChangeUrl} className="main__input"/>
        <p className="main__text">Для просмотра изображения нажмите</p>
        <button onClick={handleEditButtonClick}  className="body__header-button">Открыть</button>
      </section>

    </main>

  );
});

export default App;
