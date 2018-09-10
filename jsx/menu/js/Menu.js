function getItemRow(item, index) {
  return (
    <li key={index}>
      <a href={item.href}>{item.title}</a>
    </li>
  )
}

function Menu({items, opened}) {
  if (opened) {
    return (
      <div className="menu menu-open">
        <div className="menu-toggle"><span/></div>
        <nav>
          <ul>
            {items.map(getItemRow)}
          </ul>
        </nav>
      </div>
    )
  } else {
    return (
      <div className="menu">
        <div className="menu-toggle"><span/></div>
      </div>
    )
  }
}