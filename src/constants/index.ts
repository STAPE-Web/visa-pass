import Flags from "@/assets/flags"
import Icons from "@/ui/Icons"

export const navList = [
    { name: "Визы", link: "/#visas" },
    { name: "Отзывы", link: "/#reviews" },
    { name: "Контакты", link: "/#contacts" },
    { name: "FAQ", link: "/#faq" }
]

export const advantageList = [
    { name: "Опыт", icon: Icons.Verifed, description: "Опыт работы с визами более 10 лет" },
    { name: "В ногу со временем", icon: Icons.Time, description: "Работаем удаленно со всеми городами РФ, мы оформим для вас визу дистанционно" },
    { name: "Гарантии", icon: Icons.Sheild, description: "Минимальный процент отказов по нашим клиентам" },
    { name: "Бонусы", icon: Icons.Star, description: "Постоянным клиентам мы всегда даем приятные скидки" },
]

export const visasList = [
    { name: "Испания", id: "spain", flag: Flags.Spain },
    { name: "Хорватия", id: "croatia", flag: Flags.Croatia },
    { name: "Чехия", id: "czech", flag: Flags.Czech },
    { name: "Франция", id: "france", flag: Flags.France },
    { name: "Германия", id: "germany", flag: Flags.Germany },
    { name: "Греция", id: "greece", flag: Flags.Greece },
    { name: "Италия", id: "italy", flag: Flags.Italy },
    { name: "Польша", id: "poland", flag: Flags.Poland },
]

export const reviewList = [
    {
        username: "Иван Петров",
        text: "Отличный сервис! Весь процесс получения шенгенской визы прошел быстро и без проблем. Очень рекомендую!",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        username: "Анна Смирнова",
        text: "Visa Pass действительно облегчил процесс подачи на визу. Сотрудники всегда на связи и готовы помочь. Пять звезд!",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        username: "Мария Иванова",
        text: "Я была приятно удивлена скоростью и профессионализмом сервиса Visa Pass. Все документы были проверены быстро, и я получила визу без задержек.",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        username: "Дмитрий Сидоров",
        text: "Очень удобный и понятный интерфейс. С Visa Pass оформление визы стало намного проще и быстрее. Спасибо!",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        username: "Алексей Кузнецов",
        text: "Потрясающий сервис! Друзья рекомендовали, и теперь я тоже советую Visa Pass всем, кто планирует поездки в Европу.",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg"
    }
];

export const faqList = [
    {
        question: "Какие условия присутствуют на визе?",
        answer: "На визе присутствуют все обязательные условия, указанные в договоре о переводе на визу. Также есть дополнительные условия, которые могут включать места пребывания, даты выезда, сроки пребывания и др."
    },
    {
        question: "Какие условия присутствуют на визе?",
        answer: "На визе присутствуют все обязательные условия, указанные в договоре о переводе на визу. Также есть дополнительные условия, которые могут включать места пребывания, даты выезда, сроки пребывания и др."
    },
    {
        question: "Какие условия присутствуют на визе?",
        answer: "На визе присутствуют все обязательные условия, указанные в договоре о переводе на визу. Также есть дополнительные условия, которые могут включать места пребывания, даты выезда, сроки пребывания и др."
    },
    {
        question: "Какие условия присутствуют на визе?",
        answer: "На визе присутствуют все обязательные условия, указанные в договоре о переводе на визу. Также есть дополнительные условия, которые могут включать места пребывания, даты выезда, сроки пребывания и др."
    },
    {
        question: "Какие условия присутствуют на визе?",
        answer: "На визе присутствуют все обязательные условия, указанные в договоре о переводе на визу. Также есть дополнительные условия, которые могут включать места пребывания, даты выезда, сроки пребывания и др."
    },
    {
        question: "Какие условия присутствуют на визе?",
        answer: "На визе присутствуют все обязательные условия, указанные в договоре о переводе на визу. Также есть дополнительные условия, которые могут включать места пребывания, даты выезда, сроки пребывания и др."
    },
]

export const visasTypeList = ["Туристическая", "Рабочая", "Студенческая", "Медицинская", "По приглашению", "По бизнесу", "По недвижимости", "Другой вариант"]

export const documentsList = ["Заграничный паспорт с окончанием срока действия не менее трех месяцев ( + старый загран паспорт если имеется)", "2 цветные фотографии 3,5 х 4,5", "Справка с места работы", "Выписка с банковского счета или справка об обмене валюты из расчета не менее 60 евро в сутки на человека", "Бронь авиабилета и отеля (приглашения) если имеется", "Копия паспорта РФ", "Анкета туриста", "Медицинская страховка, охватывающая весь период пребывания или первую поездку и действительная для всех стран Шенгенского соглашения. Она должна покрывать все расходы, которые могут возникнуть в связи с репатриацией по медицинским причинам, срочной медицинской помощью, экстренной госпитализацией или смертью заявителя во время пребывания. Сумма минимального покрытия должна составлять 30 000 евро.", "Согласие на обработку персональных данных"]

export const addDocList = [
    { type: "Для детей и учащихся", array: ["копия пенсионного удостоверения", "для безработных: желательно подтверждение весомых финансовых гарантий", "справка с места работы спонсора", "спонсорское письмо", "выписка с банка личная или спонсора"] },
    { type: "Рабочая виза", array: ["копии страниц заграничного и внутреннего паспортов", "подтверждение квалификации", "данные о принимающей компании и трудовой договор", "медицинская справка и медстраховка", "справка об отсутствии судимости", "подтверждение финансовой состоятельности и др."] },
    { type: "Студенческая виза", array: ["действующий загранпаспорт", "копии страниц внутреннего паспорта;", "заявление-анкета и цветные фото размера 3,5 на 4,5 см", "справка с места учебы или работы", "справки о несудимости и финансовом положении.", `Помимо прочего потребуется пригласительное письмо от стороны страны в которую вы едeте. В нем должны быть отмечены подробные данные об образовательном учреждении, включая его наименование, продолжительность и стоимость курса, описание учебной программы и прочие важные нюансы (включая подтверждение оплаты за предстоящее обучение).`] },
    { type: "Для предпринимателей", array: ["копия свидетельства ОГРНИП", "копия свидетельства ИНН"] },
    { type: "При судимости", array: ["действительный загранпаспорт", "копии страниц российского паспорта", "фото формата 3,5 на 4,5 см", "анкета и медстраховка", "справка с места работы", "свидетельство платежеспособности", "Дополнительно к этим бумагам прилагается справка об отсутствии судимости. Она выдается региональными органами МВД по месту прописки. Само погашение происходит автоматически в течение определенного периода, который зависит от степени тяжести преступления. Если нужна срочная виза, понадобится сделать запрос о снятии судимости раньше установленного времени."] },
]