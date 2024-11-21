function PrivateRoute({children}) {
    const token = useSelector(state => state.authStore.token)
    if (!token) {
        return <Navigator to="/sign in" replace />
    }
    return children

}

export default PrivateRoute