import { makeAutoObservable } from "mobx";

class Image {
  src = "https://sun9-46.userapi.com/impf/c638119/v638119547/252ac/Nx2LRNr4_h0.jpg?size=540x540&quality=96&sign=ea4aeb586e1c30a4514c8ad0c58071a5&type=album";

  constructor() {
    //функция делающая данный класс отслеживающим:
    makeAutoObservable(this);
  }
  
  //функция-action изменяющая состояние переменной src:
  change(url) {
    this.src = url;
  }
}

export default new Image();
