const setToken = newToken => {
    let token = `bearer ${newToken}`
    config = {
        headers: { Authorization: token },
    }
}

let config = ""

const exportedToken = { config, setToken }
export default exportedToken