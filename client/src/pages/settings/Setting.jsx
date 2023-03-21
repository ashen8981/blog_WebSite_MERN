import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar'
import SETTINGIMG from '../../images/NodeImg1.jpg'

export default function Setting() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img 
                        src={SETTINGIMG} 
                        alt="" 
                    />
                    <label htmlFor='fileInput'>
                        <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='Ashen' />
                <label>Email</label>
                <input type="email" placeholder='ashenmalindu@gmail.com' />
                <label>Password</label>
                <input type="password" />
                <button className="settingSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
