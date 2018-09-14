'use strict';

Stars.defaultProps = {
  stars: 0
};

function CalcStars(count) {
  const starsArray = []
  for (let i = 0; i < count; i++) {
    starsArray.push(
      <li key={i}><Star/></li>
    )
  }

  return starsArray;
}

function Stars({count}) {
  return (
    <ul className="card-body-stars u-clearfix">
      {count >= 1 && count <= 5 && typeof count === 'number' && CalcStars(count)}
    </ul>
  )
}
