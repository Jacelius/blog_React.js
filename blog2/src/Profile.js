import './css/profile.css';

function Profile() {
    return (
        <div className="profile">
            <div className="profileImg">
                <img alt="portrait" src="https://betania.dk/wp-content/uploads/2018/05/Portrait_Placeholder.png"></img>
            </div>
            <div className="profileText"> 
                <h1> Hey, I'm Silas! </h1>
                <br/>
                <p class="line-1 anim-typewriter">Studying Software Development @ ITU </p>
            </div>
        </div>
    );
}
export default Profile;
