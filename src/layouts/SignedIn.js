import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fminio.com.tr%2F&psig=AOvVaw051uuJ1wsgMleJzDZYDit4&ust=1623357379598000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjH4NGzi_ECFQAAAAAdAAAAABAI"></Image>
                <Dropdown pointing="top left" text="Basak">


                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={props.signOut} text="Çıkış yap" icon="sign-out" />
                    </Dropdown.Menu>

                </Dropdown>
            </Menu.Item>
        </div>
    )
}
