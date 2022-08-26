import './index.css'

const History = props => {
  const {texted, onDeleteBrowser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = texted
  const onDelete = () => {
    onDeleteBrowser(id)
  }
  return (
    <div>
      <li className="page">
        <div className="Indow">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="img" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
          <button className="some" id="delete" type="button" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="imgagedelete"
            />
          </button>
        </div>
      </li>
    </div>
  )
}
export default History
