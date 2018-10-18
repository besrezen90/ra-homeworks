class Article extends React.Component {
  render() {
    return(
      <div>
        {this.props.articles.map((item, idx) => {
            return (
              <article className="article" key={idx}>
                <h2>{item.subject}</h2>
                <p>{item.body}</p>
              </article>
            )
          })}
      </div>
    ) 
  }
}