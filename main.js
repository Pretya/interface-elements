
const pageContainer = document.querySelector('body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--left > app-lessons-list > nav > div');
const allLessonsElement = document.querySelector('body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--left > app-lessons-list > nav > app-lessons-timeline > ul > li:nth-child(38) > span').innerHTML;
const lessonLearnedElement = document.querySelector('body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--left > app-lessons-list > nav > app-lessons-timeline > ul > li:nth-child(9) > a').innerHTML;
const allHomeworkCount = document.querySelector('body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--right > app-rating-widget > app-widget-table > table > tbody > a:nth-child(7) > td > div > div > span:nth-child(1)').innerHTML;
const newElement = document.createElement('section');
const lessonsLeft = allLessonsElement - lessonLearnedElement;
const listElements = [
  {text: 'Всего занятий:', element: allLessonsElement},
  {text: 'Пройдено занятий:', element: lessonLearnedElement, state: 'green'},
  {text: 'Осталось занятий:', element: lessonsLeft, state: 'orange'},
  {text: 'Сдано д/з:', element: allHomeworkCount},
  {text: 'Проверено д/з:', element: allHomeworkCount, state: 'green'},
  {text: 'На проверке д/з:', element: allHomeworkCount, state: 'orange'},
];


const newBlock = listElements.forEach(el => {
  pageContainer.after(newElement);
  newElement.insertAdjacentHTML('beforeend', `
  <style scoped>
    section {margin-bottom: 10px; border-radius: 10px; background: #004282;}
     p {color: #d7cfcf; padding: 5px; margin: 0;}
    .page-container {color: red; padding: 5px; margin: 0 ; list-style: none;}
    .green {color: #09d309;}
    .orange {color: orange;}
  </style>
  <ul class="page-container">
    <li>
     <p class="${el.state}">${el.text} ${el.element}</p>
    </li>
  </ul>  
  `)
});

