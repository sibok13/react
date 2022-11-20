import { useDispatch, useSelector } from 'react-redux'

export default function Profile() {
  const { showName, name } = useSelector((store) => store.showNameParam);
  const dispatch = useDispatch();

  const setShowName = (event) => {
    const dataInput = {
      showName: handleChange(),
    }
    dispatch({ type: 'SET_PARAM', payload: dataInput })
  }

  const handleChange = () => {
    return (!showName);
  };

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