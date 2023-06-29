import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const infoItems = ['purchase', 'payment', 'shipping', 'return']
export default function FooterInfo() {
  return (
    <div className="footer__info">
      <div className="footer__widget">
        <h5>infomation</h5>
        <ul>
          {infoItems.map((item, index) => (
            <li key={index}>
              <Link to={'/'}>
                <FontAwesomeIcon icon={faAngleRight} />
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
