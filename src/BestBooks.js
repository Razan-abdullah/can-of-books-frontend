import Carousel from 'react-bootstrap/Carousel';

class car extends React.Component {





 
  render() {
    return (
<div>
        
<body>
  <section aria-label="Newest Photos">
    <div class="carousel" data-carousel>
      <button class="carousel-button prev" data-carousel-button="prev">&#8656;</button>
      <button class="carousel-button next" data-carousel-button="next">&#8658;</button>
      <ul data-slides>
        <li class="slide" data-active>
          <img src="https://source.unsplash.com/78A265wPiO4" alt="Nature Image #1">
        </li>
        <li class="slide">
          <img src="https://source.unsplash.com/eOpewngf68w" alt="Nature Image #2">
        </li>
        <li class="slide">
          <img src="https://source.unsplash.com/ndN00KmbJ1c" alt="Nature Image #3">
        </li>
      </ul>
    </div>
  </section>
</body>


</div>

    )
  }}

export default car;
