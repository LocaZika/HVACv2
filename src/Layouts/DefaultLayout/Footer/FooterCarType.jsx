import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const carType = ['hatchback', 'sedan', 'SUV', 'crossover'];
export default function FooterCarType() {
  return (
    <div className="footer__car-type">
      <div className="footer__widget">
        <h5>car type</h5>
        <ul>
          {
            carType.map((item, index) => (
              <li key={index}>
                <Link to={'/'}>
                  <FontAwesomeIcon icon={faAngleRight} />
                  {item}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
