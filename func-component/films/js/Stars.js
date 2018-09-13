'use strict';

Stars.defaultProps = {
  stars: 0
};

function CalcStars(count) {
  let StarsArray = []
  for (let i = 0; i < count; i++) {
    StarsArray.push(
      <li><Star/></li>
    )
  }
  return StarsArray;
}

function Stars({count}) {
  return (
    <ul className="card-body-stars u-clearfix">
      {count >= 1 && count <= 5 && typeof count === 'number' && CalcStars(count)}
    </ul>
  )
}
