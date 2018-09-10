function nameDay(num) {
    switch(num) {
        case 0: return "Воскресенье"; break;
        case 1: return "Понедельник"; break;
        case 2: return "Вторник"; break;
        case 3: return "Cреда"; break;
        case 4: return "Четверг"; break;
        case 5: return "Пятница"; break;
        case 6: return "Cуббота"; break;
    }
}

function nameMonth(num, sts) {
    let month
    
    switch(num) {
        case 0: month = "Январь"; break;
        case 1: month = "Февраль"; break;
        case 2: month = "Март"; break;
        case 3: month = "Апрель"; break;
        case 4: month = "Май"; break;
        case 5: month = "Июнь"; break;
        case 6: month = "Июль"; break;
        case 7: month = "Август"; break;
        case 8: month = "Сентябрь"; break;
        case 9: month = "Октябрь"; break;
        case 10: month = "Ноябрь"; break;
        case 11: month = "Декабрь"; break;
    }

    if(!sts) return month
    else {
        if(month[month.length - 1] === 'ь' || month[month.length - 1] === 'й') return month.slice(0, -1) + 'я';
        else return month + 'a';
    }
}

function Calendar({date}) {
  
    const firstMonthDay = new Date(Date.parse(`${date.getFullYear()}-${date.getMonth() + 1}-01`));
    
    let firstMonthDayCopy = firstMonthDay;

    if (firstMonthDayCopy.getDay() > 1) {
        firstMonthDayCopy = new Date(firstMonthDayCopy.getTime() - (firstMonthDayCopy.getDay() - 1) * 86400000);
    }

    function createWeek(firstDay) {
        const weekData = [];
        for (let i = 0; i < 7; i++) {
            weekData.push(new Date(firstDay.getTime() + i * 86400000));
        }
        let week = weekData.map((date, index) => {
            if (date.getTime() === (new Date()).setHours(0, 0, 0, 0)) {
                return (
                    <td key={index} className="ui-datepicker-today">{date.getDate()}</td>
                );
            }
            if (date.getMonth() === firstMonthDay.getMonth()) {
                return (
                    <td key={index}>{date.getDate()}</td>
                );
            } else {
                return (
                    <td key={index} className="ui-datepicker-other-month">{date.getDate()}</td>
                );
            }
        });
        return (
            <tr>
                {week}
            </tr>
        );

    }

    function createMonth(firstDay) {
        let calendar = [];
        while (true) {
            calendar.push(createWeek(firstDay));
            firstDay = new Date(firstDay.getTime() + 7 * 86400000);
            if (firstDay.getMonth() !== firstMonthDay.getMonth()) {
                return calendar;
            }
        }
    }
  
    return (
    <div className="ui-datepicker">

      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{nameDay(date.getDay())}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{nameMonth(date.getMonth(), true)}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>

      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{nameMonth(date.getMonth())}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="ui-datepicker-week-end" />
            <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
            <tr>
              <th scope="col" title="Понедельник">Пн</th>
              <th scope="col" title="Вторник">Вт</th>
              <th scope="col" title="Среда">Ср</th>
              <th scope="col" title="Четверг">Чт</th>
              <th scope="col" title="Пятница">Пт</th>
              <th scope="col" title="Суббота">Сб</th>
              <th scope="col" title="Воскресенье">Вс</th>
            </tr>
        </thead>
        <tbody>
            {createMonth(firstMonthDayCopy)}
        </tbody>
      {/* Конец таблицы */}
      </table>




































{/* Окончание блока календаря */}
    </div>
  )
}