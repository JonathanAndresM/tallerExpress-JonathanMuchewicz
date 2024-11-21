function signRoute({children}) {
    const token = useSelector(state => state.authStore.token)
    if (token) {
        return <Navigator to="/home" replace />
    }
    return children
}

export default signRoute


const logout = createAction("logout")