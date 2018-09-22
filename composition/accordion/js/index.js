'use strict';

class App extends React.Component {

  render() {
    const list = [
      {
        title: 'Компоненты',
        text: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам ' +
            'управляет своим состоянием, а композиция компонентов (соединение) позволяет созд' +
            'авать более сложные компоненты. Таким образом, создается иерархия компонентов, п' +
            'ричем каждый отдельно взятый компонент независим сам по себе. Такой подход позво' +
            'ляет строить сложные интерфейсы, где есть множество состояний, и взаимодействова' +
            'ть между собой.'
      }, {
        title: 'Выучил раз, используй везде!',
        text: 'После изучения React вы сможете использовать его концепции не только в браузере,' +
            ' но также и при разработке мобильных приложений с использованием React Native.'
      }, {
        title: 'Использование JSX',
        text: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он ' +
            'позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компон' +
            'ентов и повышает читаемость кода.'
      }
    ];

    return (
        <Main>
            {list.map((item, idx) => (
               <ArticleWidget 
                  {...item}
                  key={idx}
                />
             ))}
        </Main>
    )
  }
}


class Main extends React.Component {
    render() {
      const { children } = this.props;
      
      return (    
        <main className="main">
          {children}
        </main>
      );
    }
  }




  class ArticleWidget extends React.Component {
    state = {
      isShow: false
    }
    toggle = () => {
      this.setState((state) => ({
        isShow: !state.isShow,
      }))
    }
    render() {
      const { isShow }= this.state;
     
      const { title, text, key } = this.props;
      
      return (
        <section key={key} className={`section ${this.state.isShow && `open`}`}>
          <button>toggle</button>
          <h3 className="sectionhead" onClick={this.toggle}>{title}</h3>
          <div className="articlewrap">
            <div className="article">
              {text}
            </div>
          </div>
        </section>

      )
    }
  }