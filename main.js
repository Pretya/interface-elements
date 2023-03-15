
const pageContainer = document.querySelector('body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--left > app-lessons-list > nav > div');
const allLessonsElement = document.querySelector('body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--left > app-lessons-list > nav > app-lessons-timeline > ul > li:nth-child(38) > span').innerHTML;
const lessonLearnedElement = document.querySelector('body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--left > app-lessons-list > nav > app-lessons-timeline > ul > li:nth-child(9) > a').innerHTML;
const allHomeworkCount = document.querySelector('body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--right > app-rating-widget > app-widget-table > table > tbody > a:nth-child(7) > td > div > div > span:nth-child(1)').innerHTML;
const listElements = [
  {text: 'На проверке д/з:', state: 4, class: 'orange'},
  {text: 'Проверено д/з:', state: 7, class: 'green'},
  {text: 'Сдано д/з:', state: allHomeworkCount},
  {text: 'Осталось занятий:', state: allLessonsElement - lessonLearnedElement, class: 'orange'},
  {text: 'Пройдено занятий:', state: lessonLearnedElement, class: 'green'},
  {text: 'Всего занятий:', state: allLessonsElement},
];
listElements.forEach(el => {
  pageContainer.insertAdjacentHTML('afterend', `
  <style scoped>
     p {color: #d7cfcf; padding: 5px; margin: 0;}
    .page-container {color: red; padding: 5px; margin: 0 ; background: #004282; list-style: none;}
    .green {color: #09d309;}
    .orange {color: orange;}
  </style>
  <ul class="page-container">
    <li>
     <p class="${el.class}">${el.text} ${el.state}</p>
    </li>
  </ul>  
  `)
});