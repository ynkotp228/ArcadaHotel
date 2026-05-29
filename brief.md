структура
main page:

---
Header
Hero
about-us
Services (3 card (Номери, Ресторан, Коференц Зали))
Контакти (мапа + телефон + емейл)
Футер

Header {
    position sticky
   menu     swith lang       Logo clickable      tel   email
}
hero {
    bg photo 
    {

    Big logo
    slogan
    кнопка обрати номер 
    адрес {
        адрес (клікабельний)
    }
    соц мережі {
        слідкуйте за нами
    }
    }
}
services {
    3 картки вигляду:
        bg photo {
            h2 заголовок
            слоган
        }
    1. Готельні номери, ...
    2. Ресторан, ...
    3  Конференц зал, ...
    
    на десктоп показуються усі, на medium frame 2 + один посиредині, на мобілках карусель
    
}
about-us {
    bg photo {
        Про нас
         Розповідь про історію
    }
    три картки з текстом підсвічуються коли наводиш про переваги
     

}
 
contacts {
    зліва інтерактивна мапа      справа в колонку Адреса:.. Контактний номер телефону:... Емейл:.... 

}
footer {
    Лого - слоган - емейл - номер телефону - кнопки із інст та фейсб
}
---

hotel rooms page: 

Header {
    Готельні номери
}
RoomsCards {
    2 в колонку в сумі 4
    bg photo {
        h3 header
        p що містить
        h2 ціна за ніч
        *покращити*
    }

}
Question form {
    ім'я 
    email
    tel
    text
    submit
Відправка через formspree
}
footer {
    <Footer />
}
restoraunt page:
<Header />
Hero  {

    bg photo{
         h1 Рестaран      проведення заходів звертайтесь:  tel email
    }
}
RestorauntContent
{
    картка 1  {
    зліва фото справа h2 \n текст\n час роботи\n кнопка переглянути меню веде на сторінку: вибачте, це тренувальний сайт і меню поки немає
    }
    2 {
        заголовок (святкування)
        фото
        текст
        кнопка переглянути меню та зателефонувати
        
    }
    3 {
      про інтер'єр
    }
}
<Footer />

conference halls page {
    <Header />
    hero {
        h1 Конференц зали     проведення заходів звертайтесь:  tel email
    }
    ConferenceContent {
        card 1{
            photo            
            h2 Зал Smart
            text
            Кнопка забронювати
        }
        card 2 {
            photo
            h2 Optima
            text
            кнопка бронь

        }
        card 3 {
            photo
            h2 Max
            text
            кнопка бронь
        }
    }
    <Footer />


}