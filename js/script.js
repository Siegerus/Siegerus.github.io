//var name = "Siegerus";
//let number = 7;
//const pi = 3.14;

//let leftBorderWidth = 200;
 //number
 //string
 //true/false
 //null
 //undefined

/* let obj = {
    name = 'apple';
    color = 'green';
    weight = 
} */
//Symbol


//alert (12323)
//console.log (pi);
//let answer = confirm ("Вам есть 18?");  //Задаём переменную, которая будет равна ответу на вопрос.
//console.log (answer);                  //и она выведется в консоле в формате ответа true /false.

//let answer = prompt ("Вам есть 18?", "");
//console.log (answer);          

//let isChecked = true,  // "&&" логический оператор "и". Консоль выведет true если и галочка будет стоять и модюокно бкдет закрыто (пример).
   // isClose = true;
//console.log (isChecked && isClose);
//console.log (isChecked || isClose);    // "||"  оператор "или".

//if (2*4 == 8*2ё) {    //Если выражение будет верно, то в консоли выведется "верно."        
   // console.log ('Верно')
//} else {                   // Если нет, то "ошибка".
//    console.log ('Ошибка')
//}

//let answer = confirm ("Вам есть 18?"); 
//if (answer == true) {          
 //   console.log('Проходите')
//} else {
 //   console.log('Уходи');
//}

//let num = 58;
//if (num < 49) {                  //Если "num" будет меньше 49 - выведеться "неправильно"
//    console.log('Неправильно')   
//} else if (num > 100) {          //Если будет больше 49, но при этом больше 100, то выведеться "Много"
//    console.log('Много')       
//} else {                        // Если и это условие не выполняется, то выведется "верно".
//    console.log('Верно')  
//}

//for (let i = 1; i < 8; i++) {      //Для переменной "i", котрая равна 1, будет продолжаться цикл  до тех пор, пока она не достигнет 8ми. 
 //   console.log(i);                //Каждый шаг (итерацию) будет прибавляться i+1. Цикл -вывод в консоль значение i.    

//} 

//function logging(a, b) {               // "logging" - дали название функции.
    //console.log(a + b);
//}

//logging(4, 5);                        // Теперь вызываем функцию


