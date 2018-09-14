'use strict';

const xhr = new XMLHttpRequest();
xhr.open('GET', "https://neto-api.herokuapp.com/etsy");
xhr.send()

xhr.addEventListener('load', function() {
    if (200 <= xhr.status && xhr.status < 300) {
        let books = JSON.parse(xhr.responseText)
        ReactDOM.render(<Listing items={books}/>, document.getElementById('root'));
    }
})

Listing.defaultProps = {
  items: []
};

function Listing({items}) {
  function checkItemTitle(title) {
    if (title.length > 50) 
      return title.slice(0, 50) + '...';
    return title;
  }

  function checkItemPrice(price, currency) {
    if (currency === "USD") 
      return `$${price}`;
    if (currency === "EUR") 
      return `€${price}`;
    return price + ' ' + currency;
  }

  function checkItemLevel(quantity) {
    if (quantity < 10) 
      return `level-low`;
    if (quantity < 20) 
      return `level-medium`;
    return `level-high`;
  }

  const showItemList = items.map(item => {
    return (
      <div key={item.listing_id} className="item">
        <div className="item-image">
          <a href={item.url}>
            <img
              src={item.MainImage.url_570xN}/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{checkItemTitle(item.title)}</p>
          <p className="item-price">{checkItemPrice(item.price, item.currency_code)}</p>
          <p className={`item-quantity ${checkItemLevel(item.quantity)}`}>{item.quantity} left</p>
        </div>
      </div>
    )
  })

  return (<div className="item-list">{showItemList}</div>)

}