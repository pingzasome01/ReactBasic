import axios from 'axios'

const ConsumeAPI = async (method, path, data) => {
    // var self = this // self will now be referred to your component
    // var data = JSON.stringify({
    // })
    var config = {
        method: method,
        url: 'http://192.168.43.183:3100/api/' + path,
        headers: { 
            'Content-Type': 'application/json'
          },
        data: JSON.stringify(data)
    }

    return await axios(config)
        .then(function (response) {
            // self.setState({ user: response.data })
            return JSON.parse(JSON.stringify(response.data))
            // console.log(JSON.stringify(response.data))

        })
        .catch(function (error) {
            console.log(error)
        })
}
export default ConsumeAPI