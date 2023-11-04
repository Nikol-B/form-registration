# form-registration
1. Vue 2.*


### Задание


1. Сверстать форму регистрации, согласно макету   https://www.figma.com/file/RzfLe0cwuP26lGIy3bBgdz/MamodTestFrontend?type=design&node-id=0%3A1&mode=design&t=wpvbhcFaqv9EThYh-1


2. Варианты в селекте “Должность” - любой произвольный набор данных, в формате 


[


  { value: number, name: string },


  { value: number, name: string },


  ...etc


]


3. Чекбокс согласия на обработку персональных данных - по умолчанию установлен. Но если его выключить, то форма не должна отправляться.


4. Реализовать функциональность отправки данных моковым POST запросом со следующими параметрами:


// Все поля обязательны


public: boolean 


username: string


role: number


email: string


password: string


password_repeat: string


5. Интерактивно отработать ошибку невведённых данных (подсветка поля, надпись под ним и тп.) 


6. При успешной  регистрации - скрыть форму и отобразить текст “Регистрация успешно завершена” в произвольных стилях
