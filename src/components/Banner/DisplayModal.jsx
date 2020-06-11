import React, { useState } from "react";
import { Modal, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import recruitLogo from "../../assets/pics/recruitask.png"
export default function DisplayModal(props) {
    const [modalVisible, SetModalVisible] = useState(false);
    const state = useSelector(state => state)
    const currentUser = useSelector(state => state)
    let { show, SetVisibility } = props
    console.log(currentUser, "user");
    return (
        <div>
            <Modal
                title="recruitask" icon={recruitLogo} className="titleName"
                style={{ textAlign: "center" }}
                centered
                visible={show}
                onCancel={SetVisibility}
                animation={false}
            >
                <Button id="btnGitHub"
                    href={`${process.env.REACT_APP_URL}/api/auth/github`}
                ><FaGithub /> Login with GitHub</Button>
                <Button id="btnLinkedIn" href={`${process.env.REACT_APP_URL}/api/auth/linkedin`}
                ><FaLinkedin />Login with LinkedIn</Button>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eius hic impedit vitae, esse provident rerum atque enim eveniet error.
                    </p>
            </Modal>
        </div>
    );
}