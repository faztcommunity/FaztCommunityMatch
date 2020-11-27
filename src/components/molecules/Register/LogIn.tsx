import React, {useState} from 'react'
import ModalLogin from './ModalLogin'

 function LogIn() {
const [showModal, setShowModal] = useState(false);


const openModal = () => {
    setShowModal(prev => !prev);
};
console.log(openModal)

    return (
        <>
        <button
        onClick={openModal}
        className="btn-big-login">
            <svg className="profile-user-svg" width="64" height="64" viewBox="0 0 64 64" fill="none"
	xmlns="http://www.w3.org/2000/svg">
	<path
		d="M19.019 48.1208L19.0188 48.1207C18.3166 47.5217 17.9114 46.643 17.9114 45.7224C17.9114 40.8191 21.8778 36.8888 26.7955 36.8888H38.1445C43.0614 36.8888 47.0131 40.817 47.0131 45.7224C47.0131 46.6452 46.6099 47.5207 45.9075 48.1189L45.9065 48.1197C42.2854 51.2119 37.5904 53.078 32.4623 53.078C27.3355 53.078 22.6416 51.212 19.019 48.1208ZM32.4687 1.81445C15.6326 1.81445 1.98096 15.4633 1.98096 32.3009C1.98096 49.1385 15.6313 62.7874 32.4687 62.7874C49.3075 62.7874 62.9565 49.1385 62.9565 32.3009C62.9565 15.4634 49.3075 1.81445 32.4687 1.81445ZM32.4687 12.6313C37.3047 12.6313 41.2233 16.5511 41.2233 21.3845C41.2233 26.2191 37.3048 30.1378 32.4687 30.1378C27.6354 30.1378 23.7168 26.2193 23.7168 21.3845C23.7168 16.551 27.6355 12.6313 32.4687 12.6313Z"
		fill="#FAFAFA" />
</svg>

            <p className="have-account">¿Ya tienes una cuenta?<br/>
            <span className="log-in">Iniciar sesión</span></p>
            <ModalLogin
            showModal={showModal}
            setShowModal={setShowModal}
            />
        </button>
        </>
    )
}

export default LogIn
