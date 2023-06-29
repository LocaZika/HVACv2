import './Loader.scss';
export default function Loader() {
  return (
    <div className="loader">
      <div className="loader__cycle">
        <span className="loader__cycle--track"></span>
      </div>
    </div>
  )
}
