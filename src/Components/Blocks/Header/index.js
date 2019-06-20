import React from 'react'
import {withRouter} from "react-router-dom"

import {Container, TabItem} from './styles'


const items = [
    {name: 'Home', route: '/'},
    {name: 'useState', route: '/state'},
    {name: 'useEffect', route: '/effect'},
    {name: 'useContext', route: '/context'},
    {name: 'useRef', route: '/ref'},
    {name: 'useMemo', route: '/memo'},
    {name: 'useCallback', route: '/callback'},
    {name: 'Suspense', route: '/suspense'},
]


const Header =  ({match}) =>{
    const page = match.path
    const renderTabItems= () => {
        return items.map(el => {
            return <>
                <TabItem to={el.route} isActive={page === el.route} key={el.name}>
                    {el.name}
                </TabItem>
            </>
        })
    }

    return <Container>
        {renderTabItems()}
    </Container>
}

export default withRouter(Header)