$(document).ready(function(){       //$(document).ready(function(){  }); - прописывается только 1 раз. Дальше уже всё пишется внутрь её.
    $('.carousel__inner').slick({
       // dots: true,                     //"dots" - кружочки внизу, их можно застилизовать.
        speed: 300,
        slidesToShow: 1,               //  "slidesToShow" - сколько слайдов показывать за раз.
        variableWidth: true,          // "variableWidth" - что бы слайдер сам пдстраивал картинки разной высоты внутри слайдера.
        //autoplay: true,            // автопереключение слайдера.
       // autoplaySpeed: 2000,
        //fade: true,
        //cssEase: 'linear'
        //arrows: false               // включение и выключение стрелочек.
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.svg"></button>' ,  // добавляем свои стрелочки.
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.svg"></button>' , // пути как пишем как будто мы в index html, т.к скрипты работают напрямую.
        responsive: [                      // адаптируем слайдер для максимального разрешения в 768
            {                             // копируем с сайта
                breakpoint: 992,
                settings: {
                arrows: false,         // Для маленьких экранов убираем стрелочки и добавляем кружочки.
                dots: true 
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function() {
        $(this) 
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
  

  // Берём все теги "ul" с классом ".catalog__tabs" и кликаем в нём по "li" , у которых НЕ будет класс "catalog__tab_active"
  // "(this)" - это тот элемент, на который мы нажали. И для этого "li" на который мы нажали и которого нет класса активности,
  // для него добавляем класс активности ".addClass('catalog__tab_active')". Дальше, все соседние классы ".siblings()"
  // удаляют класс активности ".removeClass('catalog__tab_active')", если он у них присутствовал.
  //Дальше берём ближайший элемент "div", блок(у нас это "container", но можно было обернуть отдельно всю структуру с табами в какой то блок)
  // ".closest('div.container')" и находим там блок "catalog__content" - ".find('div.catalog__content')".
  //Убираем у этого блока класс активности - ".removeClass('catalog__content_active')".
  //".eq($(this).index())" - эта часть команды получает номер элемента, на который мы нажали.Нажали на 2ой таб - будет индекс 2 и т.д
  // И для соответствующего индеса назначается соответствующий номер контента, которому даём класс активности.
    
   // $('.catalog-item__link').each(function(i){
   //     $(this).on('click', function(e){
   //         e.preventDefault();
   //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active');
   //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active');
   //         })
   //     });
    

    //Каждый "each()"Элемент, с классом ".catalog-item__link". для них будет выполняться "function".
    //Выбранный элемент "$(this)", когда на него будут кликать ".on('click')", будет выполняться "function" "e.preventDefault()"
    //(это отменит стандартное поведение браузера при переходе по ссылке.) и элемент с классом "catalog-item__content" будет переключать
    //свой класс ".toggleClass()" на "catalog-item__content__active" (".toggleClass()" - переключение работает так - если класс есть,
    //то он будет убираться, если нет, то будет добавляться).И всё тоже самое дальше для ".catalog-item__list".
    //"eq(i)" - привязка по индексу. Говорим, что если кликаем по эелементу "i" , то переключение будет происходить только у элемента "i", 
    // а не на всей странице.
        // Дальше тоже самое для кнопки "НАЗАД"

   // $('.catalog-item__back').each(function(i){
   //     $(this).on('click', function(e){
   //         e.preventDefault();
   //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active');
   //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active');
  //          })
//
  //      });
    

    // ДАльше тоже самое, только оптимизированный вариант.
    // Создаём функцию, которую назовём "toggleSlide" с аргументом "(item)"
    // Теперь вызываем функцию и вместо "(item)" подставляем нужный нам элемент 
    // toggleSlide('.catalog-item__link')
    // toggleSlide('.catalog-item__back')
    
    function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active');
                })
    
            });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


    //Так можно ссылаться на data атрибут. С помощью "fadeOut()"  можно проверить, верно ли сослались на нужные элементы (они плавно скроются со страницы)
    /* $('[data-modal=consultation]').fadeOut(); */
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
    });

    //По клику на элементы с нужным дата-атрибутом, будет происходить фукция - наж затемнённый экран ".overlay'", который по умолчанию скрыт,
    //он будет показываться ".fadeIn();" То же и с модальным окном "#consultation".Дальше по аналогии делаем,что бы всё скрывалось ".fadeOut()"при нажатии на крестик.

    /* $('.button_mini').on ('click', function(){
        $('.overlay, #order').fadeIn('slow');     
    }); */

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow'); 
        });
    });

    //Делаем, что бы при клике на каждую кнопку, брался соответствующий текст из ".modal__descr". "(i)" отвечает номер элемента по порядку.
