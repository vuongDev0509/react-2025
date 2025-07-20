export default function WelcomePage() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  // console.log(user)
  return (
    <div>
      <h1>Chào mừng {user?.name}!</h1>
      {user?.avatar && <img src={user.avatar} alt="Avatar" width={150} />}
    </div>
  );
}
