import emmaImg from '../../img/testimonio-emma.png';
import '../../css/Testimonal.css';

const Testimonial = (props) => {
  return (
    <>
      <div className="container__testimonial">
        <img className="img__testimonial" src={emmaImg} alt="Photo Emma" />
        <div className="container__testimonial--text">
          <p className="testimonial-name">
            {props.name} en {props.country}
          </p>
          <p className="testimonial-position">
            {props.position} en {props.company}
          </p>
          <p className="testimonial-text">{props.testimonial}</p>
        </div>
      </div>
    </>
  );
};

export { Testimonial };