// "$('#order .modal__descr')" - говорим, что внутри нашего окна "order" есть элемент ".modal__descr". Дальше внутрь него будем помещать текст
//".text" , ктороый вытаскиваем из "'.catalog-item__subtitle'" 
    
    //$('.feed-form').validate(); // Так включаем валид-плагин.Но так будет работать только 1вая форма с таким классом.(особенность плагина.)
    //Включаем через id. Даём id первой форме. Остальные указываем по id окон, что у такого то то окна с таким id, есть форма
   // $('#consultation-form').validate();
   // $('#order form').validate();
    $('#consultation form').validate({
        rules: {
            name: { // название поля обязательно должно быть указано в верстке
                required: true, // обязательность заполнения
               // minlength: 2,
                rangelength: [2, 23]
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true        //что бы вводить именно мейл   
            }
          },
          messages: {      // Так настраиваются сообщения при вводе.Так же все энадписи можно стилизовать посмотрев их класс в браузере в режиме разработчика
            name: {        
                required: "Пожалуйста, введите своё имя",
        //        minlength: jQuery.validator.format("Введите минимум {2} символа"),
                rangelength: jQuery.validator.format("Введите от {2} до {23} символов")
            },
            phone: "Пожалуйста, введите свой номер",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильный адрес почты"
            }
          }
    });

        // Дальше делаем функцию что бы не повторять код заново для следующих форм
    function valideForms(form) {
        $(form).validate({
        rules: {
            name: {
                required: true,
                rangelength: [2, 23]
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true 
            }
          },
          messages: {      
            name: {        
                required: "Пожалуйста, введите своё имя",
                rangelength: jQuery.validator.format("Введите от {2} до {23} символов")
            },
            phone: "Пожалуйста, введите свой номер",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильный адрес почты"
            }
          }
    });
    };
     // и теперь вызываем эту функцию
    valideForms('#order form');
    valideForms('#consultation-form');

    // Подключаем маску ввода номера
    $('input[name=phone]').mask("+7 (999) 999-99-99");  // ко всем инпутам с названием "name=phone" будеи прикреплена такая маска, её можно редактировать

    // Отправка писем
    // Обращаемся ко всем формам на сайте, говорим, что когда будут сабмититься (отправляться0 все данные, то будет выполняться функция
    //по которой будет отменяться стандартное поведение браузера (перезагрузка страницы после отправки данных. А мыделаем по ajax - взаимодействие с сервером
    // без обновления страницы).Дальше обращаемся к встроенному в jquery ajax и настраиваем его. "type: "POST"" - говорим что мы будет отдавать
    //данные серверу, Дальше указываем обработчик, сам мейлер и путь к нему. 
    //Дальше указываем какие данные будет отправлять " data: $(this)" и обрабатываем данные специальным методом ".serialize()" , что бы сервер мог их принять
    //Потом говорим, что после того как данные отправяться и всё будет выполнено ".done", все мнпуты в форме - "$(this).find("input")" будут
    // становиться пустыми - .val(""). И говорим, что наша форма очищается "$('form').trigger('reset')". 
    //И "return false;" - завершающая конструкция.
    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) { 
            return;            // От багов.Если форма не прошла валидацию,то дальнейшая функция прекращается.Что бы не отправлялись пустые данные с формы
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('#consultation, #order').fadeOut(); // делаем что бы после всего модальные окна закрывались
            $('.overlay, #thanks').fadeIn(); // и показывалось друго модальное окно с благодарностью

            $('form').trigger('reset');
        });
        return false;
    });

    // Стрелка скрола вверх
    // "$(window)"- обращаемся ко всему окну. Что когда будем скролить," if ($(this).scrollTop() > 1600)" - если отступ сверху скролом 
    // будет > 1600рх, что будет выполн. условие - "$('.pageup').fadeIn();" - будет показываться наша стрелочка ввверх. 
    // Если нет - "else" - стрелочка будет скрываться.
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });


    //Плавный скрол
    // " $("a").on('click'" -Берём все ссылки по клику."this.hash !== """ - значит, что значение после знака "#" не пустое, таки образом
    // обращаемся только к локальным ссылкам на странице(которые ссылаются на id).И если єто значение не пустое, то 
    // отменяем стандартное поведение - "e.preventDefault();" (получается что стандартную анимацию), 
    // залаём константу "hash", в которую кладём наш #id  - "const hash = this.hash"
    // и также говорим, что тогда у всей страницы будет анимация jquery "$('html, body').animate" , которая будет происходить скролом 
    // "scrollTop" от нашей константы "$(hash)" (".offset()" это значит отступ). И в конце функция по возвращению стандартного поведения - "window.location.hash = hash;"
    
    $("a").on('click', function(e) {
        if (this.hash !== "") {
          e.preventDefault();

          const hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 80, function(){              //"1500" это скорость анимации 
            window.location.hash = hash;
          });
        }
      });

      /* $(window).on('click', function() {
        $('label.error').fadeOut();
      }) */
}); 

new WOW().init();              //Подключение Wow

//wow = new WOW(             // настройка Wow. Кладём плагин в переменную
//  {                                  
//    boxClass:     'wow',      // 
//    animateClass: 'animated', //
//    offset:       0,          //
//    mobile:       true,       //
//    live:         true        //
//  }
//  )
//  wow.init();           // запускаем переменную




