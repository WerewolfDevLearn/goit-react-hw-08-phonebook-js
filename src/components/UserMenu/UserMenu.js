import defaultAvatar from '../../images/Avatar_PH.svg';

export default function UserBar({ email }) {
  return (
    <div className="userBarContainer">
      <p className="userEmail">{email}</p>
      <img src={defaultAvatar} alt="avatar" className="userAvatar" />
      <button type="button"> LogOut</button>
    </div>
  );
}
