const {withRouter} = ReactRouterDOM;

function HeaderComponent({location}) {
  const articleId = location.pathname.match(/\d/);
  if(articleId) {
    return (
      <nav className="navbar navbar-light bg-light">
          <p className="navbar-brand">Уникальный идентификатор статьи: { articleId[0] }</p>
      </nav>
    )
  } else return <p className="navbar-brand">Статья не выбрана</p> 

}


const Header = withRouter(HeaderComponent);
