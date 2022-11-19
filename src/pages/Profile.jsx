import { useDispatch, useSelector } from 'react-redux'

export default function Profile() {
  const { showName, name } = useSelector((store) => store);
  const dispatch = useDispatch();

  const setShowName = (event) => {
    event.preventDefault()
    const dataInput = {
      showName: showName,
    }
    dispatch({ type: 'SET_POST', payload: dataInput })
  }

return (
  <div>
  <h4>Profile</h4>
  <input
  type="checkbox"
  checked={showName}
  value={showName}
  onChange={setShowName}
  />
  <span>Show Name</span>
  {showName && <div>{name}</div>}
  </div>
);
}